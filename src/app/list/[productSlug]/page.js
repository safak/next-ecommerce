import { notFound } from "next/navigation";
import { wixClientServer } from "../../../lib/wixCllientServer";
import ProductImages from "../../../components/ProductImages";
import ProductsVariants from "../../../components/ProductsVariants";
import SelectQuantityAndAddToCart from "../../../components/SelectQuantityAndAddToCart";

const ProductPage = async ({ params }) => {
  const wixClient = await wixClientServer();

  let product = [];

  try {
    product = await wixClient.products
      .queryProducts()
      .eq("slug", params.productSlug)
      .find();

    if (!product.items[0]) {
      return notFound();
    }
  } catch (e) {
    return <div>Error fetching product detailled</div>;
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}

      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages images={product.items[0]?.media} />
      </div>

      {/* TEXTS */}

      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.items[0].name}</h1>
        <p className="text-gray-500">{product.items[0].description}</p>
        <div className="h-[2px] bg-gray-100" />
        {product.items[0].price?.price ===
        product.items[0].price?.discountedPrice ? (
          <h2 className="text-2xl font-medium">
            ${product.items[0].price?.discountedPrice}
          </h2>
        ) : (
          <div className="flex gap-4 items-center">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.items[0].price?.price}
            </h3>
            <h2 className="text-2xl font-medium">
              ${product.items[0].price?.discountedPrice}
            </h2>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />
        {product.items[0]?.variants && product.items[0]?.productOptions ? (
          <ProductsVariants
            productId={product.items[0]._id}
            variants={product.items[0].variants}
            productOptions={product.items[0].productOptions}
          />
        ) : (
          <SelectQuantityAndAddToCart
            productId={product.items[0]._id}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.items[0].stock?.quantity || 0}
          />
        )}

        <div className="h-[2px] bg-gray-100" />

        {product?.items[0]?.additionalInfoSections.map((additionalInfo) => {
          return (
            <div className="text-sm" key={additionalInfo.title}>
              <h4 className="text-md font-semibold mb-4">
                {additionalInfo.title}
              </h4>
              <p className="">{additionalInfo.description}</p>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
