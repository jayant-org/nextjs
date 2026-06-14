import Breadcrumb from "@/components/Common/Breadcrumb";
import Portfolio from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Software Development Company",
  description:
    "Explore our latest software development projects including web applications, mobile apps, AI solutions, and enterprise software across various industries.",
  // other metadata
};

const PortfolioPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="Discover our latest software development projects and see how we deliver excellence"
      />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;