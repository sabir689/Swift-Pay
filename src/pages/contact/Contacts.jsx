const Contacts = () => {
    return (
      <div>
        <div className=" flex items-center justify-center h-[200px] bg-[url('https://i.ibb.co/866GK1p/bg.jpg')] bg-no-repeat bg-cover bg-center">
          <p className=" text-4xl text-center font-semibold  ">Contacts Us</p>
        </div>

        <div className=" flex flex-col md:flex-row gap-8 lg:gap-20 justify-center items-center md:mx-10 my-10 ">
          <div className="flex flex-col gap-6 px-6 md:px-0 ">
            {/* 1 */}
            <div className=" p-6 rounded-lg border border-black">
              <div className=" card-compact flex items-center">
                <div className="">
                  <img className="w-16" src="/img/location.png" alt="" />
                </div>
                <div className="card-body">
                  <p className="card-title">Our Location</p>
                  <p>
                    Mirpur -10 Sha-Ali-Plaza, level-7 ( Lift-6 )
                    <br /> Dhaka.
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="p-6 rounded-lg border border-black">
              <div className="card-compact flex items-center">
                <div className="">
                  <img className="w-16" src="/img/phone.png" alt="" />
                </div>
                <div className="card-body">
                  <p className="card-title">Send An Email</p>
                  <p>
                    {" "}
                    hello@wazo.com <br />
                    support@wazo.com
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="p-6 rounded-lg border border-black">
              <div className="card-compact flex items-center">
                <div className="">
                  <img className="w-16" src="/img/email.png" alt="" />
                </div>
                <div className="card-body">
                  <p className="card-title">Phone Number</p>
                  <p>
                    +55 576 234532 <br />
                    +44 587 154765
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Send us your Feedback </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="input input-bordered"
                  />
                </div>
                <label className="label">
                  <span className="label-text">Feedback</span>
                </label>
                <textarea
                  placeholder=""
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                ></textarea>

                <div className="form-control mt-6">
                  <button className="btn btn-outline">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contacts;