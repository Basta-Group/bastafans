const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid
sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY);

// Email endpoint
app.post('/send-email', async (req, res) => {
  try {
    const { companyName, fullName, email, gameType, numberOfGames } = req.body;

    const msg = {
      to: 'contact@nglcert.com',
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

    await sgMail.send(msg);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 