import ProductCategory from "./ProductCategory";

const Category = () => {
  return (
    <div className="mt-[40px] w-[100%] flex items-center justify-center">
      <div className=" w-[95%]">
        <div>
          <h3 className="text-[40px]">Category</h3>
          <ProductCategory />
        </div>
      </div>
    </div>
  );
};

export default Category;