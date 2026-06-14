"use server";

import { quoteFormSchema, contactFormSchema, type QuoteFormData, type ContactFormData } from "@/lib/validations";
import nodemailer from "nodemailer";

// Create a transporter for sending emails
const getTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

export async function submitQuoteForm(data: unknown) {
  try {
    // Validate the data with Zod
    const validatedData = quoteFormSchema.parse(data);

    // Get transporter
    const transporter = getTransporter();

    // Email to manager
    const managerEmail = process.env.MANAGER_EMAIL || "manager@company.com";
    const fromEmail = process.env.FROM_EMAIL || "noreply@company.com";

    // Send email to manager
    await transporter.sendMail({
      from: fromEmail,
      to: managerEmail,
      subject: `New Quote Request from ${validatedData.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company}</p>
        <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
        <p><strong>Timeline:</strong> ${validatedData.timeline}</p>
        <p><strong>Project Summary:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: validatedData.email,
    });

    // Optional: Send confirmation email to the user
    await transporter.sendMail({
      from: fromEmail,
      to: validatedData.email,
      subject: "We received your quote request",
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>We've received your quote request and will review it shortly. Our team will get back to you within 24-48 hours with a tailored proposal and estimate.</p>
        <p>Best regards,<br>The Team</p>
      `,
    });

    return {
      success: true,
      message: "Quote request submitted successfully. We'll be in touch soon!",
    };
  } catch (error) {
    if (error instanceof Error) {
      // Check if it's a Zod validation error
      if (error.name === "ZodError") {
        return {
          success: false,
          message: "Validation failed. Please check your inputs.",
          error: error.message,
        };
      }
      return {
        success: false,
        message: "Failed to submit quote request. Please try again.",
        error: error.message,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

export async function submitContactForm(data: unknown) {
  try {
    // Validate the data with Zod
    const validatedData = contactFormSchema.parse(data);

    // Get transporter
    const transporter = getTransporter();

    // Email to manager
    const managerEmail = process.env.MANAGER_EMAIL || "manager@company.com";
    const fromEmail = process.env.FROM_EMAIL || "noreply@company.com";

    // Send email to manager
    await transporter.sendMail({
      from: fromEmail,
      to: managerEmail,
      subject: `New Contact Message from ${validatedData.name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: validatedData.email,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: fromEmail,
      to: validatedData.email,
      subject: "We received your message",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>We've received your message and appreciate you contacting us. Our team will review your inquiry and get back to you as soon as possible.</p>
        <p>Best regards,<br>The Team</p>
      `,
    });

    return {
      success: true,
      message: "Your message has been sent successfully. We'll be in touch soon!",
    };
  } catch (error) {
    if (error instanceof Error) {
      // Check if it's a Zod validation error
      if (error.name === "ZodError") {
        return {
          success: false,
          message: "Validation failed. Please check your inputs.",
          error: error.message,
        };
      }
      return {
        success: false,
        message: "Failed to send message. Please try again.",
        error: error.message,
      };
    }
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
