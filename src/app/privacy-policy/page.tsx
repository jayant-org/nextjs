import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Software Development Services",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
};

const PrivacyPolicyPage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three dark:bg-dark mx-auto max-w-3xl rounded-sm bg-white px-6 py-10 sm:p-[60px]">
              <h1 className="mb-6 text-center text-3xl font-bold text-black dark:text-white">
                Privacy Policy
              </h1>
              <p className="mb-6 text-body-color text-base leading-relaxed dark:text-body-color-dark">
                We are committed to protecting your privacy. This policy describes the personal information we collect, how we use it, and how we keep it secure.
              </p>
              <div className="space-y-6">
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">1. Information We Collect</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    We may collect contact details, business information, project requirements, and usage data when you interact with our website or request services. We use this information to provide and improve our offerings.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">2. How We Use Information</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    Your information is used to communicate with you, deliver requested services, process payments, and personalize your experience. We do not sell your personal data.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">3. Data Security</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    We protect personal data with administrative, technical, and physical safeguards. While no system is completely secure, we maintain industry-standard measures to reduce the risk of unauthorized access.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">4. Cookies and Tracking</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    We may use cookies and analytics tools to understand behavior on our site, improve performance, and tailor content. You can manage cookie preferences through your browser settings.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">5. Contact Us</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    If you have questions about this privacy policy or your data, please contact us via the contact page. We are happy to address any privacy inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
