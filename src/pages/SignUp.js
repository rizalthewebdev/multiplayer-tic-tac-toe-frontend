import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const container ={
   hidden: {
      opacity: 0,
      x: '100vw'
   },
   visible: {
      opacity: 1,
      x: '0',
      transition: {
         delay: 0.1,
         duration: 1,
         type: 'spring',
         stiffness: 90
      }
   },
   exit: {
      x: '-100vw',
      transition: {
         ease: 'easeInOut',
         duration: 1
      }
   }
}

const SignUp = () => {
   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const addData = () => {
      console.log(name, username, password);
   };

   return (
      <motion.div 
         variants={container} 
         initial="hidden" 
         animate="visible" 
         exit="exit" 
         className="min-h-screen mx-auto flex md:px-20 items-center justify-center"
      >
         <div className="w-72 md:w-80 lg:w-96 flex flex-col gap-10 items-center justify-center">
            <h2 className="title title-section">Sign Up</h2>
            <form className="flex w-full flex-col items-center justify-center gap-8">
               <Input
                  name="name"
                  type="text"
                  label="Name"
                  value={name}
                  setValue={setName}
               />
               <Input
                  name="username"
                  type="text"
                  label="Username"
                  value={username}
                  setValue={setUsername}
               />
               <Input
                  name="password"
                  type="password"
                  label="Password"
                  value={password}
                  setValue={setPassword}
                  password
               />
            </form>
            <button onClick={addData}>
               <Button Icon={RiSendPlaneFill} text="Submit" />
            </button>

            <p className="desc text-gray-600">
               Already have account ?{" "}
               <Link
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                  to="/sign-in"
               >
                  Sign In
               </Link>
            </p>
         </div>
      </motion.div>
   );
};

export default SignUp;
