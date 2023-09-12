import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../Store/CartSlice";
import axios from "axios";

const Cart = ({ open, setOpen }) => {
  const packages = useSelector((state) => state.cart.packages);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    packages.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };
  const url = "https://localservice.onrender.com/api/v1";

  const handlePayment = async () => {
    console.log("bar");
    try {
      console.log("moy");
      const response = await axios.post(
        `${url}/stripe/create-checkout-session`,
        {
          packages,
        }
      );
      console.log(response, packages);
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Products in your cart</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setOpen(!open)}
            ></button>
          </div>
          {packages.map((item) => (
            <div className="modal-body" key={item.id}>
              <div className="item  d-flex">
                <img
                  className=" rounded img-fluid w-25 mx-2"
                  src={item.img}
                  alt="IMGage"
                />
                <div className="details mx-4">
                  <h5>{item.name}</h5>
                  <div className="price">
                    {item.quantity} x &#8360; {item.price}{" "}
                  </div>
                </div>
                <div
                  className="lg:mx-2"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
                </div>
              </div>
            </div>
          ))}
          <div className="modal-footer">
            <span>SUBTOTAL</span>
            <span>&#8360; {totalPrice()} </span>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePayment}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
