import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const Package = () => {
  return (
    <div className="row my-5">
      <div className="col-8 text-start">
        <div>
          <h2>Package Name</h2>
          <h6 className="fw-bold my-1">
            <FontAwesomeIcon
              icon={faStar}
              style={{ height: "15px", width: "15px", marginRight: "3px" }}
            />
            4.5
          </h6>
          <h6 className="fw-bold my-1">
            &#8360; 450 &#x2022; <span>30 min</span>
          </h6>
        </div>
        <hr />
        <div>desc </div>
        <div>desc</div>
        <div>desc </div>
      </div>
      <div className="col-3 p-0">
        <img className="rounded-3 img-thumbnail" src="" alt="" />

        <div className="quantity">
          <button className="btn btn-dark m-1 ">-</button>

          <button className="btn btn-dark m-1 ">+</button>
        </div>
        <button className="mb-n5 btn btn-dark">Add To Cart</button>
      </div>
    </div>
  );
};
