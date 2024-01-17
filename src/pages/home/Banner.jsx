import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/13346238_5213451.png";

const Banner = () => {
  return (
    <div
      className="bg-center bg-cover"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <p
              className="text-7xl text-center font-bold 
      bg-gradient-to-r from-[rgba(9,9,121,1)]  to-[rgba(179,0,255,1)] text-transparent bg-clip-text typed group"
            >
              Elevate Your Money Movement Experience <br /> with a Gateway to
              Quick and Secure <span className="text-purple-400">Payments</span>
              .
            </p>
            <br />
            {/* button */}
            <div className="text-center">
              <Link to="/login">
                <button className="learn-more batton mt-5">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Get's started</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
