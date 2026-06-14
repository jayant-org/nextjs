import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Services | Software Development Company",
  description:
    "Explore our comprehensive software development services including web applications, mobile development, cloud solutions, AI/ML, and enterprise software.",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb 
        pageName="Services"
        description="Comprehensive software development solutions for your business"
      />
      <Services />
    </>
  );
};

export default ServicesPage;