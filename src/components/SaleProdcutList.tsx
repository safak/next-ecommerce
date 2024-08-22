
import React from "react";
import ProductSale from "./ProductSale";

// Array to store product data
const data = [
  {
    id: 1,
    image1: "https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Jean",
    price:100,
    description: "Comfortable and stylish jeans.",
    discount: 50,
  },
  {
    id: 2,
    image1: "https://images.pexels.com/photos/12446409/pexels-photo-12446409.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2: "https://images.pexels.com/photos/12452982/pexels-photo-12452982.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "T-Shirt",
    price:50,
    description: "Classic t-shirt for everyday wear.",
    discount: 30,
  },
  {
    id: 3,
    image1: "https://images.pexels.com/photos/3353466/pexels-photo-3353466.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2: "https://images.pexels.com/photos/2210899/pexels-photo-2210899.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Hoodie",
    price:150,
    description: "Warm and cozy hoodie.",
    discount: 20,
  },
  {
    id: 4,
    image1: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2: "https://images.pexels.com/photos/1475384/pexels-photo-1475384.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Cap",
    price:30,
    description: "Stylish cap for sunny days.",
    discount: 75,
  }
];

const SaleProductList = ({title, description}:{title:string,description:string}) => {
  return (<div className="mt-12">
 <div className="text-center mb-10 max-w-[600px] mx-auto">
        <h1 className="text-3xl font-bold" data-aos="fade-down">{title}</h1>
        <p className="text-xs text-gray-400" data-aos="fade-down">
          {description}
        </p>
      </div>
    <div className=" grid gap-8 gap-y-16 sm:grid-cols-1 lg:grid-cols-4">
      
     
       {data.map((product) => (
         <div key={product.id}
         data-aos="fade-up"
          data-aos-delay={product.id*200}>
           <ProductSale category={"men"} image={product.image1} name={product.name} price={product.price} id={0} description={product.description} isOnSale={true} discountPercentage={product.discount} /> 
           </div>
      ))}
     </div>
    </div>

    
  );
};

export default SaleProductList;
