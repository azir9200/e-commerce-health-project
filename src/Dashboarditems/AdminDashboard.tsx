import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Package,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import Navbar from "../components/Navbar";

// Mock data for charts
const salesData = [
  { month: "Jan", sales: 4000, orders: 120 },
  { month: "Feb", sales: 3000, orders: 98 },
  { month: "Mar", sales: 5000, orders: 150 },
  { month: "Apr", sales: 4500, orders: 135 },
  { month: "May", sales: 6000, orders: 180 },
  { month: "Jun", sales: 5500, orders: 165 },
];

const categoryData = [
  { name: "Weight Training", value: 35, color: "#8884d8" },
  { name: "Cardio Equipment", value: 25, color: "#82ca9d" },
  { name: "Yoga & Pilates", value: 20, color: "#ffc658" },
  { name: "Accessories", value: 15, color: "#ff7300" },
  { name: "Supplements", value: 5, color: "#00ff00" },
];

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    product: "Dumbbells Set",
    amount: 299.99,
    status: "Completed",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    product: "Yoga Mat",
    amount: 49.99,
    status: "Processing",
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    product: "Resistance Bands",
    amount: 39.99,
    status: "Shipped",
  },
  {
    id: "ORD-004",
    customer: "Sarah Wilson",
    product: "Fitness Tracker",
    amount: 199.99,
    status: "Completed",
  },
  {
    id: "ORD-005",
    customer: "Tom Brown",
    product: "Adjustable Bench",
    amount: 189.99,
    status: "Processing",
  },
];

const topProducts = [
  { name: "Adjustable Dumbbells", sales: 245, revenue: 73475 },
  { name: "Premium Yoga Mat", sales: 189, revenue: 9450 },
  { name: "Resistance Bands Kit", sales: 156, revenue: 6240 },
  { name: "Smart Fitness Tracker", sales: 134, revenue: 26800 },
  { name: "Olympic Barbell Set", sales: 98, revenue: 58800 },
];

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$174,765",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Total Orders",
      value: "848",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+15.3%",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Products Sold",
      value: "1,234",
      change: "+5.7%",
      icon: Package,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-2 rounded-full bg-muted ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                  <span className="text-sm text-green-600 font-medium">
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">
                    from last month
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Sales by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    // label={({ name: any, value: any }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tables Section */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList>
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
            <TabsTrigger value="products">Top Products</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">
                            {order.customer}
                          </p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{order.product}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">${order.amount}</p>
                      </div>
                      <div>
                        <Badge
                          variant={
                            order.status === "Completed"
                              ? "default"
                              : order.status === "Processing"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Orders
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {product.sales} units sold
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          ${product.revenue.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">Revenue</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Products
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* <Footer /> */}
    </div>
  );
};
export default AdminDashboard;
