import { useState } from "react";
import avatar from "../../../assets/Dashboard/user.png";
import img8 from "../../../assets/Dashboard/check-out.png";
import img5 from "../../../assets/Dashboard/reward.png";
import img6 from "../../../assets/Dashboard/gross (1).png";
import { Input } from "../../../components/ui/input";
import { Skeleton } from "../../../components/ui/skeleton";
import { useGetMeQuery } from "../../../redux/api/getMeApi/getMeApi";
import { useGetProductDetailsQuery } from "../../../redux/api/productApi/ProductApi";

import { Button } from "../../../components/ui/button";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { data: user, isLoading } = useGetMeQuery(undefined);

  const { id } = useParams<{ id: string }>();
  const { data } = useGetProductDetailsQuery(id ?? "", { skip: !id });

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="m-6 space-y-4">
      {isLoading ? (
        <Skeleton className="h-40 w-full" />
      ) : (
        <div className="flex flex-col shadow-md  md:flex-row justify-between items-center border border-slate-200 p-5  rounded-2xl relative">
          <div className="flex flex-col md:flex-row gap-5 items-center relative">
            <div className="h-28 w-28 relative">
              <img
                alt="profile image"
                src={user?.data?.photo || avatar}
                className="rounded-full h-full w-full object-cover object-center"
              />
            </div>
            <div className="text-center md:text-start  ">
              <p className=" uppercase font-semibold">{user?.data?.role}</p>
              <p className=" uppercase">{user?.data?.name}</p>
              <p>{user?.data?.email}</p>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
            <img src={img6} alt="hello" className="h-16 w-16"></img>
            <div>
              <h3 className="text-2xl text-blue-600 font-bold  dark:text-white">
                45000৳
              </h3>
              <p className="text-gray-600 dark:text-gray-400"> Total Amount</p>
            </div>
          </li>
          <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
            <img src={img5} alt="hello" className="h-16 w-16"></img>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                20
              </h3>
              <p className="text-gray-600 dark:text-gray-400"> Total Point</p>
            </div>
          </li>
          <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
            <img src={img8} alt="hello" className="h-16 w-16"></img>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {data?.data?.length}
              </h3>
              <p className="text-gray-600 dark:text-gray-400"> Total Order</p>
            </div>
          </li>
        </div>
      </div>
      <div className="border p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Change Password</h2>
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

          <Button>Change Password</Button>
          {/* <Button
           onClick={handleChangePassword} className="w-full">
            Change Password
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
