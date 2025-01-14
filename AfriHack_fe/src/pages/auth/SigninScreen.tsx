import img from "../../assets/pexels-pixabay-50987.jpg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const Login = () => {
  // const navigate = useNavigate();

  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };

  const model = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    const { email, password } = data;
    console.log(email, password);

    // registerUser({userName, email, password }).then(() => {
    //     navigate("/login");
    //   });
  });

  return (
    <div
      className="h-[100vh] w-full object-cover flex justify-center items-center "
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        WebkitBackgroundSize: "cover",
      }}
    >
      <form
        className="min-h-[300px] w-[500px] mx-5 rounded-[15px] bg-black opacity-[0.9] p-8 flex  flex-col relative"
        onSubmit={onSubmit}
      >
        <div className="text-white text-center font-bold text-[20px]">
          Login
        </div>
        <div className="m-2">
          <div className="text-white font-bold">Email</div>
          <input
            placeholder="Enter your mail address"
            className="w-full h-[40px] outline-none  bg-transparent border-b-2 border-[grey] text-white"
            {...register("email")}
          />
          {errors.email?.message && (
            <div className="text-white flex justify-end text-[13px]">
              Provide a valid email address
            </div>
          )}
        </div>
        <div className="m-2">
          <div className="text-white font-bold">Password</div>
          <div
            className="absolute hover:cursor-pointer transition-all duration-300 hover:scale-110 text-white right-5"
            onClick={() => {
              onEye();
            }}
          >
            {!eye ? (
              <FaEye className="text-2xl" />
            ) : (
              <FaEyeSlash className="text-2xl" />
            )}
          </div>
          <input
            placeholder="Enter a secret"
            type={`${eye ? "text" : "password"}`}
            className="w-full h-[40px] outline-none  bg-transparent border-b-2 border-[grey] text-white"
            {...register("password")}
          />
          {errors.password?.message && (
            <div className="text-white flex justify-end text-[13px]">
              Input your password
            </div>
          )}
        </div>
        <div className="flex justify-center items-center mt-3 flex-col text-white">
          <button
            className="bg-green-600 w-[95%] h-[40px] rounded-[20px] text-black text-[20px] font-semibold"
            type="submit"
          >
            Login
          </button>
          <div className="text-[13px] mt-2">
            Don't have an Account ?{" "}
            <Link to="/auth/register">
              <span className="text-[green] font-bold hover:underline hover:cursor-pointer hover:text-white">
                Register
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
