import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { addToCart } from "../Store/CartSlice";
import { useDispatch } from "react-redux";
export const Package = ({ Packages, service }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  let descPara = "";
  if (Packages.length !== 0) {
    descPara = Packages.desc.split(".");
  }
  return (
    <div className="row my-5">
      <div className="col-8 text-start">
        <div>
          <h2>{Packages.name}</h2>
          <h6 className="fw-bold my-1">
            <FontAwesomeIcon
              icon={faStar}
              style={{ height: "15px", width: "15px", marginRight: "3px" }}
            />
            {Packages.rating}
          </h6>
          <h6 className="fw-bold my-1">
            &#8360; {Packages.price} &#x2022; <span>{Packages.time}</span>
          </h6>
        </div>
        <hr />
        <div>{descPara[0]} </div>
        <div>{descPara[1]}</div>
        <div>{descPara[2]} </div>
      </div>
      <div className="col-3 p-0">
        <img className="rounded-3 img-thumbnail" src={service.imgUrl} alt="" />

        <div className="quantity">
          <button className="btn btn-dark m-1 " onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}> -</button>
          {quantity}
          <button className="btn btn-dark m-1 " onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="mb-n5 btn btn-dark"
          onClick={() =>
            dispatch(
              addToCart({
                id: Packages._id,
                name: Packages.name,
                price: Packages.price,
                img: service.imgUrl,
                quantity,
              })
            )
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
