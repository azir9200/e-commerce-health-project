
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../../components/ui/table";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartSummaryProps {
  items: CartItem[];
}

const CartSummary = ({ items }: CartSummaryProps) => {
  return (
    <div className="space-y-6">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead>Product</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4">
        <h4 className="font-medium mb-2 text-sm">Additional Instructions</h4>
        <textarea 
          className="w-full h-24 p-3 border rounded-md resize-none text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="Special instructions for your order (optional)"
        />
      </div>
    </div>
  );
};

export default CartSummary;