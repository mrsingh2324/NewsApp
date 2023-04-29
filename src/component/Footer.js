import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 bottom-0 h-[70px] text-gray-300 py-4 text-center flex items-center flex-col gap-3 justify-center">
      <p className="text-sm">
        News App &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
      <p>
        By : Satyam Singh
      </p>
    </div>
  );
};

export default Footer;
