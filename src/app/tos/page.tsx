import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Software Development Services",
  description: "Terms of Service for our software development, web, mobile, and cloud services.",
};

const TosPage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three dark:bg-dark mx-auto max-w-3xl rounded-sm bg-white px-6 py-10 sm:p-[60px]">
              <h1 className="mb-6 text-center text-3xl font-bold text-black dark:text-white">
                Terms of Service
              </h1>
              <p className="mb-6 text-body-color text-base leading-relaxed dark:text-body-color-dark">
                These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to comply with these terms and all applicable laws and regulations.
              </p>
              <div className="space-y-6">
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">1. Services</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    We provide software development, web development, mobile applications, cloud solutions, and digital transformation services tailored to your business needs. Project scope, delivery timelines, and pricing will be confirmed in a separate written agreement.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">2. User Responsibilities</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    You agree to provide accurate information, maintain the security of your account and credentials, and use our services only for lawful purposes. You are responsible for any activity that occurs under your account.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">3. Intellectual Property</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    Unless otherwise agreed in writing, we retain ownership of all development tools, code libraries, and pre-existing intellectual property. Upon full payment, clients receive the necessary rights to use the delivered work as described in the project agreement.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">4. Limitation of Liability</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    We will not be liable for indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability for direct damages is limited to the amount paid for the services giving rise to the claim.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">5. Disputes</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    Any disputes will be resolved through good-faith negotiation. If a resolution cannot be reached, disputes will be handled under the laws of the jurisdiction that governs our service agreement.
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

export default TosPage;
