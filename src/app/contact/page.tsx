import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Professional Software Development Services",
  description: "Get in touch with our expert software development team. We specialize in custom web applications, mobile apps, cloud solutions, and digital transformation services.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Ready to transform your business with cutting-edge software solutions? Our team of expert developers is here to help you build scalable, innovative applications that drive growth and efficiency."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
