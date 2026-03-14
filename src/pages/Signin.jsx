import React from "react";

function Signin() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 flex-col">
      
      <div className="bg-linear-to-b from-red-600 to-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-6 relative bottom-25 md:top-0">

        <h1 className="text-3xl font-bold text-center">
          Sign In
        </h1>

        <form className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="border border-black p-3 rounded-lg focus:outline-none focus:border-white text-black"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="border border-black p-3 rounded-lg focus:outline-none focus:border-white"
          />

          <button
            type="submit"
            className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            Sign In
          </button>

        </form>

        <p className="text-center text-sm">
          Don't have an account? 
          <span className="text-red-500 cursor-pointer ml-1">
            Sign Up
          </span>
        </p>

      </div>

<div className="  relative top-10 "><img src="/images/air.png" alt="" className="w-auto h-auto md:w-20 md:h-20 object-contain"/></div>

    </main>
  );
}

export default Signin;