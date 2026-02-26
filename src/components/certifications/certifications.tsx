import "./certifications.css";

import CertificationCard from "../certificationCard/certificationCard";
import cert_T99OTKBH from "/public/assets/certifications/T99OTKBH.webp";
import cert_9NHM6SNC from "/public/assets/certifications/9NHM6SNC.webp";
export default function Certifications() {
  return (
    <section className="certifications">
      <h3>Certifications</h3>
      <div className="certificationsGrid">
        <CertificationCard title="Prompt Engineering Technics" img={cert_T99OTKBH} />
        <CertificationCard title="LLMs architecture and structure" img={cert_9NHM6SNC} />
        <CertificationCard />
        <CertificationCard />
        <CertificationCard />
      </div>
    </section>
  );
}
