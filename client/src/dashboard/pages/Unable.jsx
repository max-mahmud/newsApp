import React from "react";

const Unable = () => {
  let message = "You do not have the required role to access this page. Please contact support.";

  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-red-400 ">Unable to Access</h1>
        <p className="text-gray-700 font-bold ">{message}</p>
      </div>
    </div>
  );
};

export default Unable;
