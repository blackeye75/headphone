import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6 "
          >
            <h1 className="text-3xl font-bold uppercase">Playing</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, soluta ullam dolores optio deleniti nisi porro quam
              corporis saepe odit.
            </p>
            <div className="">
              <p className="flex items-center gap-2">
                <FaPhone />
                +91 7005212531
              </p>
              <p className="flex items-center gap-2">
                <FaMapLocation /> New Delhi, IN
              </p>
            </div>
          </motion.div>
          {/* Footer link section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6 "
          >
            <h1 className="text-3xl font-bold ">Quick Links</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Conatct Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 ">
                  <li>Shop</li>
                  <li>Services</li>
                  <li>Visit</li>
                  <li>Product</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* social link section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300 hover:text-blue-500" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300 hover:text-pink-500" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300 hover:text-blue-500" />
              <FaTwitter className="text-3xl hover:scale-105 duration-300 hover:text-blue-500" />
            </div>
            <div className="space-y-2">
              <p>Payment Method</p>
              <img src={Cards} className="w-[80%]" alt="" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p className="text-white text-center border-t-2 pt-8 mt-8">
          © 2024. All Right Reserved Priyanshu Raj
        </p>
      </div>
    </footer>
  );
};

export default Footer;
