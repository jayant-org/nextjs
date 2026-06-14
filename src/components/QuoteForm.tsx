"use client";

import { FormEvent, useState } from "react";
import { submitQuoteForm } from "@/app/actions/submitQuote";
import { ZodError } from "zod";

interface FormErrors {
  [key: string]: string;
}

export default function QuoteForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setErrors({});

    try {
      const result = await submitQuoteForm(formData);

      if (result.success) {
        setMessageType("success");
        setMessage(result.message);
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          timeline: "",
          message: "",
        });
      } else {
        setMessageType("error");
        setMessage(result.message);

        // Parse validation errors if available
        if (result.error) {
          try {
            const parsedError = JSON.parse(result.error);
            if (Array.isArray(parsedError)) {
              const errorMap: FormErrors = {};
              parsedError.forEach((err: any) => {
                if (err.path && err.path.length > 0) {
                  errorMap[err.path[0]] = err.message;
                }
              });
              setErrors(errorMap);
            }
          } catch {
            // If error parsing fails, just show the general message
          }
        }
      }
    } catch (error) {
      setMessageType("error");
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && (
        <div
          className={`mb-6 rounded-xs px-6 py-4 text-base font-medium ${
            messageType === "success"
              ? "border-l-4 border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
              : "border-l-4 border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {message}
        </div>
      )}

      <div className="mb-6">
        <label
          htmlFor="name"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.name ? "border-red-500 bg-red-50 dark:bg-red-900/10" : ""
          }`}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Work Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.email ? "border-red-500 bg-red-50 dark:bg-red-900/10" : ""
          }`}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="company"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Company / Organization
        </label>
        <input
          type="text"
          name="company"
          id="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter your company or organization"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.company ? "border-red-500 bg-red-50 dark:bg-red-900/10" : ""
          }`}
        />
        {errors.company && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.company}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="projectType"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Project Type
        </label>
        <input
          type="text"
          name="projectType"
          id="projectType"
          value={formData.projectType}
          onChange={handleChange}
          placeholder="e.g. web app, mobile app, SaaS platform"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.projectType
              ? "border-red-500 bg-red-50 dark:bg-red-900/10"
              : ""
          }`}
        />
        {errors.projectType && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.projectType}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="timeline"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Desired Timeline
        </label>
        <input
          type="text"
          name="timeline"
          id="timeline"
          value={formData.timeline}
          onChange={handleChange}
          placeholder="e.g. 2-3 months, Q3 launch"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none ${
            errors.timeline
              ? "border-red-500 bg-red-50 dark:bg-red-900/10"
              : ""
          }`}
        />
        {errors.timeline && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.timeline}
          </p>
        )}
      </div>

      <div className="mb-8">
        <label
          htmlFor="message"
          className="text-dark mb-3 block text-sm dark:text-white"
        >
          Brief Project Summary
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project, challenges, and goals"
          className={`border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary h-[140px] w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none resize-none ${
            errors.message ? "border-red-500 bg-red-50 dark:bg-red-900/10" : ""
          }`}
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <button
          type="submit"
          disabled={isLoading}
          className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Submitting..." : "Request Free Quote"}
        </button>
      </div>
    </form>
  );
}
