import Awards from "./Awards";
import Media from "./Media";


const Blog = () => {
    return (
        <div>
            <div>
                <div className=" h-full mt-24 mb-12 ml-16 mr-10 ">
                    <img src={'https://i.ibb.co/6tX7fjY/blog-desktop-banner.webp'} className="w-full rounded-xl" />
                    <div className="absolute p-20 rounded-xl flex items-center h-half left-0 top-0 ">
                        <div className='text-black mt-5  pl-12 '>
                            <h2 className='text-3xl text-cyan-300 mt-4 font-bold'> SwiftPay Blog</h2>
                            <h2 className='text-xl mt-4 font-bold'>Read SwiftPay Blog</h2>
                        </div>
                    </div>
                </div>
            </div>
          <div className="mb-24">
          <Awards></Awards>
          <Media></Media>
          </div>
        </div>
    );
};

export default Blog;