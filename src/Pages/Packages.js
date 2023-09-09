import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
const Packages = () => {
  const location = useLocation(); // React Hook
  const id = location.pathname.split("/")[2];
  const { data, loading, error, reFetch } = useFetch(
    `https://localservice.onrender.com/api/v1/packages/${id}`
  );
console.log(data)
  let service = "";
  if (data.length !== 0) {
    service = data[0].serviceName;
  }
  return (
    <div className="container">
      <div className="row h-75 align-items-center">
        <div className="col  m-5 text-start">
          <h1 className="fs-2">{service.name}</h1>
          <h6 className="">
            <FontAwesomeIcon icon={faStar} /> 4.5 (4k Bookings)
          </h6>
        </div>
        <div className="col m-5">
          <img
            className="rounded-4 img-fluid"
            src={service.imgUrl}
            alt={service.name}
            // style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <h3>Package List</h3>
        </div>
        <div className="col border">
          <h3>Offers</h3>
        </div>
      </div>
    </div>
  );
};

export default Packages;
