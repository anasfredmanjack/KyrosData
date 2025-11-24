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

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Send to company email
                subject: `New Inquiry from ${name} - KyrosDoxa Website`,
                html: `
                    <h3>New Website Inquiry</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Service/Package:</strong> ${package || service}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `
            };

            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
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
