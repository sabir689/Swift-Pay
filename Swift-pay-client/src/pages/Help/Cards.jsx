

const Cards = () => {
    return (
      <div className="max-w-[1100px] mx-auto flex flex-col items-center">
        <h1 className="text-4xl text-center font-bold py-10">
          We are Here to <span className="text-cyan-600">Help</span>
        </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className="help-card flex flex-col items-center justify-center p-5">
            <img
              src="https://www.bkash.com/uploaded_contents/contents/01_1687112016521.webp"
              alt=""
            />
            <p className="text-2xl font-bold">Customer Care Point</p>
            <p className="my-5">
              Visit Customer care center to get any service of swift pay.
            </p>
            <button className="help-button">
              Learn more
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* 2 */}
          <div className="help-card flex flex-col items-center justify-center p-5">
            <img
              src="https://www.bkash.com/uploaded_contents/contents/03_1687112202755.webp"
              alt=""
            />
            <p className="text-2xl font-bold">Charge Calculator</p>
            <p className="my-5">
              Visit Customer care center to get any service of swift pay.
            </p>
            <button className="help-button">
              Learn more
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* 3 */}
          <div className="help-card flex flex-col items-center justify-center p-5">
            <img
              src="https://www.bkash.com/uploaded_contents/contents/02_1687112135828.webp"
              alt=""
            />
            <p className="text-2xl font-bold">Avoid <br /> Fraud</p>
            <p className="my-5">
              Visit Customer care center to get any service of swift pay.
            </p>
            <button className="help-button">
              Learn more
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* 4 */}
          <div className="help-card flex flex-col items-center justify-center p-5">
            <img
              src="https://www.bkash.com/uploaded_contents/contents/04_1687112343466.webp"
              alt=""
            />
            <p className="text-2xl font-bold">Frequently Ask Question</p>
            <p className="my-5">
              Visit Customer care center to get any service of swift pay.
            </p>
            <button className="help-button">
              Learn more
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Cards;