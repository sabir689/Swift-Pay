/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Parallax = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const users = [
    {
      image:
        "https://i.ibb.co/DCJ7bHJ/419508388-122098609100190728-7506579422464250354-n.jpg",
    },
  ];

  const titleComponent = "Your Digital Marketplace Destination";

  return (
    <div
      className="h-[70rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          users={users}
        />
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="bg-gradient-to-r  typed from-[#48CF98]   to-[#091ECF]  text-transparent bg-clip-text max-w-7xl mx-auto text-center text-5xl lg:text-[100px] font-semibold"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, translate, users }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-7xl  w-full -mt-10 mx-auto  border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co/t3rZNrS/Screenshot-2024-02-28-222102.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="bg-cover bg-center  h-[700px] w-full rounded-2xl"
      >
        {users.map((user, idx) => (
          <motion.div
            key={`user${idx}`}
            className="rounded-md cursor-pointer relative"
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
          >
            {/* <img src={user?.image} className="object-cover object-center" /> */}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Parallax;
