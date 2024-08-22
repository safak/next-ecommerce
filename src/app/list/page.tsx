"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Filter from '@/components/Filter';
import ProductSale from '@/components/ProductSale';
import SaleProductList from '@/components/SaleProdcutList';

const ListPage = () => {
  useEffect(() => {
    AOS.init({
      offset : 100,
      duration : 800,
      easing:'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* CAMPAIGN */}
      <div className='bg-pink-50 px-4 flex justify-between h-64  max-md:h-48 p-4'>
        <div className='w-2/3 flex flex-col items-center justify-center gap-8'data-aos="fade-right"  data-aos-delay="000">
          <h1 className='text-4xl max-md:text-xl font-semibold leading-[48px] text-gray-700' >
            Grab up to 50% off on <br /> your next purchase
          </h1>
          <button className='rounded-3xl bg-lama text-white px-4 py-2 w-max'>
            Shop Now
          </button>
        </div>
        <div className='relative w-1/3 h-full'>
          <Image 
          data-aos="fade-left"
          data-aos-delay="400"
            src="/woman.png"
            alt="banner"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Filters*/}
      <Filter />
      
      </div>
  );
};

export default ListPage;
