import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Container from "../../Components/Shared/Container";

const imageUrls = [
  "https://i.ibb.co/Bz0tBpT/Frame-20889-vxrtq5.png",
  "https://i.ibb.co/D9d5NmK/Frame-20892-c1lkco.png",
  "https://i.ibb.co/L1QxxNQ/Frame-20890-etednk.png",
  "https://i.ibb.co/ZT6S3YG/Frame-20891-hvd0pr.png",
  "https://i.ibb.co/qFrX5Mw/Frame-20896-k7iyvj.png",
  "https://i.ibb.co/khSWwSP/Frame-20887-gpdqkm.png",
  "https://i.ibb.co/PcHfzPj/Frame-20894-n9cerg.png",
];

const Customers = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = imageUrls.map((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
        return new Promise((resolve) => {
          img.onload = resolve;
        });
      });

      await Promise.all(imagePromises);
      setIsImagesLoaded(true);
    };

    preloadImages();
  }, []);

  return (
    <>
      <Container>
        <div className="text-center mt-20">
          <p className="lg:text-5xl text-3xl font-semibold mb-4 text-cyan-500">
            Empowering 10000+ lives and counting
          </p>
          <p className=" max-w-prose mx-auto mb-10 text-md text-gray-500 opacity-70">
            Empower online sellers and SMEs with diverse income streams through
            innovative digital platforms and strategic partnerships.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-between">
          <div className="">
            {isImagesLoaded ? (
              <Marquee gradient={false} speed={70}>
                <div className="carousel lg:h-[350px] h-[250px] w-full">
                  <ul className="list-none h-full flex p-0 m-0">
                    {imageUrls.map((imageUrl, index) => (
                      <li
                        key={index}
                        className="border-3 border-solid border-teal flex-shrink-0 animate-scrolling animate-linear animate-infinite duration-10000 mr-6"
                      >
                        <img
                          src={imageUrl}
                          className="lg:w-[300px] lg:h-[300px] w-[250px] h-full object-cover rounded-full"
                          alt={`Image ${index + 1}`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </Marquee>
            ) : (
              <div className="text-white text-center">Loading images...</div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Customers;
