const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Send email notification to director when client submits form
 */
const sendEmailNotification = async (contactData) => {
  try {
    const { name, email, phone, subject, message } = contactData;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
          .container { background: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { border-bottom: 3px solid #4edea3; padding-bottom: 20px; margin-bottom: 20px; }
          h1 { color: #0a0a0f; margin: 0; font-size: 24px; }
          .badge { background: #4edea3; color: #0a0a0f; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; }
          .field { margin: 15px 0; padding: 10px; background: #f8f9fa; border-radius: 5px; border-left: 4px solid #4edea3; }
          .label { font-weight: bold; color: #333; font-size: 13px; }
          .value { margin-top: 5px; color: #555; }
          .message-box { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #4edea3; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #999; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📨 Digital 7M - New Contact Message</h1>
            <span class="badge">New</span>
            <span style="float: right; color: #999; font-size: 14px;">${new Date().toLocaleString()}</span>
          </div>

          <div class="field">
            <div class="label">👤 Name</div>
            <div class="value"><strong>${name}</strong></div>
          </div>

          <div class="field">
            <div class="label">📧 Email</div>
            <div class="value"><a href="mailto:${email}">${email}</a></div>
          </div>

          ${phone ? `
          <div class="field">
            <div class="label">📱 Phone</div>
            <div class="value"><a href="tel:${phone}">${phone}</a></div>
          </div>
          ` : ''}

          <div class="field">
            <div class="label">📋 Subject</div>
            <div class="value"><strong>${subject}</strong></div>
          </div>

          <div class="field">
            <div class="label">💬 Message</div>
            <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
          </div>

          <div style="margin-top: 20px; background: #f0f7ff; padding: 15px; border-radius: 5px;">
            <p style="margin: 0; color: #333; font-size: 14px;">
              <strong>Quick Actions:</strong><br>
              <a href="mailto:${email}?subject=Re: ${subject}" style="color: #4edea3; text-decoration: none;">📧 Reply via Email</a>
              ${phone ? `&nbsp;|&nbsp; <a href="tel:${phone}" style="color: #4edea3; text-decoration: none;">📞 Call Client</a>` : ''}
            </p>
          </div>

          <div class="footer">
            <p>This message was sent from your Digital 7M website contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"Digital 7M Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📨 New Contact Message: ${subject}`,
      html: htmlContent,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to director: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('❌ Email notification error:', error);
    throw error;
  }
};

/**
 * Send auto-reply to client
 */
const sendAutoReply = async (clientEmail, clientName) => {
  try {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
          .container { background: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { border-bottom: 3px solid #4edea3; padding-bottom: 20px; margin-bottom: 20px; }
          h1 { color: #0a0a0f; margin: 0; font-size: 22px; }
          .logo { color: #4edea3; font-weight: bold; }
          .message { margin: 20px 0; padding: 20px; background: #f8f9fa; border-radius: 5px; border-left: 4px solid #4edea3; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #999; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Contacting <span class="logo">Digital 7M</span></h1>
          </div>

          <p>Dear <strong>${clientName}</strong>,</p>

          <p>Thank you for reaching out to us. We have received your message and our team will review it shortly.</p>

          <div class="message">
            <p style="margin: 0;"><strong>Your Message:</strong></p>
            <p style="margin: 5px 0 0 0; color: #555;">We will get back to you within 24 hours.</p>
          </div>

          <p><strong>What happens next?</strong></p>
          <ul>
            <li>📧 Our team will review your message</li>
            <li>📞 We'll contact you within 24 hours</li>
            <li>🤝 We'll discuss how we can help your business</li>
          </ul>

          <p style="margin-top: 20px;">
            Best regards,<br>
            <strong>Digital 7M Team</strong>
          </p>

          <div class="footer">
            <p>© ${new Date().getFullYear()} Digital 7M. All rights reserved.</p>
            <p>11850, Kadawatha, Sri Lanka</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"Digital 7M Team" <${process.env.EMAIL_USER}>`,
      to: clientEmail,
      subject: 'Thank You for Contacting Digital 7M',
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Auto-reply sent to client: ${clientEmail}`);
    return info;
  } catch (error) {
    console.error('❌ Auto-reply error:', error);
    throw error;
  }
};

module.exports = { sendEmailNotification, sendAutoReply };