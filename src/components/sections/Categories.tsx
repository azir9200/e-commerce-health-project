/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllCategoryQuery } from "../../redux/api/categoryApi/categoryApi";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

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
  const categories = data?.data;
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category: any) => (
            <Card
              key={category.id}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden"
            >
              <CardContent className="p-0">
                <div
                  className={`bg-gradient-to-br ${category.color} p-8 text-center`}
                >
                  <div className="text-5xl mb-4">
                    <img
                      src="https://imagizer.imageshack.com/img924/4629/XZAq25.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="text-sm text-primary font-semibold mb-4">
                    {category.productCount} Products
                  </div>
                  <Button
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
