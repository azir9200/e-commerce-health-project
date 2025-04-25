import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  setAddress,
  setEmail,
  setName,
  setPassword,
} from "../../redux/features/RegisterSlice";
import { useSignUpMutation } from "../../redux/api/authApi/authApi";
import toast from "react-hot-toast";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, email, password, address } = useAppSelector(
    (state: RootState) => state.register
  );
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const register = await signUp({ name, email, password, address });
      console.log("user Register", register);
      toast.success("You are logged in successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred while logging in.");
    }
  };

  return (
    <div className="my-12 bg-blue-300">
      <h1 className="text-center text-4xl mb-5">
        Register <span className="text-blue-700">Now</span>
      </h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-blue-200 m-6 ">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1710081713~exp=1710085313~hmac=f637c194f1f143e63a84950cbf978997453777c872adf4aebbbecdaa445601a1&w=740"
            width={500}
            height={200}
            alt="login page"
            className="w-full h-[85%]"
          />
        </div>
        <div className="card w-[70%] h-[70%] shadow-xl bg-base-100">
          <form className="mb-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="Name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
              />
            </div>
            <div>
              <input
                placeholder="Email"
                type="text"
                id="email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
              />
            </div>

            <div>
              <input
                placeholder="Address"
                type="text"
                id="address"
                value={address}
                onChange={(e) => dispatch(setAddress(e.target.value))}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
              />
            </div>
            <div>
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-md"
                />
              </div>
            </div>
            <div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-accent btn-outline">
                  Register
                </button>
              </div>
              <p className="text-center">
                Already have an account?{" "}
                <Link className="text-accent" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
