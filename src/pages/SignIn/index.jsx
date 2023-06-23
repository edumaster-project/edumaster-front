import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="login">
        <NavigationBar />
      <main className="w-1/4  h-fit rounded-xl bg-gray-600 p-10 flex-col gap-3 items-center justify-center">
        <div className="text-white">
          <h1 className="text-4xl mt-10 font-bold">Login</h1>
          <h3 className="mt-3">Let’s get started!</h3>
        </div>
        <form className="mt-8 flex flex-col gap-8">
          <input
            className="w-full h-10 rounded-3xl px-5"
            placeholder="Email"
          ></input>
          <input
            className="w-full h-10 rounded-3xl px-5"
            placeholder="Password"
          ></input>
          <button className="bg-gray-400 h-10 rounded-3xl text-white font-bold hover:bg-gray-500">
            Sign Up
          </button>
        </form>
        <h2
          className="text-white text-lg my-12 text-center cursor-pointer"
          onClick={() => navigate("/sign-up")}
        >
          Create Account
        </h2>
      </main>
    </div>
  );
}
