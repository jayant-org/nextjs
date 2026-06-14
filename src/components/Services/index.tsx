import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import servicesData from "./servicesData";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Services"
          paragraph="Comprehensive software development services tailored to your business needs. We offer end-to-end solutions from concept to deployment and ongoing support."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <div key={service.id} className="w-full">
              <SingleService service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
