/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/api/authApi/authApi";
import { setEmail, setPassword } from "../../redux/features/loginSlice";
import { setUser } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { verifyToken } from "../../redux/utils";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const toastId = "Loading....";
  const location = useLocation();
  const redirectTo = (location.state as any)?.from || "/";

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await login({ email, password }).unwrap();

      const user = verifyToken(result.data);
      dispatch(setUser({ user: user, token: result.data }));

      if (result.success && result.data) {
        navigate(redirectTo);
        toast.success("Successfully logged in!", { id: toastId });
      } else {
        toast.error("Invalid email or password");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      toast.error(`Error: ${err?.data?.message || err.message}`, {
        id: toastId,
      });
    }
  };

  // Function to pre-fill login credentials
  const handleDefaultLogin = (type: "user" | "admin") => {
    if (type === "user") {
      dispatch(setEmail("user1@gmail.com"));
      dispatch(setPassword("123456"));
    } else {
      dispatch(setEmail("admin1@gmail.com"));
      dispatch(setPassword("123456"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-blue-200 p-4">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome to Fit-Gear
          </h2>

          {/* Default Login Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => handleDefaultLogin("user")}
              className="bg-gradient-to-r from-slate-500 via-blue-900 to-slate-500 
             hover:from-blue-700 hover:via-blue-500 hover:to-blue900 
             text-white py-2 px-4 rounded-lg transition duration-300"
            >
              {" "}
              Login as User
            </button>
            <button
              onClick={() => handleDefaultLogin("admin")}
              className="bg-gradient-to-r from-slate-500 via-blue-900 to-slate-500 
             hover:from-red-700 hover:via-red-800 hover:to-red-700 
             text-white py-2 px-4 rounded-lg transition duration-300"
            >
              Login as Admin
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between flex-grow w-full"
          >
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
                required
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border border-gray-300 mb-2 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <div
                className="absolute right-0 flex items-center pr-3 cursor-pointer inset-y-12"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className="text-gray-500" />
                ) : (
                  <FaEyeSlash className="text-gray-500" />
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-slate-500 via-blue-900 to-slate-500 hover:bg-slate-700 text-white py-4 rounded-lg font-semibold transition duration-300"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          {/* Bottom Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="block text-center px-6 py-3 text-blue-600 border border-blue-600 rounded-tl-lg rounded-br-lg hover:bg-blue-50"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
