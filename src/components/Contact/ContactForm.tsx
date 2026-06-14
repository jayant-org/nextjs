"use client";

import { FormEvent, useState } from "react";
import { submitContactForm } from "@/app/actions/submitQuote";

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      const result = await submitContactForm(formData);

      if (result.success) {
        setMessageType("success");
        setMessage(result.message);
        // Reset form
        setFormData({
          name: "",
          email: "",
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
          className={`mb-8 rounded-xs px-6 py-4 text-base font-medium ${
            messageType === "success"
              ? "border-l-4 border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
              : "border-l-4 border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {message}
        </div>
      )}

      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none ${
                errors.name ? "border-red-500 bg-red-50 dark:bg-red-900/10" : ""
              }`}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none ${
                errors.email ? "border-red-500 bg-red-50 dark:bg-red-900/10" : ""
              }`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-8">
            <label
              htmlFor="message"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your Message"
              className={`border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none ${
                errors.message
                  ? "border-red-500 bg-red-50 dark:bg-red-900/10"
                  : ""
              }`}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full px-4">
          <button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
}
