import { Card, CardContent } from "../ui/card";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image: "https://i.ibb.co/XZRQcpND/still-life-yoga-equipment.jpg",
    caption:
      "Morning workout session with our new dumbbell set! #FitGearStore #MorningMotivation",
    likes: 234,
    comments: 18,
    user: "@fitgear_official",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co/MKHdVnn/exhausted-athlete-wiping-sweat-with-towel-after-sports-training-gym.jpg",
    caption:
      "Find your zen with our premium yoga collection. Perfect for both beginners and pros! #YogaLife",
    likes: 189,
    comments: 12,
    user: "@fitgear_official",
  },
  {
    id: 3,
    image: "https://i.ibb.co/tPNby1Cv/young-woman-doing-fitness-sportswear.jpg",
    caption:
      "Cardio day just got better with our latest equipment arrivals! Who's ready to sweat? #CardioDay",
    likes: 156,
    comments: 8,
    user: "@fitgear_official",
  },
];

export function InstagramFeed() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Below our fitness community on Instagram for daily motivation,
            workout tips, and the latest product updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {post.user}
                    </span>
                    <Instagram className="w-4 h-4 text-muted-foreground" />
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.caption}
                  </p>

                  <div className="flex items-center space-x-4 pt-2">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-muted-foreground">
                        {post.likes}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-8">
          <Button size="lg" variant="outline" className="group">
            <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Follow @fitgear_official
          </Button>
        </div> */}
      </div>
    </section>
  );
}
