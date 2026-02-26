import "./certificationCard.css";
import placeholder from "/public/assets/project_thumb/placeholder.jpg";

export default function certificationCard({
  title = "Place Holder Title",
  img = placeholder
}) {
  return (
    <section className="certificationCard">
        <div className="Title">
            <h4>{title}</h4>
        </div>
        <div className="imgContainer">
            <img src={img} alt={title} />
        </div>
       
        <div className="description">
            <p></p>
        </div>
    </section>
  );
}
