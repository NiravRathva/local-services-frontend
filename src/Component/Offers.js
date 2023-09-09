import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Offers = () => {
  return (
    <div>
      <div className="border m-4 text-start align-self-end">
        <h6>
          <FontAwesomeIcon icon={faTag} className=" text-success mx-1" />
          Assured cahback on Paytm
          <p className=" fw-light ms-3">upto &#8377;500 off</p>
        </h6>
      </div>
      <div className="border m-4 text-start align-self-end">
        <h6>
          <FontAwesomeIcon icon={faTag} className=" text-success mx-1" />
          15% off on kotak debit cards
          <p className=" fw-light ms-3">15% off upto &#8377;250</p>
        </h6>
      </div>
      <div className="border m-4 text-start align-self-end ">
        <h6>
          <FontAwesomeIcon icon={faTag} className=" text-success mx-1" />
          15% off on hdfc credit card
          <p className=" fw-light ms-3">15% off upto &#8377;250</p>
        </h6>
      </div>
      <div className="border m-4 text-start align-self-end ">
        <h6>
          <FontAwesomeIcon icon={faTag} className="text-success mx-1" />
          CRED pay <p className=" fw-light ms-3">cashback upto &#8377;500</p>
        </h6>
      </div>
    </div>
  );
};

export default Offers;
