const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');
const nodemailer = require('nodemailer');
require('dotenv').config();

// POST /api/contact - Submit inquiry and send email
router.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, service, package, message } = req.body;

        // 1. Save to Database
        const newInquiry = new Inquiry({
            name,
            email,
            phone,
            service: package || service, // Use package if selected, else service
            message
        });
        await newInquiry.save();

        // 2. Send Email via Nodemailer
        // Only attempt to send email if credentials are provided
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const emailFrom = process.env.EMAIL_FROM || process.env.EMAIL_USER;

            // Email Template Helper
            const createEmailTemplate = (title, content) => `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
                        .container { max-width: 600px; margin: 20px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
                        .header { background-color: #0A1A2F; color: #D4AF37; padding: 20px; text-align: center; }
                        .header h1 { margin: 0; font-size: 24px; }
                        .content { padding: 30px; }
                        .field { margin-bottom: 15px; }
                        .label { font-weight: bold; color: #003F7D; }
                        .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #eee; }
                        .button { display: inline-block; padding: 10px 20px; background-color: #D4AF37; color: #0A1A2F; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 15px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>${title}</h1>
                        </div>
                        <div class="content">
                            ${content}
                        </div>
                        <div class="footer">
                            &copy; ${new Date().getFullYear()} KyrosData. All rights reserved.
                        </div>
                    </div>
                </body>
                </html>
            `;

            // Email to Admin
            const adminContent = `
                <h2 style="color: #003F7D; margin-top: 0;">New Website Inquiry</h2>
                <div class="field"><span class="label">Name:</span> ${name}</div>
                <div class="field"><span class="label">Email:</span> ${email}</div>
                <div class="field"><span class="label">Phone:</span> ${phone || 'N/A'}</div>
                <div class="field"><span class="label">Service/Package:</span> ${package || service || 'General Inquiry'}</div>
                <div class="field">
                    <span class="label">Message:</span><br>
                    <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #D4AF37; margin-top: 5px;">
                        ${message}
                    </div>
                </div>
            `;

            const adminMailOptions = {
                from: emailFrom,
                to: process.env.EMAIL_USER,
                subject: `New Inquiry: ${name} - KyrosData`,
                html: createEmailTemplate('New Client Inquiry', adminContent)
            };

            // Email to User (Confirmation)
            const userContent = `
                <h2 style="color: #003F7D; margin-top: 0;">Hello ${name},</h2>
                <p>Thank you for reaching out to <strong>KyrosData</strong>. We have received your inquiry regarding <strong>${package || service || 'our services'}</strong>.</p>
                <p>Our team is currently reviewing your request and a representative will get back to you shortly to discuss how we can assist you.</p>
                <p>If you have any urgent questions, please feel free to reply to this email.</p>
                <br>
                <p>Best Regards,</p>
                <p><strong>The KyrosData Team</strong></p>
            `;

            const userMailOptions = {
                from: emailFrom,
                to: email,
                subject: `We received your request - KyrosData`,
                html: createEmailTemplate('Request Received', userContent)
            };

            // Send both emails
            await Promise.all([
                transporter.sendMail(adminMailOptions),
                transporter.sendMail(userMailOptions)
            ]);

            console.log('Emails sent successfully');
        } else {
            console.warn('Email credentials not found. Skipping email sending.');
        }

        res.status(201).json({ message: 'Inquiry submitted successfully' });
    } catch (error) {
        console.error('Error submitting inquiry:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
