import nodemailer from 'nodemailer';
import { z } from 'zod';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Email validation schema
const emailSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Create SMTP transporter
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    // Validate request body
    const validatedData = emailSchema.parse(req.body);

    // Email options - send to multiple recipients
    const recipientEmails = process.env.RECIPIENT_EMAIL ? 
      process.env.RECIPIENT_EMAIL.split(',').map(email => email.trim()) : 
      [process.env.SMTP_USER];
    
    const mailOptions = {
      from: `"${validatedData.name}" <${process.env.SMTP_USER}>`,
      to: recipientEmails.join(', '), // Multiple recipients
      subject: `New Contact Form: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${validatedData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${validatedData.email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>
          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #6c757d;">${validatedData.message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center; color: #6c757d; font-size: 12px;">
            <p>This email was sent from the Ecomm Elevate Solutions contact form</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationOptions = {
      from: `"Ecomm Elevate Solutions" <${process.env.SMTP_USER}>`,
      to: validatedData.email,
      subject: 'Thank you for contacting Ecomm Elevate Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; text-align: center;">Thank You!</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>Dear ${validatedData.name},</p>
            <p>Thank you for reaching out to us. We have received your message and will get back to you within 24-48 hours.</p>
            <p>Here's a copy of your message:</p>
            <div style="background: #fff; padding: 15px; border-left: 4px solid #007bff; margin: 15px 0;">
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
              <p><strong>Message:</strong> ${validatedData.message}</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6c757d;">Best regards,<br>The Ecomm Elevate Solutions Team</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: 'Validation error', 
        errors: error.errors 
      });
    }

    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    });
  }
}
