import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Leading Software Development Company",
  description: "Learn about our expert team of software developers, our mission to deliver innovative solutions, and our commitment to quality and client success in web development, mobile apps, and digital transformation.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are a team of passionate software developers dedicated to transforming businesses through innovative technology solutions. With years of experience and a client-first approach, we deliver exceptional results."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
