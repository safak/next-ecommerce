"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { motion } from "framer-motion";

interface Size {
    size: string;
    stock: number;
    id: number;
}

const SinglePage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    
    const [product, setProduct] = useState<any>(null);
    const [images, setImages] = useState<any[]>([]);  
    const [selectedColor, setSelectedColor] = useState<number | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [sizes, setSizes] = useState<Size[]>([]);
    const [price, setPrice] = useState<number | null>(null);    
    const [stock, setStock] = useState<number | null>(null);
    const [originalPrice, setOriginalPrice] = useState<number | null>(null);
    const [productVariationId, setProductVariationId] = useState<number | null>(null);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/productdetail/${id}/`);
                    const data = await response.json();
                    setProduct(data);
                    
                    if (data.variations.length > 0) {
                        const defaultColorId = data.variations[0].color.id;
                        setSelectedColor(defaultColorId);
                        setImages(data.images || []);

                        const filteredVariations = data.variations.filter((v: any) => v.color.id === defaultColorId);
                        const sizeStockMap: Size[] = filteredVariations.map((v: any) => ({
                            size: v.size.size,
                            stock: v.stock,
                            id: v.size.id,
                        }));

                        const defaultSizeId = Math.min(...filteredVariations.map((v: any) => v.size.id));
                        const defaultSize = filteredVariations.find((v: any) => v.size.id === defaultSizeId)?.size.size;

                        setSizes(sizeStockMap);
                        setSelectedSize(defaultSize || null);
                        setPrice(filteredVariations.find((v: any) => v.size.size === defaultSize)?.discount_price || null);
                        setStock(filteredVariations.find((v: any) => v.size.size === defaultSize)?.stock || null);
                        setOriginalPrice(filteredVariations.find((v: any) => v.size.size === defaultSize)?.original_price || null);
                        setProductVariationId(filteredVariations.find((v: any) => v.size.size === defaultSize)?.id || null);
                    }
                } catch (error) {
                    console.error('Error fetching product:', error);
                }
            };
            fetchProduct();
        } else {
            console.error('Product ID is missing from the URL');
        }
    }, [id]);
    
    const handleColorChange = async (colorId: number) => {
        try {
            setSelectedColor(colorId);
            const response = await fetch(`http://127.0.0.1:8000/productdetail/${id}/?color=${colorId}`);
            const data = await response.json();
            
            setImages(data.images || []); 

            const filteredVariations = data.variations.filter((v: any) => v.color.id === colorId);
            const sizeStockMap: Size[] = filteredVariations.map((v: any) => ({
                size: v.size.size,
                stock: v.stock,
                id: v.size.id,
            }));

            const defaultSizeId = Math.min(...filteredVariations.map((v: any) => v.size.id));
            const defaultSize = filteredVariations.find((v: any) => v.size.id === defaultSizeId)?.size.size;

            setSizes(sizeStockMap);
            setSelectedSize(defaultSize || null);
            setPrice(filteredVariations.find((v: any) => v.size.size === defaultSize)?.discount_price || null);
            setStock(filteredVariations.find((v: any) => v.size.size === defaultSize)?.stock || null);
            setOriginalPrice(filteredVariations.find((v: any) => v.size.size === defaultSize)?.original_price || null);
            setProductVariationId(filteredVariations.find((v: any) => v.size.size === defaultSize)?.id || null);
        } catch (error) {
            console.error('Error fetching color images:', error);
        }
    };

    const handleSizeChange = (size: string) => {
        setSelectedSize(size);
        const matchingVariation = product.variations.find((v: any) =>
            v.color.id === selectedColor && v.size.size === size
        );
        if (matchingVariation) {
            setPrice(matchingVariation.discount_price);
            setStock(matchingVariation.stock);           
            setOriginalPrice(matchingVariation.original_price);
            setProductVariationId(matchingVariation.id);
        }
    };

    if (!product) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-ashu"></div>
        </div>
    );

    const uniqueColors = product.variations
        .map((v: any) => v.color)
        .filter((color: any, index: number, self: any[]) => 
            index === self.findIndex((c: any) => c.id === color.id)
        ); 

    return (
        <motion.div 
            className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.2,
                    duration: 0.4,
                    ease: "easeIn"
                },
            }}
        >
            {/* Img */}
            <motion.div 
                className="w-full lg:w-1/2 lg:sticky top-20 h-max"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.5,
                        duration: 0.4,
                        ease: "easeIn"
                    },
                }}
            >
                <ProductImages images={images}/> 
            </motion.div>

            {/* Texts */}
            <motion.div 
                className="w-full lg:w-1/2 flex flex-col gap-6"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.8,
                        duration: 0.4,
                        ease: "easeIn"
                    },
                }}
            >
                <h1 className="text-4xl font-medium">{product.product_name}</h1>
                <p className="text-gray-500">
                    {product.full_description || "No description available."}
                </p>
                <div className="h-[2px] bg-gray-100" />

                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">${originalPrice}</h3>
                    <h2 className="font-medium text-2xl">${price}</h2>
                </div>
                <div className="h-[2px] bg-gray-100" />

                <CustomizeProducts
                    colors={uniqueColors}
                    sizes={sizes}
                    onColorChange={handleColorChange}
                    onSizeChange={handleSizeChange}
                    selectedColor={selectedColor}
                />
                
                <Add initialStock={stock} product_variation_id={productVariationId} />

                <div className="h-[2px] bg-gray-100" />

                <div className="text-sm">
                    <h4 className="font-bold mb-4">Highlights</h4>
                    <ul className="list-disc ml-5">
                        {
                            product.short_description.split(/\r\n/g).map((line: string, index: number) => (
                                <li key={index}>{line}</li>
                            ))
                        }
                    </ul>
                </div>

                <div className="text-sm">
                    <h4 className="font-bold mb-4">Available offers</h4>
                    <ul className="list-disc ml-5">
                        {
                            product.offer.map((offer: any, index: number) => (
                                <li key={offer.id}>
                                    <span className="font-bold">
                                        {offer.offer.split(" ").slice(0, 2).join(" ")}
                                    </span>{" "}
                                    {offer.offer.split(" ").slice(2).join(" ")}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="text-sm">
                    <h4 className="font-bold mb-4">Replacement</h4>
                    <ul className="list-disc ml-5">
                        {
                            product.replacement.split(/\r\n/g).map((line: string, index: number) => (
                                <li key={index}>{line}</li>
                            ))
                        }
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SinglePage;



// "use client";
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import Add from "@/components/Add";
// import CustomizeProducts from "@/components/CustomizeProducts";
// import ProductImages from "@/components/ProductImages";
// import { motion } from "framer-motion";

// interface Size {
//     size: string;
//     stock: number;
//     id: number;
// }

// const SinglePage = () => {
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id');
    
//     const [product, setProduct] = useState<any>(null);
//     const [images, setImages] = useState<any[]>([]);  
//     const [selectedColor, setSelectedColor] = useState<number | null>(null);
//     const [selectedSize, setSelectedSize] = useState<string | null>(null);
//     const [sizes, setSizes] = useState<Size[]>([]);
//     const [price, setPrice] = useState<number | null>(null);    
//     const [stock, setStock] = useState<number | null>(null);
//     const [originalPrice, setOriginalPrice] = useState<number | null>(null);

//     useEffect(() => {
//         if (id) {
//             const fetchProduct = async () => {
//                 try {
//                     const response = await fetch(`http://127.0.0.1:8000/productdetail/${id}/`);
//                     const data = await response.json();
//                     setProduct(data);
                    
//                     if (data.variations.length > 0) {
//                         const defaultColorId = data.variations[0].color.id;
//                         setSelectedColor(defaultColorId);
//                         setImages(data.images || []);

//                         const filteredVariations = data.variations.filter((v: any) => v.color.id === defaultColorId);
//                         const sizeStockMap: Size[] = filteredVariations.map((v: any) => ({
//                             size: v.size.size,
//                             stock: v.stock,
//                         }));

//                         const defaultSizeId = Math.min(...filteredVariations.map((v: any) => v.size.id));
//                         const defaultSize = filteredVariations.find((v: any) => v.size.id === defaultSizeId)?.size.size;

//                         // setSizes(filteredVariations.map((v: any) => v.size.size));
//                         setSizes(sizeStockMap);
//                         setSelectedSize(defaultSize || null);
//                         setPrice(filteredVariations.find((v: any) => v.size.size === defaultSize)?.discount_price || null);
//                         setStock(filteredVariations.find((v: any) => v.size.size === defaultSize)?.stock || null);
//                         setOriginalPrice(filteredVariations.find((v: any) => v.size.size === defaultSize)?.original_price || null);
//                     }
//                 } catch (error) {
//                     console.error('Error fetching product:', error);
//                 }
//             };
//             fetchProduct();
//         } else {
//             console.error('Product ID is missing from the URL');
//         }
//     }, [id]);
    

//     const handleColorChange = async (colorId: number) => {
//         try {
//             setSelectedColor(colorId);
//             const response = await fetch(`http://127.0.0.1:8000/productdetail/${id}/?color=${colorId}`);
//             const data = await response.json();
            
//             setImages(data.images || []); 

//             const filteredVariations = data.variations.filter((v: any) => v.color.id === colorId);
//             const sizeStockMap: Size[] = filteredVariations.map((v: any) => ({
//                 size: v.size.size,
//                 stock: v.stock,
//                 id: v.size.id,
//             }));

//             const defaultSizeId = Math.min(...filteredVariations.map((v: any) => v.size.id));
//             const defaultSize = filteredVariations.find((v: any) => v.size.id === defaultSizeId)?.size.size;

//             // setSizes(filteredVariations.map((v: any) => v.size.size)); 
//             setSizes(sizeStockMap);
//             setSelectedSize(defaultSize || null);
//             setPrice(filteredVariations.find((v: any) => v.size.size === defaultSize)?.discount_price || null);
//             setStock(filteredVariations.find((v: any) => v.size.size === defaultSize)?.stock || null);
//             setOriginalPrice(filteredVariations.find((v: any) => v.size.size === defaultSize)?.original_price || null);
//         } catch (error) {
//             console.error('Error fetching color images:', error);
//         }
//     };

//     const handleSizeChange = (size: string) => {
//         setSelectedSize(size);
//         const matchingVariation = product.variations.find((v: any) =>
//             v.color.id === selectedColor && v.size.size === size
//         );
//         if (matchingVariation) {
//             setPrice(matchingVariation.discount_price);
//             setStock(matchingVariation.stock);           
//             setOriginalPrice(matchingVariation.original_price);
//         }
//     };

//     if (!product) return (
//         <div className="flex justify-center items-center h-screen">
//             <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-ashu"></div>
//         </div>
//     );

//     const uniqueColors = product.variations
//         .map((v: any) => v.color)
//         .filter((color: any, index: number, self: any[]) => 
//             index === self.findIndex((c: any) => c.id === color.id)
//         ); 

//     return (
//         <motion.div 
//             className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16"
//             initial={{ opacity: 0 }}
//             animate={{
//                 opacity: 1,
//                 transition: {
//                     delay: 0.2,
//                     duration: 0.4,
//                     ease: "easeIn"
//                 },
//             }}
//         >
//             {/* Img */}
//             <motion.div 
//                 className="w-full lg:w-1/2 lg:sticky top-20 h-max"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                     opacity: 1,
//                     transition: {
//                         delay: 0.5,
//                         duration: 0.4,
//                         ease: "easeIn"
//                     },
//                 }}
//             >
//                 <ProductImages images={images}/> 
//             </motion.div>

//             {/* Texts */}
//             <motion.div 
//                 className="w-full lg:w-1/2 flex flex-col gap-6"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                     opacity: 1,
//                     transition: {
//                         delay: 0.8,
//                         duration: 0.4,
//                         ease: "easeIn"
//                     },
//                 }}
//             >
//                 <h1 className="text-4xl font-medium">{product.product_name}</h1>
//                 <p className="text-gray-500">
//                     {product.full_description || "No description available."}
//                 </p>
//                 <div className="h-[2px] bg-gray-100" />

//                 <div className="flex items-center gap-4">
//                     <h3 className="text-xl text-gray-500 line-through">${originalPrice}</h3>
//                     <h2 className="font-medium text-2xl">${price}</h2>
//                 </div>
//                 <div className="h-[2px] bg-gray-100" />

//                 <CustomizeProducts
//                     colors={uniqueColors}
//                     sizes={sizes}
//                     onColorChange={handleColorChange}
//                     onSizeChange={handleSizeChange}
//                     selectedColor={selectedColor}
//                 />
//                 <Add initialStock={stock} product_variation_id={product.variations.id} />

//                 <div className="h-[2px] bg-gray-100" />

//                 <div className="text-sm">
//                     <h4 className="font-bold mb-4">Highlights</h4>
//                     <ul className="list-disc ml-5">
//                         {
//                             product.short_description.split(/\r\n/g).map((line: string, index: number) => (
//                                 <li key={index}>{line}</li>
//                             ))
//                         }
//                     </ul>
//                 </div>

//                 <div className="text-sm">
//                     <h4 className="font-bold mb-4">Available offers</h4>
//                     <ul className="list-disc ml-5">
//                         {
//                             product.offer.map((offer: any, index: number) => (
//                                 <li key={offer.id}>
//                                     <span className="font-bold">
//                                         {offer.offer.split(" ").slice(0, 2).join(" ")}
//                                     </span>{" "}
//                                     {offer.offer.split(" ").slice(2).join(" ")}
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>

//                 <div className="text-sm">
//                     <h4 className="font-bold mb-4">Replacement</h4>
//                     <ul className="list-disc ml-5">
//                         {
//                             product.replacement.split(/\r\n/g).map((line: string, index: number) => (
//                                 <li key={index}>{line}</li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default SinglePage;