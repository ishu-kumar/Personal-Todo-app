import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-gray-800 text-gray-100 flex flex-col gap-3 items-center justify-center">
      <h2 className="text-3xl text-gray-300 ">ERROR 404</h2>
      <h1 className="text-5xl text-red-400">Page not found!</h1>
      <p className="text-xl max-w-120 text-center text-gray-300">
        The page you're trying to access doesnt't exist or has been removed
      </p>
      <Link to={"/home"} className="bg-blue-500 px-8 py-2 rounded-md mt-8">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
