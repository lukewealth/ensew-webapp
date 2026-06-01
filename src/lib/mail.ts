import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // Use SSL for port 465
  auth: {
    user: process.env.SMTP_USER || 'ensewservices@zohomail.com',
    pass: process.env.SMTP_PASS, // User must provide this in .env.local
  },
});

export const sendMail = async (options: {
  to: string;
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}) => {
  const mailOptions = {
    from: options.from || `"ENSEW Services" <${process.env.SMTP_USER || 'ensewservices@zohomail.com'}>`,
    to: options.to,
    subject: options.subject,
    html: options.html,
    replyTo: options.replyTo || 'ensewservices@zohomail.com',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('[MAIL] Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('[MAIL] Error sending email:', error);
    throw error;
  }
};

export default transporter;
