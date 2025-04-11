import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid
sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Email endpoint
app.post('/send-email', async (req, res) => {
  console.log('Received email request:', req.body);
  
  try {
    const { companyName, fullName, email, gameType, numberOfGames } = req.body;

    const msg = {
      to: 'vipulverma123456789@gmail.com',
      from: 'contact@nglcert.com', // This must be a verified sender
      subject: 'New Waitlist Registration',
      text: `
        Company Name: ${companyName}
        Full Name: ${fullName}
        Email: ${email}
        Game Type: ${gameType}
        Number of Games: ${numberOfGames}
      `,
      html: `
        <h3>New Waitlist Registration</h3>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Game Type:</strong> ${gameType}</p>
        <p><strong>Number of Games:</strong> ${numberOfGames}</p>
      `,
    };

    console.log('Sending email with SendGrid...');
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