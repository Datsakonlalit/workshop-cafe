"use client";
import BgImage from "@/public/assets/bg-slate.png";
import BackCoffe from "@/public/assets/black.png";
import Image from "next/image";
import Navber from "../Navber/Navber";
import { motion } from "framer-motion";

const Hero = () => {
  const bgimage = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const MotionImage = motion(Image);

  return (
    <>
      <main style={bgimage}>
        <section className="min-h-[750px] w-full relative">
            {/* navber */}
              <Navber />

            {/* hero section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
              {/* text content section */}
              <div className="text-lightOrange mt-[100px] md:mt-0 space-y-28 p-4">
                <motion.div
                  className="flex-initial"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2,
                  }}
                >
                  <h1 className="ml-14 text-3xl md:text-5xl  font-bold leading-tight">
                    <span className="text-primaryDark">
                      Front-end Developer
                    </span>
                    <div>company office</div>
                  </h1>
                </motion.div>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2,
                  }}
                >
                  <div className="relative z-10 bg-gray-700/25 p-10 left-14 space-y-4">
                    <motion.h1
                      className="text-2xl text-primaryDark md:text-4xl font-bold"
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.5,
                      }}
                    >
                      Coder Life Style
                    </motion.h1>
                    <motion.h1
                      className="text-sm opacity-55 leading-loose"
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.6,
                      }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Similique, amet eum rerum fuga porro dolor. Lorem ipsum
                      dolor sit amet.
                    </motion.h1>
                  </div>
                </motion.div>
              </div>

              {/* hero img section */}
              <div className="relative">
                <MotionImage
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2,
                  }}
                  className="relative z-30 md:z-40 h-[400] md:h-[700px] img-shadow1 "
                  src={BackCoffe}
                  alt="heroimg"
                ></MotionImage>
                <motion.div
                  className="rounded-full border-[20px] border-primary w-[180px] h-[180px] absolute top-24 -right-16 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.3,
                  }}
                />

                <div className="absolute top-0 left-[250px] z-[1]">
                  <motion.h1
                    className="text-[80px] sm:text-[120px] md:text-[200px] leading-none scale-150 font-bold text-darkGray/40"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      damping: 10,
                      delay: 0.4,
                    }}
                  >
                    Coder your Life
                  </motion.h1>
                </div>
              </div>

              {/* trird div section */}
              <motion.div
                className="text-lightOrange mt-[100px] md:mt-0 space-y-28 p-4 z-30"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3,
                }}
              >
                <div className="relative bg-darkGray/50 top-25 p-10 right-14 z-10 space-y-4">
                  <motion.h1
                    className="text-2xl text-primaryDark md:text-4xl font-bold"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.5,
                    }}
                  >
                    Coder Life Style
                  </motion.h1>
                  <motion.h1
                    className="text-sm opacity-55 leading-loose"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.6,
                    }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique, amet eum rerum fuga porro dolor. Lorem ipsum
                    dolor sit amet.
                  </motion.h1>
                </div>
              </motion.div>
            </div>
        </section>
      </main>
    </>
  );
};
export default Hero;
