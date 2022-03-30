import React from "react";
import { motion } from "framer-motion";

const container = {
   hidden: {
      opacity: 0,
      y: -75,
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         delay: 0.3,
         duration: 0.75,
      },
   },
};

const image = {
   hidden: { opacity: 0 },
   visible: { opacity: 1, transition: { delay: 0.65, duration: 0.75 } },
};

const svgVariants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
}

const lineDividerVariants = {
   hidden: { opacity: 0, pathLength: 0},
   visible: {
      opacity: 1,
      pathLength: 1,
      transition: {delay: 1, duration: 1.5}
   }
}

const redLine1Variants = {
   hidden: { opacity: 0, pathLength: 0},
   visible: {
      opacity: 1,
      pathLength: 1,
      transition: {delay: 2.5, duration: 1.5}
   }
}

const redLine2Variants = {
   hidden: { opacity: 0, pathLength: 0},
   visible: {
      opacity: 1,
      pathLength: 1,
      transition: {delay: 4.5, duration: 1.5}
   }
}

const bullet1 = {
   hidden: { opacity: 0},
   visible: {
      opacity: 1,
      transition: {delay: 1.5, duration: 1.5}
   }
}
const bullet2 = {
   hidden: { opacity: 0},
   visible: {
      opacity: 1,
      transition: {delay: 3.5, duration: 1.5}
   }
}
const bullet3 = {
   hidden: { opacity: 0},
   visible: {
      opacity: 1,
      transition: {delay: 5.5, duration: 1.5}
   }
}

const LandingPage = () => {
   return (
      <div className="min-h-screen flex flex-col space-y-5 md:space-y-10 items-center justify-center">
         <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex items-center flex-col space-y-1.5 md:space-y-3"
         >
            <h1 className="title text-center text-4xl md:text-5xl text-fuchsia-800/90">
               Multiplayer Tic Tac Toe
            </h1>
            <p className="desc text-base md:text-xl text-black/75">
               Simple game to play with your friends
            </p>
         </motion.div>
         <motion.div 
            variants={image}
            initial="hidden"
            animate="visible" 
            className="max-w-xs">
            <motion.svg variants={svgVariants} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
               <motion.path variants={lineDividerVariants} d="M166 40.9313V460" stroke="#9E9C9C" stroke-width="10" stroke-linecap="round"/>
               <motion.path variants={lineDividerVariants} d="M333 40V459.069" stroke="#9E9C9C" stroke-width="10" stroke-linecap="round"/>
               <motion.path variants={lineDividerVariants} d="M40.9575 334H460" stroke="#9E9C9C" stroke-width="10" stroke-linecap="round"/>
               <motion.path variants={lineDividerVariants} d="M40 167H459.042" stroke="#9E9C9C" stroke-width="10" stroke-linecap="round"/>
               <motion.circle variants={bullet2} cx="250" cy="250" r="40" fill="#3C7EFF"/>
               <motion.circle variants={bullet1} cx="91" cy="91" r="40" fill="#3C7EFF"/>
               <motion.circle variants={bullet3} cx="410" cy="410" r="40" fill="#3C7EFF"/>
               <motion.path variants={redLine1Variants} d="M385 224L435 275" stroke="#F84343" stroke-width="10" stroke-linecap="round"/>
               <motion.path variants={redLine1Variants} d="M435 225L384 275" stroke="#F84343" stroke-width="10" stroke-linecap="round"/>
               <motion.path variants={redLine2Variants} d="M67 384L117 435" stroke="#F84343" stroke-width="10" stroke-linecap="round"/>
               <motion.path variants={redLine2Variants} d="M117 385L66 435" stroke="#F84343" stroke-width="10" stroke-linecap="round"/>
            </motion.svg>
         </motion.div>
         <motion.a
            variants={image}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 1.15 }}
            href="/"
            className="py-2 px-8 relative group text-base md:text-lg rounded-lg desc text-zinc-100 tracking-wide font-medium bg-fuchsia-700 hover:bg-fuchsia-800"
         >
            Play Now
         </motion.a>
      </div>
   );
};

export default LandingPage;
