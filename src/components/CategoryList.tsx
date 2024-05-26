import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  return (
    <div className="flex gap-4 md:gap-8 overflow-x-scroll scrollbar-hide mt-8">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
};

export default CategoryList;
