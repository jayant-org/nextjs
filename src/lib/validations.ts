import { z } from "zod";

export const quoteFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  company: z
    .string()
    .min(1, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  projectType: z
    .string()
    .min(2, "Project type is required")
    .max(100, "Project type must be less than 100 characters"),
  timeline: z
    .string()
    .min(2, "Timeline is required")
    .max(100, "Timeline must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Project summary must be at least 10 characters")
    .max(2000, "Project summary must be less than 2000 characters"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
