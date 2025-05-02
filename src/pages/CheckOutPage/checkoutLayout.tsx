
import { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

interface CheckoutLayoutProps {
  children: ReactNode;
}

const CheckoutLayout = ({ children }: CheckoutLayoutProps) => {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="">
          <h1 className="text-3xl font-bold text-center">Secure Checkout</h1>
          <div className="flex items-center justify-center mt-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 mr-1" />
            <span>All transactions are secure and encrypted</span>
          </div>
        </div>
      </header>
      <main className=" max-w-7xl mx-auto  py-10 px-4">{children}</main>
      <footer className="border-t mt-12">
        <div className="mx-auto max-w-7xl py-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Your Company. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            <ShieldCheck className="h-4 w-4 mr-1" />
            Secure payment processing provided by Stripe
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutLayout;