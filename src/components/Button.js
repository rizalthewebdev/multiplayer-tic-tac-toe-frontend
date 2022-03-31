import React from "react";

const Button = ({ Icon, text }) => {
   return (
      <div
         className="relative desc inline-flex items-center justify-center p-4 px-9 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-fuchsia-800 rounded-full shadow-md group"
      >
         <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-fuchsia-800 group-hover:translate-x-0 ease">
            <Icon className="text-2xl" />
         </span>
         <span className="absolute flex items-center justify-center w-full h-full text-fuchsia-800 transition-all duration-300 transform group-hover:translate-x-full ease">
            {text}
         </span>
         <span className="relative invisible">{text}</span>
      </div>
   );
};

export default Button;
