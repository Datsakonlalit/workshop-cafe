import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const Navber = () => {
  const [sidenav, setsidenav] = useState(false);
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full pt-8 z-40">
        <div className="px-4 md:px-15">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-lg md:text-2xl text-white font-semibold uppercase tracking-wider"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
            >
              <span className="text-primary">Motion</span> Workshop1
            </motion.h1>

            {/* Hambergur Section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
            >
              <GiHamburgerMenu
                onClick={() => {setsidenav(!sidenav)}}
                className="cursor-pointer text-2xl select-none text-white"
              />
            </motion.div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {sidenav && (
          <motion.div className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-[35]"
          initial ={{ opacity : 0 , x : 100}}
          animate = {{ opacity : 1 , x: 0}}
          exit={{ opacity : 0 , x: 100}}
          transition={{ type : "spring" , stiffness : 100 , damping : 10}}
          >
              <div className=" w-full h-full gap-6 flex flex-col justify-center items-center">
                {/* line top */}
                <div className="w-[1px] h-[10vh] bg-white/50" />
                {/* social icon */}
                <div className="text-white inline-block p-4 border-white border-1 rounded-full cursor-pointer"><FaFacebookF /></div>
                <div className="text-white inline-block p-4 border-white border-1 rounded-full cursor-pointer"><FaTwitter /></div>
                <div className="text-white inline-block p-4 border-white border-1 rounded-full cursor-pointer"><FaInstagram /></div>
                {/* line buttom */}
                <div className="w-[1px] h-[10vh] bg-white/50" />
              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Navber;
