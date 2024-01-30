import media1 from "../../assets/images/online-banking.png";
import media2 from "../../assets/images/award4.jpg";
import media3 from "../../assets/images/award2.jpg";
import img1 from "../../assets/images/new-project_1703419782861.jpg";
import img2 from "../../assets/images/award6.jpg";
import img3 from "../../assets/images/male-business-executive-receiving-award.jpg";
import img4 from "../../assets/images/bookhanding.jpg";
import img5 from "../../assets/images/science.jpg";
import img6 from "../../assets/images/donation.jpg";
const Media = () => {
  return (
    <div>
      <div className="flex justify-between mt-20 mb-10 ">
        <h1 className="text-5xl text-[#49108B] font-bold">Media</h1>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
          Learn more
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-60" src={media1} alt="ceo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#212427]">
              {" "}
              Islamic Savings of Bank available through SwiftPay app{" "}
            </h2>
            <p></p>
            <div className="card-actions text-gray-400">
              <h3>Posted on 12 May 2023 | 3 mins read</h3>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={media2} alt="ceo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#212427]">
              {" "}
              World Chapmion bowling team partners with SwiftPay{" "}
            </h2>
            <p></p>
            <div className="card-actions text-gray-400">
              <h3>Posted on 14 May 2023 | 7 mins read</h3>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={media3} alt="ceo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#212427]">
              SwiftPay CEO on the Transformative Impact of Financial Inclusion
            </h2>
            <p></p>
            <div className="card-actions text-gray-400">
              <h3>Posted on 12 May 2023 | 13 mins read</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}

      <div>
        <div className="flex justify-between mt-20">
          <h1 className="text-5xl text-[#49108B] font-bold">Achievements</h1>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
            Learn more
          </button>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-8">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img src={img1} alt="ceo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#212427]">
                SwiftPay CEO on the Transformative Impact of Financial Inclusion
              </h2>
              <p></p>
              <div className="card-actions text-gray-400">
                <h3>Posted on 12 May 2023 | 13 mins read</h3>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={img2} alt="ceo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#212427]">
                SwiftPay CEO on the Transformative Impact of Financial Inclusion
              </h2>
              <p></p>
              <div className="card-actions text-gray-400">
                <h3>Posted on 12 May 2023 | 13 mins read</h3>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={img3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#212427]">
                ‘Fintech Pioneer Award’ from Prime Minister
              </h2>
              <p></p>
              <div className="card-actions text-gray-400">
                <h3>Posted on 27 December 2023 | 15 mins read</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSR */}
      <div>
        <div className="flex justify-between mt-20">
          <h1 className="text-5xl text-[#49108B] font-bold">CSR</h1>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
            Learn more
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8">
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-72 object-cover object-center"
                src={img4}
                alt="ceo"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#212427]">
                SwiftPay handed over book to 110 schools in Rajshahi
              </h2>
              <p></p>
              <div className="card-actions text-gray-400">
                <h3>Posted on 12 May 2023 | 13 mins read</h3>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-72 object-cover object-center"
                src={img5}
                alt="ceo"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#212427]">
                SwiftPay Organized a science fair in ctg
              </h2>
              <p></p>
              <div className="card-actions text-gray-400">
                <h3>Posted on 12 May 2023 | 13 mins read</h3>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full object-cover object-center h-72"
                src={img6}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#212427]">
                SwiftPay Giving books in ctg
              </h2>
              <p></p>
              <div className="card-actions text-gray-400">
                <h3>Posted on 27 December 2023 | 15 mins read</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
