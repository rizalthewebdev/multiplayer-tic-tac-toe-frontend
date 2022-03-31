import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage, SignIn, SignUp } from "./pages";
import { AnimatePresence } from "framer-motion";

const App = () => {

   const location = useLocation()

   return (
      <>
         <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key} >
               <Route path="/" element={<LandingPage />}/>
               <Route path="sign-in" element={<SignIn />}/>
               <Route path="sign-up" element={<SignUp />}/>
            </Routes>
         </AnimatePresence>
      </>
   );
};

export default App;
