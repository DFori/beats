import React from "react";
import img from "../assets/img/faq.png";
import FaqCard from "../Layout/FaqCard";
import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accordionData = [
    {
      title: "This is first question",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium iste ducimus sunt suscipit modi fugiat.",
    },
    {
      title: "This is first question",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium iste ducimus sunt suscipit modi fugiat.",
    },
    {
      title: "This is first question",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium iste ducimus sunt suscipit modi fugiat.",
    },
    {
      title: "This is first question",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium iste ducimus sunt suscipit modi fugiat.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:text-start">FAQs</h1>
      <h3 className=" text-xl font-medium mt-4">What people ask from us</h3>
      <div className=" flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-3/4">
          <img src={img} alt="img" />
        </div>
        <section className="w-full grid place-items-center">
          <div className=" lg:px-[40px] max-w-[800px] -mt-10">
            {accordionData.map((data, index) => {
              return (
                <FaqCard
                  key={index}
                  open={index === open}
                  title={data.title}
                  desc={data.desc}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
