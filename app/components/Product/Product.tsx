"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface ProductType {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const ProductData: ProductType[] = [
  {
    id: 1,
    image: "/assets/coffee1.png", // แก้ไข path ของ image
    title: "Black Coffee",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolore officia",
  },
  {
    id: 2,
    image: "/assets/coffee3.png", // แก้ไข path ของ image
    title: "Cold Coffee",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolore officia",
  },
  {
    id: 3,
    image: "/assets/coffee1.png", // แก้ไข path ของ image
    title: "White Coffee",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolore officia",
  },
];

interface CardProps {
  Product: ProductType[]; // แก้ไขชื่อ Props ให้ตรงกับที่ส่งมา
}

const Product = () => {
  return (
    <div>
      <div className="my-14 space-y-10 px-14">
        {/* header section */}
        <Header />

        {/* card section */}
        <Card Product={ProductData} />
      </div>
    </div>
  );
};
export default Product;

function Header() {
  return (
    <div className="text-center max-w-lg mx-auto space-y-2">
      <motion.h1
        className="text-3xl font-bold  text-lightGray"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
      >
        Frest and <span className="text-primary">Tasty coffee</span>
      </motion.h1>
      <motion.p
        className="text-sm text-gray-700/70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum dolore
        officia, consectetur assumenda atque exercitationem. Accusamus nobis
        labore eius et! Libero provident minus facere non voluptatibus quisquam
        incidunt debitis a!
      </motion.p>
    </div>
  );
}

const Card = ({ Product }: CardProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
    >
      {Product.map(
        (
          item // เปลี่ยน Product เป็น item ใน callback function
        ) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 hover:scale-110 duration-300 cursor-pointer hover:shadow-2xs hover:bg-gray-100"
          >
            <div className="flex justify-center items-center relative w-full h-[20vh] overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
              />
            </div>
            <h3 className="text-xl text-primaryDark text-center font-bold mt-2">
              {item.title}
            </h3>
            <p className="text-sm opacity-50 text-center mt-1">
              {item.subtitle}
            </p>
          </div>
        )
      )}
    </motion.div>
  );
};
