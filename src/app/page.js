import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import CategoryList from "../components/CategoryList";

const HomePage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <Slider />
      {/* Featured Products section */}
      <section className="mt-24 px-4 md:px-8 ls:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-12">Featured Products</h1>
        <ProductList />
      </section>
      {/* Categories section */}
      <section className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 ls:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </section>
      {/* New Products section */}
      <section className="mt-24 px-4 md:px-8 ls:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-12">New Products</h1>
        <ProductList />
      </section>
    </div>
  );
};

export default HomePage;
