import { Card, CardContent } from "../ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    rating: 5,
    text: "FitGear Store transformed my home gym! The quality is outstanding and the customer service is exceptional. Highly recommend to anyone serious about fitness.",
    avatar: "👩",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Personal Trainer",
    rating: 5,
    text: "As a personal trainer, I recommend FitGear Store to all my clients. Their equipment is professional-grade and the prices are unbeatable.",
    avatar: "👨",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Yoga Instructor",
    rating: 5,
    text: "The yoga mats and accessories I purchased exceeded my expectations. Perfect quality for both beginners and advanced practitioners.",
    avatar: "👩‍🦰",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CrossFit Athlete",
    rating: 5,
    text: "Incredible selection of CrossFit equipment. Fast shipping and everything arrived in perfect condition. Will definitely order again!",
    avatar: "👨‍🦲",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied
            customers have to say about FitGear Store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 relative"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary mb-3">
                      {testimonial.role}
                    </p>
                  </div>
                  <Quote className="w-6 h-6 text-muted-foreground/30 flex-shrink-0" />
                </div>

                <blockquote className="text-muted-foreground italic mt-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2,847</div>
              <div className="text-sm text-muted-foreground">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
