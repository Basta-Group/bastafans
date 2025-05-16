import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: `${__dirname}/.env` });
console.log('SendGrid API Key:', process.env.SENDGRID_API_KEY);

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST'],
  credentials: true // Must match client-side 'include'
}));

app.use(express.json());

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});
console.log('Server is running!');
// Email endpoint
app.post('/api/send-email', async (req, res) => {
  console.log('=== Email Request Received ===');
  console.log('Request Body:', req.body);
  
  try {
    const { name, email, message } = req.body;
    console.log('Extracted Data:', { name, email, message });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation Failed: Missing required fields');
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }
    console.log('Validation Passed: All required fields present');

    const msg = {
      to: email,
      from: 'contact@nglcert.com', 
      subject: 'New Contact Form Submission from Basta Group Website',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h3 { color: #2c3e50; }
            p { margin: 10px 0; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <h3>New Contact Form Submission</h3>
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Message:</span> ${message}</p>
          </div>
        </body>
        </html>
      `,
    };
    console.log('Prepared Email Message:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject
    });

    console.log('Attempting to send email...');
    await sgMail.send(msg);
    console.log('Email sent successfully!');
    
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('=== Error Sending Email ===');
    console.error('Error Details:', error);
    console.error('Error Message:', error.message);
    console.error('Error Stack:', error.stack);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});