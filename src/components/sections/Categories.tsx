/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllCategoryQuery } from "../../redux/api/categoryApi/categoryApi";
import CategoryCard from "../category/CategoryCard";
import ProductCardSkeleton from "../Skeleton/ProductCartSkeleton";

// const categories = [
//   {
//     id: 1,
//     name: "Weight Training",
//     description: "Dumbbells, barbells, weight plates and more",
//     image: (
//       <img
//         src="https://imagizer.imageshack.com/img924/4629/XZAq25.jpg"
//         alt=""
//       />
//     ),
//     productCount: 150,
//     color: "from-primary/20 to-primary/10",
//   },
//   {
//     id: 2,
//     name: "Cardio Equipment",
//     description: "Treadmills, bikes, ellipticals for cardio workouts",
//     image: (
//       <img
//         src="https://imagizer.imageshack.com/img924/4629/XZAq25.jpg"
//         alt=""
//       />
//     ),
//     productCount: 89,
//     color: "from-accent/20 to-accent/10",
//   },
//   {
//     id: 3,
//     name: "Yoga & Pilates",
//     description: "Mats, blocks, straps and yoga accessories",
//     image: (
//       <img
//         src="https://imagizer.imageshack.com/img924/4629/XZAq25.jpg"
//         alt=""
//       />
//     ),
//     productCount: 76,
//     color: "from-secondary/20 to-secondary/10",
//   },
//   {
//     id: 4,
//     name: "Fitness Accessories",
//     description: "Gloves, belts, straps and workout gear",
//     image: (
//       <img
//         src="https://imagizer.imageshack.com/img924/4629/XZAq25.jpg"
//         alt=""
//       />
//     ),
//     productCount: 234,
//     color: "from-muted/20 to-muted/10",
//   },
//   {
//     id: 5,
//     name: "Supplements",
//     description: "Protein powders, vitamins and nutrition",
//     image: (
//       <img
//         src="https://imagizer.imageshack.com/img924/4629/XZAq25.jpg"
//         alt=""
//       />
//     ),
//     productCount: 128,
//     color: "from-primary/20 to-primary/10",
//   },
//   {
//     id: 6,
//     name: "Apparel",
//     description: "Workout clothes, shoes and fitness wear",
//     image: (
//       <img
//         src="https://imagizer.imageshack.com/img924/4629/XZAq25.jpg"
//         alt=""
//       />
//     ),
//     productCount: 312,
//     color: "from-accent/20 to-accent/10",
//   },
// ];

export function Categories() {
  const { data, isLoading } = useGetAllCategoryQuery(null);
  const categories = data?.data?.data;
  console.log("category", categories);
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find everything you need for your fitness journey in our carefully
            organized categories.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : Array.isArray(categories) &&
              categories
                .slice(0, 4)
                .map((category: any) => (
                  <CategoryCard key={category._id} category={category} />
                ))}
        </div>
      </div>
    </section>
  );
}
