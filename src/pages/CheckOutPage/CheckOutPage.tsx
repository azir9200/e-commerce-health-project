import { Check, ShieldCheck } from "lucide-react";
import { useState } from "react";
import img1 from "../../../src/assets/assets/Screenshot_2025-05-02_210353-removebg-preview.png";
import img2 from "../../../src/assets/assets/Screenshot_2025-05-02_210518-removebg-preview.png";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { useOrderCreateMutation } from "../../redux/api/orderApi/orderApi";
import { useAppSelector } from "../../redux/hooks";
import CartSummary from "./CartSummary";
import BillingDetails from "./billingDetails";
import CheckoutLayout from "./checkoutLayout";

const Checkout = () => {
  const [OrderCreate] = useOrderCreateMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { products, totalPrice, tax, taxRate, grandTotal } = useAppSelector(
    (store) => store.cart
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const billingData = {
        firstName: (document.getElementById("first-name") as HTMLInputElement)
          .value,
        lastName: (document.getElementById("last-name") as HTMLInputElement)
          .value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phone: (document.getElementById("phone") as HTMLInputElement).value,
        address: (document.getElementById("address") as HTMLInputElement).value,
        city: (document.getElementById("city") as HTMLInputElement).value,
        state: (document.getElementById("state") as HTMLInputElement).value,
        zip: (document.getElementById("zip") as HTMLInputElement).value,
        country: (document.getElementById("country") as HTMLInputElement).value,
      };

      const orderPayload = {
        products,
        billingData,
        totalAmount: Number(total.toFixed(2)),
      };
      const res = await OrderCreate(orderPayload);

      if (res?.data.data) {
        window.location.href = res.data.data;
        setIsSubmitting(false);
      } else {
        console.error("Payment URL not found in response.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.log(err);
      setIsSubmitting(false);
    }

    // Simulate API call
  };

  const shipping = 5.99;
  const total = grandTotal + shipping;

  return (
    <CheckoutLayout>
      <div className="mt-8 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left side - Order details and summary */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="justify-center items-center">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="flex items-center">
                  <span className="mr-2">Order Summary</span>
                  <Badge variant="outline" className="ml-2 bg-primary/10">
                    {products.length} item{products.length !== 1 ? "s" : ""}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Review your items before proceeding to payment
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <CartSummary items={products} />
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle>Billing Details</CardTitle>
                <CardDescription>
                  Please provide your billing information
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <BillingDetails />
              </CardContent>
            </Card>
          </div>

          {/* Right side - Payment summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 shadow-md">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle>Payment Summary</CardTitle>
                <CardDescription>Secure payment via Stripe</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Tax ({(taxRate * 100).toFixed(0)}%):
                    </span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex items-center justify-between font-medium">
                    <span>Total</span>
                    <span className="text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-3 text-sm flex items-center">
                  <ShieldCheck className="h-4 w-4 mr-2 text-green-500" />
                  <span>Your payment information is secure</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="card-number" className="text-center block">
                      Available Payment
                    </Label>
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={img1}
                        className="w-60 object-contain"
                        alt="Bkash"
                      />
                      <img
                        src={img2}
                        className="w-60 object-contain"
                        alt="Google Pay"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        Processing <span className="animate-spin">...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Pay ${total.toFixed(2)} <Check className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>

                <div className="text-xs text-center text-muted-foreground pt-2">
                  By clicking "Pay" you agree to our Terms of Service and
                  Privacy Policy
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default Checkout;
