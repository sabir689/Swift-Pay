import img1 from "../../../assets/gallery images/1.jpg";
import img2 from "../../../assets/gallery images/2.jpg";
import img3 from "../../../assets/gallery images/3.jpg";
import img4 from "../../../assets/gallery images/4.jpg";
import img5 from "../../../assets/gallery images/5.jpg";
import img6 from "../../../assets/gallery images/6.jpg";
import img7 from "../../../assets/gallery images/7.jpg";
import img8 from "../../../assets/gallery images/8.jpg";
import img9 from "../../../assets/gallery images/9.jpg";
const Gallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map(
          (imgSrc, index) => (
            <div key={index} className="relative overflow-hidden  group">
              <img
                className="w-[400px] h-[200px] rounded-md object-cover object-center transform transition-transform group-hover:scale-105"
                src={imgSrc}
                alt={`Gallery Image ${index + 1}`}
              />
              <div className="absolute  bg-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
            </div>
          )
        )}
      </div>
      <hr className="border-l-0 border-gray-200 border-2 h-[500px] mx-10" />
      <div className="">
        <div className="text-5xl font-bold  relative">
          <div className="text-5xl font-bold relative">
            <span className="spaan --i text-[#212427]">R</span>
            <span className="spaan --i text-[#212427]">e</span>
            <span className="spaan --i text-[#212427]">a</span>
            <span className="spaan --i text-[#212427]">d</span>
            <span className="spaan --i text-[#212427]">y</span>
          </div>
          to get <span className="font-thin text-[#49108B]">more</span> <br />
          out of <br />
          <span className="font-thin text-[#49108B]">work</span> and{" "}
          <span className="font-thin text-[#49108B]">life</span>{" "}
          <span className="animate-bounce text-[#49108B]">?</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
