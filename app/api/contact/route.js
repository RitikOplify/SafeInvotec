import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { company, email, fullName, location, message, phone, subject } =
      await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact Us Inquiry: ${subject}`,
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>New Contact Us Inquiry</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <footer style="font-size: 12px; color: #777;">
          <p>This email was generated automatically from your Contact Us form.</p>
        </footer>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email Sent Successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error Sending Email:", error);

    return new Response(JSON.stringify({ error: "Failed To Send Email" }), {
      status: 500,
    });
  }
}
