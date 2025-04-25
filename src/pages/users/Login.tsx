import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setEmail, setPassword } from "../../redux/features/loginSlice";
import { useLoginMutation } from "../../redux/api/authApi/authApi";
import toast from "react-hot-toast";
import { setUser } from "../../redux/features/userSlice";
import { verifyToken } from "../../redux/utils";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, email, password } = useAppSelector(
    (state: RootState) => state.login
  );

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await login({ name, email, password }).unwrap();
      console.log("result login", result);

      const user = verifyToken(result.data.accessToken);
      console.log("user", user);
      dispatch(setUser({ user: user, token: result.data.accessToken }));

      if (result.success && result.data?.accessToken) {
        toast.success(
          <div className="justify-center items-center text-white text-3xl p-22  bg-gradient-to-r from-sky-700 to-yellow-600">
            {" "}
            Your login is successfully!{" "}
          </div>
        );
        navigate("/");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred while logging in.");
    }
  };
  return (
    <div className="my-10">
      <div className="pt-20 border border-red-800">
        <h1 className="text-center text-4xl mb-5 border border-red-500">
          Login <span className="text-accent">Here</span>
        </h1>
        <div className="grid lg:grid-cols-2  gap-4">
          <div>
            <img
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
              width={500}
              height={200}
              alt="login page"
              className="w-full h-[85%]"
            />
          </div>
          <div className="card w-[70%] h-[80%] shadow-xl bg-base-100">
            <form className="my-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent btn-outline">
                  Login
                </button>
              </div>
              <p className="text-center">
                Don&apos;t have an account?{" "}
                <Link className="text-accent" to="/register">
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
