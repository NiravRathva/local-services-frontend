import React from 'react'

const Register = () => {

  return (
    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <form className="container position-absolute start-50 top-50 translate-middle border border-dark p-5">
        <h3 className="mb-4">Create Account</h3>
        {/* Input fields with Bootstrap classes */}
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="mobileNo"
            placeholder="Mobile Number"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Register
