const transporter = require("../config/mailer");

exports.sendMail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your inbox
      replyTo: email,
      subject: subject || `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
};
