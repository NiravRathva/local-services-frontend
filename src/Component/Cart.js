import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Cart = ({open,setOpen}) => {
  return (
    <div className="modal" tabIndex="-1" style={{ display: open ? "block" : "none" }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Products in your cart</h5>
          <button type="button" className="btn-close" onClick={() => setOpen(!open)}></button>
        </div>
        <div className="modal-body">
          <div className="item  d-flex">
            <img className=" rounded img-fluid w-25 mx-2" src="https://images.unsplash.com/photo-1694384450770-3610d542e0e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="IMGage" />
            <div className="details mx-4">
              <h5>Package name</h5>
              <div className="price">
                2 x &#8360; 456
              </div>
            </div>
            <div className="lg:mx-2">
              <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <span>SUBTOTAL</span>
          <span>&#8360; 456</span>
          <button type="button" className="btn btn-primary">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cart