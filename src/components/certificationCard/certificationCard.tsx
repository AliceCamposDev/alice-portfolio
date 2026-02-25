import "./certificationCard.css";

import T99OTKBH from "/public/assets/certifications/T99OTKBH.webp";

export default function certificationCard() {
  return (
    <section className="certificationCard">
        <div className="Title">
            <h3>Prompt Engineering Technics</h3>
        </div>
        <div className="imgContainer">
            <img src={T99OTKBH} alt="Certificado de Prompt Engineering Technics" />
        </div>
       
        <div className="description">
            <p></p>
        </div>
    </section>
  );
}
