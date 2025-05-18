"use client";
import { motion } from "framer-motion";
const Location = () => {
  return (
    <div>
      <div className="my-14 space-y-10 px-14 flex  flex-col gap-8  justify-center items-center md:flex-row">
        {/* from section */}
        <From />
        {/* Gps section */}
        <Gps />
      </div>
    </div>
  );
};
export default Location;

function From() {
  return (
    <div className="space-y-8">
      <motion.h1
        className="text-md font-bold text-gray-800/90"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
      >
        Buy our product from anywhere
      </motion.h1>
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-40 md:w-[150px] input-style"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-40 md:w-full input-style"
        />
      </motion.div>
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="Country"
          className="w-40 md:w-[200px] input-style"
        />
        <input
          type="text"
          placeholder="Zipcode"
          className="w-40 md:w-full input-style"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
      >
        <button className="text-white w-full p-2 rounded-lg bg-primary shadow-xl cursor-pointer">
          สั่งเลย
        </button>
      </motion.div>
    </div>
  );
}

function Gps() {
  const gpsMaps = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.6388009930215!2d100.13292367592142!3d18.134463780852936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d8c269e4b9a9c9%3A0x3819aae22e9a20a8!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4LmB4Lie4Lij4LmI!5e0!3m2!1sth!2sth!4v1747240660299!5m2!1sth!2sth`;
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
    >
      <div className="rounded-xl md:w-[450px] md:h-[450px] w-[300px] h-[300px] overflow-hidden shadow-2xl mx-auto">
        <iframe
          src={gpsMaps}
          width="600"
          height="450"
          style={{ border: 2, borderRadius: "0.5rem" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
}
