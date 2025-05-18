"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
const MotionImage = motion(Image);
  const BannerImage = "/assets/coffee-cover.jpg";
  const AppStore = "/assets/app_store.png";
  const PlayStore = "/assets/play_store.png";

  const BannerStyle = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="my-14 space-y-10 px-14">
      <motion.div
      initial={{ opacity : 0 , scale : 0}}
      animate ={{ opacity : 1 , scale : 1}}
      transition={{ type: "spring" , stiffness : 100 , damping : 10 , delay : 0.1}}
        style={BannerStyle}
        className="sm:min-h-[400px] flex justify-center items-center rounded-md bg-center px-4 py-6 sm:px-8 sm:py-12"
      >
        <div className="maw-w-xl mx-auto">
          <div className="space-y-4">
            <motion.h1 className="text-xl sm:text-3xl font-semibold text-center"
            initial={{opacity : 0 , y : -100}}
            animate ={{opacity : 1 , y: 0}}
            transition={{ type : "spring", stiffness: 100 ,damping : 10 , delay : 0.5}}
            >
              Down load the app
            </motion.h1>
            <motion.p className="text-center text-gray-800 sm:px-10"
                      initial={{opacity : 0 , y : -100}}
            animate ={{opacity : 1 , y: 0}}
            transition={{ type : "spring", stiffness: 100 ,damping : 10 , delay : 0.6}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, itaque?
            </motion.p>

            {/* section img */}
            <div className="flex justify-center items-center gap-4">
              <Link
                href={"#"}
                className="max-w-[250px] sm:max-w-[220px] md:w-[300px]"
              >
                <MotionImage
                initial = {{opacity : 0 , y : -100}}
                animate = {{ opacity : 1 , y: 0}}
                transition={{ type :"spring" , stiffness : 100 , damping : 10 , delay : 0.1}}
                  src={AppStore}
                  alt="AppStore"
                  width={300}
                  height={300}
                ></MotionImage>
              </Link>
              <Link
                href={"#"}
                className="max-w-[250px] sm:max-w-[220px] md:w-[300px]"
              >
                <MotionImage
                  initial = {{opacity : 0 , y : -100}}
                animate = {{ opacity  :1 , y: 0}}
                transition={{ type :"spring" , stiffness : 100 , damping : 10 , delay : 0.1}}
                  src={PlayStore}
                  alt="PlayStore"
                  width={300}
                  height={300}
                ></MotionImage>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Banner;
