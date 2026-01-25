/* eslint-disable @typescript-eslint/no-explicit-any */
import { Check, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import ProductDetailsSkeleton from "../../AllSkeleton/ProductDetailsSkeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import {
  useGetAllProductQuery,
  useGetProductDetailsQuery,
} from "../../redux/api/productApi/ProductApi";
import ProductDetails from "./ProductDetails";
import ProductSlider from "./ProductSlider";
import ProductCard from "../product/ProductCard";
const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetProductDetailsQuery(id ?? "", {
    skip: !id,
  });

  const { data: product } = useGetAllProductQuery({
    category: "",
    priceRange: "",
    search: "",
    inStock: "",
  });
  const products = product?.data?.filter(
    (item: any) => item.category === data?.data?.category,
  );
  const features = [
    "Rear-Engine Layout",
    "Sport Chrono Package",
    "PASM",
    "Sport Exhaust",
  ];
  const specifications = {
    Engine: "3.0L Twin-Turbo I6",
    Horsepower: "335 HP",
    Torque: "330 lb-ft",
    "Top Speed": "155 mph",
    Acceleration: "5.3 seconds (0-60mph)",
  };
  const reviews = [
    {
      id: "1",
      userId: "1",
      userName: "John Smith",
      rating: 5,
      comment: "Excellent SUV with amazing performance!",
      date: "2024-01-15",
    },
  ];
  if (isLoading) return <ProductDetailsSkeleton />;

  return (
    <div className="min-h-screen bg-background mt-16">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground transition-colors">
            Home
          </a>
          <span>/</span>
          <a
            href="/product-page"
            className="hover:text-foreground transition-colors"
          >
            Products
          </a>
          <span>/</span>
          <span className="text-foreground">{data?.data?.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Images */}
          <div className="order-2 lg:order-1">
            <ProductSlider image={data?.data?.image} />
          </div>

          {/* Product Details */}
          <div className="order-1 lg:order-2">
            <ProductDetails productDetails={data?.data} />
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-12">
              <TabsTrigger value="description" className="text-sm">
                Description
              </TabsTrigger>
              <TabsTrigger value="specifications" className="text-sm">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="features" className="text-sm">
                Features
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-sm">
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card className="border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    About {data?.data?.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {data?.data?.description}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card className="border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Technical Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-3 px-4 bg-secondary/30 rounded-lg"
                      >
                        <span className="font-medium text-foreground">
                          {key}:
                        </span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <Card className="border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-lg"
                      >
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card className="border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  {reviews?.length > 0 ? (
                    <div className="space-y-6">
                      {reviews.map((review: any) => (
                        <div
                          key={review.id}
                          className="border-b border-border/50 pb-6 last:border-b-0"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <span className="font-semibold text-foreground">
                                {review.userName}
                              </span>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {review.date}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4">
                        <Star className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        No reviews yet
                      </h3>
                      <p className="text-muted-foreground">
                        Be the first to review this product!
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              You Might Also Like
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover more products from our collection that you might be
              interested in.
            </p>
          </div>

          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {products?.slice(0, 6).map((product: any) => (
                <CarouselItem
                  key={product._id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-card shadow-card hover:bg-card/80 border-border/50 -left-12" />
            <CarouselNext className="hidden md:flex bg-card shadow-card hover:bg-card/80 border-border/50 -right-12" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
