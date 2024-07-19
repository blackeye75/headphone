import React, { useState } from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";

const data = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse veniam ut sint qui suscipit quos voluptatum, quas molestias voluptates, recusandae iste magnam!",
    price: "$100",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless 2",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse veniam ut sint qui suscipit quos voluptatum, quas molestias voluptates, recusandae iste magnam!",
    price: "$100",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless 3",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse veniam ut sint qui suscipit quos voluptatum, quas molestias voluptates, recusandae iste magnam!",
    price: "$100",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(data[0]);
  return (
    <section className="bg-brandDark text-white font-varela">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] ">
          <div className="space-y-1 text-center md:text-left">
            <h1 className="text-3xl lg:text-6xl font-bold font-varela">
              {activeData.title}
            </h1>
            <p className="text-sm leading-loose text-white/80">
              {activeData.subtitle}
            </p>
            <button
              className="px-4 py-2 inline-block font-normal rounded-sm"
              style={{ backgroundColor: activeData.bgColor }}
            >
              Buy and Listen
            </button>
            {/* models list seperator*/}
            <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
              <div className="w-20 h-[1px] bg-white"></div>
              <p className="uppercase text-sm ">Top Headphones For You</p>
              <div className="w-20 h-[1px] bg-white"></div>
            </div>
            {/* model list switcher */}
            <div className="grid grid-cols-3 gap-10">
              {data.map((item) => {
                return (
                  <div className="grid grid-cols-2 place-items-center cursor-pointer">
                    <div>
                      <img src={item.image} alt="" className="w-[200px]" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-base font-bold">{item.price}</p>
                      <p className="text-xs font-normal text-nowrap">
                        {item.modal}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex flex-col justify-end items-center">
          <img
            className="w-[300px] md:w-[400px] xl:w-[500px]"
            src={activeData.image}
            alt=""
          />
        </div>
        {/* whatsapp icon */}
        <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[9999999] mix-blend-difference">
          <a href="">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
