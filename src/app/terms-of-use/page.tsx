import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Software Development Services",
  description: "Terms of use for our website and service offerings.",
};

const TermsOfUsePage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three dark:bg-dark mx-auto max-w-3xl rounded-sm bg-white px-6 py-10 sm:p-[60px]">
              <h1 className="mb-6 text-center text-3xl font-bold text-black dark:text-white">
                Terms of Use
              </h1>
              <p className="mb-6 text-body-color text-base leading-relaxed dark:text-body-color-dark">
                These Terms of Use govern your access to and use of our website and services. By using this site, you agree to follow these terms and all applicable laws.
              </p>
              <div className="space-y-6">
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">1. Acceptable Use</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    You may use our website and services only for lawful purposes. Prohibited activities include unauthorized access, distribution of harmful content, and any conduct that disrupts service or infringes on others’ rights.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">2. Account Security</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    If you create an account, you are responsible for maintaining the confidentiality of your credentials and for all actions taken under your account.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">3. Content and Ownership</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    All content on this site is owned by or licensed to us unless otherwise stated. You may not reproduce or distribute our materials without written permission.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">4. Service Availability</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    We strive to keep our site and services available, but we do not guarantee uninterrupted access. We may suspend or modify service as needed for maintenance or improvements.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">5. Changes to Terms</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    We may update these Terms of Use from time to time. Continued use of our website after changes indicates your acceptance of the revised terms.
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

export default TermsOfUsePage;
