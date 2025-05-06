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
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid

process.env.SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Email endpoint
app.post('/send-email', async (req, res) => {
  console.log('Received email request:', req.body);
  
  try {
    const { name, email, phone, gameType, message } = req.body;

    // Validate email field
    if (!email) {
      throw new Error('Recipient email is required');
    }
    const msg = {
      to: email, // Dynamic recipient email from form data
      from: 'contact@nglcert.com', // This must be a verified sender
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Game Type: ${gameType}
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
            <p><span class="label">Phone:</span> ${phone}</p>
            <p><span class="label">Game Type:</span> ${gameType}</p>
            <p><span class="label">Message:</span> ${message}</p>
          </div>
        </body>
        </html>
      `,
    };
    console.log('Sending email with SendGrid to:', email);
    await sgMail.send(msg);
    console.log('Email sent successfully');
    
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
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