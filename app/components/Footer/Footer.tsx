"use client";
import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";

import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const creditCardImg = `/assets/creditCard.png`;
const scbImg = `/assets/scb.png`;
const kbankImg = `/assets/kbank.png`;

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-primary to-primaryDark py-12 text-white">
      <div className="my-14 px-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* company Details */}
        <CompanyDetails />
        {/* Links Details */}
        <FooterLink />
        {/* Socaial Details */}
        <SocialMedia />
      </div>
    </div>
  );
};
export default Footer;

function CompanyDetails() {
  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold uppercase">Motion Coder</h1>
        <p className="text-sm max-w-[300px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste modi
          saepe at eum accusamus quod minus
        </p>

        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <FaPhone /> +99 1234567890
          </p>
          <p className="flex items-center gap-2">
            <FaMapLocation />
            23 Street , New York , City, Country
          </p>
        </div>
      </div>
    </div>
  );
}

function FooterLink() {
  return (
    <div>
      <h1 className="text-3xl font-bold uppercase tracking-wider py-6">
        Qucik Link
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <ul className="space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}

function SocialMedia() {
  return (
    <div>
      <div className="space-y-6 py-6">
        <h1 className="text-3xl font-bold uppercase tracking-wider">
          Follow Us
        </h1>
        <div className="flex items-center gap-4">
          <FaFacebook className="text-3xl hover:scale-110 tracking-all duration-300" />
          <FaInstagram className="text-3xl hover:scale-110 tracking-all duration-300" />
          <FaGoogle className="text-3xl hover:scale-110 tracking-all duration-300" />
          <FaTelegram className="text-3xl hover:scale-110 tracking-all duration-300" />
        </div>

        <div className="space-y-2">
          <div>
            <p>Payment</p>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={creditCardImg}
              alt="creditCardImg"
              width={60}
              height={60}
            />
            <Image
              src={scbImg}
              alt="scbImg"
              width={60}
              height={60}
            />
            <Image
              src={kbankImg}
              alt="kbankImg"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
