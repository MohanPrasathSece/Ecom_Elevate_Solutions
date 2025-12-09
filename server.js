import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email validation schema
const emailSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Create SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    // Validate request body
    const validatedData = emailSchema.parse(req.body);

    // Email options
    const mailOptions = {
      from: `"${validatedData.name}" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form: ${validatedData.subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="background-color: #000000; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-weight: 600; letter-spacing: 1px;">New Lead Received</h2>
          </div>
          
          <div style="padding: 30px;">
            <p style="color: #666; font-size: 16px; margin-bottom: 25px;">You have received a new inquiry from your website contact form. Here are the details:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tbody>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; color: #888; width: 120px; font-weight: 500;">Name</td>
                  <td style="padding: 12px 0; color: #333; font-weight: 600;">${validatedData.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; color: #888; font-weight: 500;">Email</td>
                  <td style="padding: 12px 0; color: #333; font-weight: 600;">
                    <a href="mailto:${validatedData.email}" style="color: #007bff; text-decoration: none;">${validatedData.email}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px 0; color: #888; font-weight: 500;">Subject</td>
                  <td style="padding: 12px 0; color: #333; font-weight: 600;">${validatedData.subject}</td>
                </tr>
              </tbody>
            </table>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #007bff;">
              <h3 style="margin-top: 0; color: #444; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message Content</h3>
              <p style="color: #555; line-height: 1.6; margin-bottom: 0; white-space: pre-wrap;">${validatedData.message}</p>
            </div>
          </div>

          <div style="background-color: #f8f9fa; padding: 15px; text-align: center; border-top: 1px solid #eee;">
            <p style="margin: 0; color: #999; font-size: 12px;">Sent from Ecom elevate solution Website</p>
          </div>
        </div>
      `,
    };

    // Send email
    console.log(`Attempting to send email | From: ${mailOptions.from} | To: ${mailOptions.to}`);
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    // Send confirmation email to the user
    const confirmationOptions = {
      from: `"Ecom elevate solution" <${process.env.SMTP_USER}>`,
      to: validatedData.email,
      subject: 'Thank you for contacting Ecom elevate solution',
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
            <p style="color: #6c757d;">Best regards,<br>The Ecom elevate solution Team</p>
          </div>
        </div>
      `,
    };

    console.log(`Attempting to send confirmation email | From: ${confirmationOptions.from} | To: ${confirmationOptions.to}`);
    await transporter.sendMail(confirmationOptions);
    console.log('Confirmation email sent successfully');

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    console.log('Email sending failed');

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
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Email server is running' });
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});
