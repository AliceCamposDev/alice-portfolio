import "./certifications.css";

import CertificationCard from "../certificationCard/certificationCard";

export default function Certifications() {
  return (
    <section className="certifications">
      <h3>Certifications</h3>
      <div className="certificationsGrid">
        <CertificationCard />
      </div>
    </section>
  );
}
