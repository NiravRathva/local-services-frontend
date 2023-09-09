import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Packages = () => {
  return (
    <div className="container">
      <div className="row h-75 align-items-center">
        <div className="col  m-5 text-start">
          <h1 className="fs-2">service name</h1>
          <h6 className="">
            <FontAwesomeIcon icon={faStar} /> 4.5{" "}
          </h6>
          <p>Desc</p>
        </div>
        <div className="col m-5">
          <img
            className="rounded-4 img-fluid"
            src=""
            alt=""
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
