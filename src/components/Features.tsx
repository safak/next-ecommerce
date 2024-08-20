import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="mt-24 container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[70%] md:w-2/3 lg:w-2/2 mx-auto justify-center">
        <div className="border border-lama rounded-sm px-6 py-8 flex justify-center items-center gap-5"
        data-aos="fade-up"
        data-aos-delay="000">
          <Image
            src="/delivery-van.svg"
            alt="Van"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <h3 className="font-medium capitalize text-lg">Free shipping</h3>
            <p className="text-gray-500 text-sm">Order over 300TND</p>
          </div>
        </div>
        <div
          className="border border-lama rounded-sm px-6 py-8 flex justify-center items-center gap-5"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Image
            src="/money-back.svg"
            alt="Van"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <h3 className="font-medium capitalize text-lg">Money Returnes</h3>
            <p className="text-gray-500 text-sm">30 Days money return</p>
          </div>
        </div>
        <div className="border border-lama rounded-sm px-6 py-8 flex justify-center items-center gap-5"data-aos="fade-up"
        data-aos-delay="600">
          <Image
            src="/service-hours.svg"
            alt="Van"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <h3 className="font-medium capitalize text-lg">24/7 Support</h3>
            <p className="text-gray-500 text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
