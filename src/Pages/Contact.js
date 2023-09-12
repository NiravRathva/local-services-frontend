import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5 " style={{ height: "100vh" }}>
      <div className="row  ">
        <div
          className="col-md-6 "
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=robertav1_2_sidr)",
            backgroundSize: "cover",
          }}
        >
          <div className="">
            <h2>Contact Information</h2>
            <p>123 Main Street</p>
            <p>City, State, ZIP</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Contact Form</h2>
          <form>
            <div className="form-group my-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary my-2 w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
