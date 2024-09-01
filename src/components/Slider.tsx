"use client"

import { transcode } from "buffer"
import { transform } from "next/dist/build/swc"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"



/*contenu of the slider */
const slides = [{
    id: 1,
    title: "Leo",
    description: "aaaaaaaaaaaaaa",
    img: "https://thumbs.dreamstime.com/z/vinayagar-images-ai-hd-photo-2023-289916691.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
},
{
    id: 2,
    title: "Display",
    description: "bbbbbbbbbb",
    img: "https://www.tracedirecte.com/media/original_images/inde-rajasthan-vieil-hommes-indiens.jpg.1920x1200_q85_format-jpg_upscale.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
}]

const Slider = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(prev => (prev === slides.length-1 ? 0 : prev+1))
      },3000);
      return () => clearInterval(interval);
    }, []);


  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{transform:`translateX(-${current*100}vw)`}}>
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/*TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  Acheter Maintenant
                </button>
              </Link>
            </div>
            {/*IMG CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rouded-full ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider
