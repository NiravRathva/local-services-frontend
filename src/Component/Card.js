import { Link } from "react-router-dom";
const Card = ({ services }) => {
  return (
    <div className="my-4 col-12 col-md-6 col-lg-4 ">
      <Link
        to={`/packages/${services._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={services.imgUrl}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div
            className="card-body text-white"
            style={{ backgroundColor: "rgb(13,110,253)" }}
          >
            <h5 className="card-title ">{services.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
