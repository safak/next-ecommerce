/* eslint-disable react/no-unescaped-entities */
import BannerList from "@/components/BannerList";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";

const ListPage = () => {
  return (
    <>
      <BannerList />
      <Filter />
      <h1 className="mt-12 mb-8 text-xl font-semibold ">Nos Bayas</h1>
      <ProductList />
    </>
  );
};

export default ListPage;
