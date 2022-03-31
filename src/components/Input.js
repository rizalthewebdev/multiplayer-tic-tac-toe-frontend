import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Input = ({ name, type, label, setValue, value, password }) => {
   const [shown, setShown] = useState(type);

   const shownPassword = (e) => {
      e.preventDefault();
      if (shown === "password") {
         setShown("text");
      } else {
         setShown("password");
      }
   };
   return (
      <div className="relative w-full">
         <input
            type={shown}
            name={name}
            className={`peer desc input ${value.length && 'ring-fuchsia-700'}`}
            placeholder="Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
         {password &&
            (shown === "password" ? (
               <button
                  className="shown-password"
                  onClick={shownPassword}
                  title="Show Password"
               >
                  <AiFillEye />
               </button>
            ) : (
               <button
                  className="shown-password text-purple-600"
                  onClick={shownPassword}
                  title="Hide Password"
               >
                  <AiFillEyeInvisible />
               </button>
            ))}
         <label
            htmlFor={name}
            className="label-input"
         >
            {label}
         </label>
      </div>
   );
};

export default Input;
