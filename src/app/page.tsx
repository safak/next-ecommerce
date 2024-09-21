"use client";
import { metadata } from "./metadata";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider";
import {motion } from 'framer-motion';

const sliderContainerVariant = {
  hidden: {
    x: -500,
    y: 100,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4,
      duration: 1.5,
      ease: 'linear',
    },
  },
};

const featureContainerVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 2.0,
      ease: 'linear',
    },
  },
};

const categoriesContainerVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 2.0,
      ease: 'linear',
    },
  },
};

const newContainerVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 2.0,
      ease: 'linear',
    },
  },
};

const HomePage = () => {

  return (
    <motion.div className=''>

      {/* Slider */}
      <motion.div
        variants={sliderContainerVariant}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Slider/>
      </motion.div>

      {/* Featured Product */}
      <motion.div 
        variants={featureContainerVariant}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64"
      >
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList filterType="featured"/>
      </motion.div>

      {/* Categories */}
      <motion.div
        variants={categoriesContainerVariant}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-24"
      >
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList/>
      </motion.div>

      {/* New Product */}
      <motion.div
        variants={newContainerVariant}
        initial= 'hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64"
      >
        <h1 className="text-2xl">New Products</h1>
        <ProductList filterType="new"/>
      </motion.div>
    </motion.div>
  )
}

export default HomePage;