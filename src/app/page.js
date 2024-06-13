import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import CategoryList from "../components/CategoryList";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div className="">
      {/* Hero Section */}

      <Slider />

      {/* Featured Products section */}

      <section className="mt-24 px-4 md:px-8 ls:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-12">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID}
            limit={4}
          />
        </Suspense>
      </section>

      {/* Categories section */}

      <section className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 ls:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={"loading"}>
          <CategoryList />
        </Suspense>
      </section>

      {/* New Products section */}

      <section className="mt-24 px-4 md:px-8 ls:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-12">New Products</h1>
        <ProductList
          categoryId={process.env.NEW_PRODUCTS_CATEGORY_ID}
          limit={4}
        />
      </section>
    </div>
  );
};

export default HomePage;
