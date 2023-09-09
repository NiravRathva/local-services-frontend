import "./Hero.css";

const Hero = () => {
   
  return (
    <div className="p-5 text-center  rounded-3 heroDiv img-fluid">
    <div className="mask">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-center position-absolute bottom-0 start-50 translate-middle-x text-white">
            <h1>Quality Home Service </h1>
            <p>At your doorstep in an hour </p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Hero