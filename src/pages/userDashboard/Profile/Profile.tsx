import { useState } from "react";
import avatar from "../../../assets/Dashboard/user.png";
import img8 from "../../../assets/Dashboard/check-out.png";
import img5 from "../../../assets/Dashboard/reward.png";
import img6 from "../../../assets/Dashboard/gross (1).png";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Skeleton } from "../../../components/ui/skeleton";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/userSlice";
import StatCard from "./StatCard";

const Profile = () => {
  const user = useAppSelector(selectCurrentUser);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (!user) {
    return <Skeleton className="h-40 w-full" />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* ================= PROFILE HEADER ================= */}
      <div className="space-y-2">
        <p className="text-sm text-gray-500">
          Manage your personal information and account settings
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-md border">
          <img
            src={user.photo || avatar}
            alt="Profile"
            className="h-28 w-28 rounded-full object-cover border"
          />

          <div className="text-center md:text-left space-y-1">
            <h2 className="text-2xl font-bold">Welcome back, {user.name} 👋</h2>

            <p className="text-gray-600">{user.email}</p>

            <span
              className="inline-block mt-2 px-3 py-1 text-xs font-semibold uppercase
                       rounded-full bg-blue-50 text-blue-600"
            >
              {user.role}
            </span>
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard icon={img6} value="45000৳" label="Total Spent" />
        <StatCard icon={img5} value="20" label="Reward Points" />
        <StatCard icon={img8} value="12" label="Total Orders" />
      </div>

      {/* ================= SECURITY ================= */}
      <div className="bg-white border rounded-2xl shadow-md p-6 max-w-xl">
        <h3 className="text-xl font-semibold mb-4">Change Password</h3>

        <div className="space-y-4">
          <Input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            className="w-full"
            disabled={
              !oldPassword || !newPassword || newPassword !== confirmPassword
            }
          >
            Change Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
