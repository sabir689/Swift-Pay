import Awards from "./Awards";
import Media from "./Media";

const Blog = () => {
  return (
    <div>
      <div>
        <div className="mt-24 mb-12 max-w-screen-xl mx-auto">
          <div className="rounded-xl absolute top-[80px] lg:top-[134px] pl-5 z-10">
            <div className="text-black">
              <h2 className="text-md lg:text-3xl text-[#49108B] mt-4 font-bold">
                {" "}
                SwiftPay <span className="font-thin">Blog</span>
              </h2>
              <h2 className="text-sm lg:text-md mt-2 text-gray-400 font-medium">
                Read SwiftPay Blog
              </h2>
            </div>
          </div>
          <div className="relative">
            <img
              src={"https://i.ibb.co/6tX7fjY/blog-desktop-banner.webp"}
              className="w-full rounded-xl border-2 border-gray-200"
            />
          </div>
        </div>
      </div>
      <div className="mb-24 max-w-screen-xl mx-auto">
        <Awards></Awards>
        <Media></Media>
      </div>
    </div>
  );
};

export default Blog;
