import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Facebook, Instagram, Twitter } from "lucide-react";
import toast from "react-hot-toast";
import NewsLetter from "../home/NewsLetter";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast.success(
      "Your message has been sent. We'll respond as soon as possible. Thank you!"
    );
    form.reset();
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center md:mt-0 mt-16 justify-center py-10 px-4 bg-white">
        <h1 className="text-4xl font-bold mb-8 text-gradient">Contact Us</h1>

        <Card className="max-w-4xl w-full shadow-xl border border-gray-200 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-purple-500 to-[#2453DF] p-8 rounded-l-lg text-white">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-2xl font-semibold mb-2">
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-white/90 text-base">
                  Have questions or want to reach out? We'd love to hear from
                  you!
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Address:</h3>
                  <p className="opacity-90">
                    123 Fitness Street, Lisbon, Portugal
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Phone:</h3>
                  <p className="opacity-90">+351 123 456 789</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Email:</h3>
                  <p className="opacity-90">info@fitgear.com</p>
                </div>

                <div className="pt-4">
                  <p className="mb-4 font-medium">Connect with us:</p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </div>

            {/* Contact Form */}
            <div className="p-8">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you soon
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Your Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your Message"
                              className="resize-none"
                              {...field}
                              rows={4}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-[#2453DF] text-white hover:from-purple-600 hover:to-[#2453DF]"
                    >
                      Submit
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Contact;
