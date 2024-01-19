const WhatIsNew = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-5xl font-semibold mx-auto justify-center grid mb-10 bg-gradient-to-r from-[rgba(9,9,121,1)]  to-[rgba(179,0,255,1)] text-transparent bg-clip-text typed group">
        What Makes Us Unique
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div
          className="card card-compact w-96 bg-base-100 shadow-xl"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          {/* checking */}
          <figure>
            <img
              src="https://i.ibb.co/gMbVPL6/bigstock-islamic-finance-economy-islam-1528572957459-ezgif-com-webp-to-jpg-converter.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Interest Free Banking!</h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          </div>
        </div>
        <div
          className="card card-compact w-96 bg-base-100 shadow-xl"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <figure>
            <img src="https://i.ibb.co/6s9hpjB/life-easier.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Calculate Zakat</h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          </div>
        </div>
        <div
          className="card card-compact w-96 bg-base-100 shadow-xl"
          data-aos="zoom-out"
          data-aos-delay="300"
        >
          <figure>
            <img
              src="https://i.ibb.co/48bH72T/162638-15122020-1608006327-211684168-nuur.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Digital Banking Award</h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsNew;
