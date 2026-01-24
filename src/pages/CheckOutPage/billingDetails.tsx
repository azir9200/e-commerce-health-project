import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { selectCurrentUser } from "../../redux/features/userSlice";
import { useAppSelector } from "../../redux/hooks";

const BillingDetails = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
        <h3 className="text-base font-semibold">Contact Information</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              placeholder="John"
              defaultValue={user?.firstName || "John"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              id="last-name"
              placeholder="Doe"
              defaultValue={user?.lastName || "Doe"}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              defaultValue={user?.email || "john.doe@example.com"}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              defaultValue="+880 1640011818"
            />
          </div>
        </div>
      </div>

      <Separator />

      <div className="grid gap-4">
        <h3 className="text-base font-semibold">Shipping Address</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Street Address</Label>
            <Input
              id="address"
              placeholder="123 Main St"
              defaultValue={user?.address || "123 Main St"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="San Francisco"
              defaultValue={user?.city || "Dublin, Ireland"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State/Province</Label>
            <Input
              id="state"
              placeholder="California"
              defaultValue={user?.state || "Leinster"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">ZIP/Postal Code</Label>
            <Input id="zip" placeholder="94105" defaultValue="94105" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              placeholder="Ireland"
              defaultValue={user?.country || "Ireland"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
