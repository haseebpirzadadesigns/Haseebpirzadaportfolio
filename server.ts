import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, description, referenceLink, niche, otherNiche } = req.body;

    // In a real app, you'd use environment variables for SMTP
    // For now, we'll log it and attempt to send if credentials exist
    console.log("New Order Received:", { name, email, description, referenceLink, niche, otherNiche });

    const finalNiche = niche === "Other" ? otherNiche : niche;

    try {
      // This is a placeholder for actual email sending logic
      // Users would need to provide their own SMTP credentials in .env
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const mailOptions = {
          from: email,
          to: "haseebdesigns011@gmail.com",
          subject: `New Portfolio Order from ${name}`,
          text: `
            Name: ${name}
            Email: ${email}
            Niche: ${finalNiche}
            Description: ${description}
            Reference Link: ${referenceLink || "N/A"}
          `,
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Order sent successfully!" });
      } else {
        // If no credentials, just return success for the demo
        return res.status(200).json({ 
          message: "Order received (Demo Mode: Email not sent as SMTP credentials are missing).",
          data: { name, email, finalNiche }
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send order." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
