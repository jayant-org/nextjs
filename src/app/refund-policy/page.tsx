import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Software Development Services",
  description: "Our refund policy describes how we handle project cancellations and payment adjustments.",
};

const RefundPolicyPage = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three dark:bg-dark mx-auto max-w-3xl rounded-sm bg-white px-6 py-10 sm:p-[60px]">
              <h1 className="mb-6 text-center text-3xl font-bold text-black dark:text-white">
                Refund Policy
              </h1>
              <p className="mb-6 text-body-color text-base leading-relaxed dark:text-body-color-dark">
                We strive for client satisfaction in every project. This policy outlines when refunds may be provided and how we handle payment adjustments.
              </p>
              <div className="space-y-6">
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">1. Project Cancellations</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    If a project is canceled before work begins, we will refund any prepaid amount, minus any agreed administrative fees. If work has already started, refund eligibility will depend on the amount of work completed.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">2. Payment Adjustments</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    For partial work or canceled engagements, we may issue a prorated refund based on time spent and work delivered. Final settlement details are documented in your service agreement.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">3. Exceptional Cases</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    In cases of material breach or failure to deliver agreed service milestones, we will work with you to resolve the issue and may offer a refund or credit as appropriate.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">4. Request Process</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    To request a refund, contact us through the support or contact page with your project details and the reason for your request. We aim to review refund inquiries promptly and transparently.
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">5. No Guarantee</h2>
                  <p className="text-body-color leading-relaxed dark:text-body-color-dark">
                    Refunds are not guaranteed and are handled case-by-case. Refunds are issued at our discretion in alignment with the terms of the signed agreement.
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

export default RefundPolicyPage;
