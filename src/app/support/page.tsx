import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Center | Software Development Services",
  description: "Get help with your project, support questions, or service requests from our development team.",
};

const SupportPage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three dark:bg-dark mx-auto max-w-3xl rounded-sm bg-white px-6 py-10 sm:p-[60px]">
              <h1 className="mb-4 text-center text-3xl font-bold text-black dark:text-white">
                Support Center
              </h1>
              <p className="mb-10 text-center text-base text-body-color dark:text-body-color-dark">
                Need help with your project, updates, or service questions? Submit a request and our team will respond quickly with the support you need.
              </p>
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">How we can help</h2>
                  <ul className="space-y-4 text-body-color dark:text-body-color-dark">
                    <li>Project support and maintenance requests</li>
                    <li>Technical issues with web or mobile applications</li>
                    <li>Feature updates, bug fixes, and improvements</li>
                    <li>Billing or account-related questions</li>
                  </ul>
                </div>
                <div>
                  <div className="rounded-sm border border-[#E9EDF5] bg-[#F8F9FF] p-6 dark:border-white/10 dark:bg-[#111827]">
                    <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">Need a faster response?</h3>
                    <p className="mb-4 text-body-color dark:text-body-color-dark">
                      Email our support team at <a className="text-primary hover:underline" href="mailto:support@yourdomain.com">support@yourdomain.com</a> or call us at <span className="font-medium text-black dark:text-white">+1 (555) 123-4567</span>.
                    </p>
                    <p className="text-body-color dark:text-body-color-dark">
                      We typically respond within one business day. For urgent issues, include "Urgent" in the subject line.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 rounded-sm border border-[#E9EDF5] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-dark">
                <form>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white" htmlFor="email">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white" htmlFor="project">
                        Project or Support Topic
                      </label>
                      <input
                        id="project"
                        type="text"
                        placeholder="e.g. mobile app support, billing question"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-3 block text-sm font-medium text-dark dark:text-white" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Describe your issue or request"
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <button className="mt-6 rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                    Submit Support Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;
