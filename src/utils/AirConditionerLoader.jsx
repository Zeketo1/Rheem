import React from "react";
import { motion } from "framer-motion";

const AirConditionerLoader = () => {
  return (
    <div className="fixed z-[100] h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#F0F4F8] to-[#E0EAEF]">
      {/* Air Conditioner Unit */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <div className="w-[200px] h-[120px] bg-primary rounded-lg flex items-center justify-center relative">
          {/* Fan Blades */}
          <motion.div
            className="w-[80px] h-[80px] rounded-full bg-gray-600 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[60px] h-[10px] bg-[#F5C8C9] rounded-full"
                style={{
                  transform: `rotate(${i * 120}deg) translateX(30px)`,
                }}
              />
            ))}
          </motion.div>

          {/* Cooling Air Effect */}
          <motion.div
            className="absolute bottom-[-20px] w-full h-[40px] bg-gradient-to-t from-blue-100 to-transparent rounded-b-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Air Flow */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[20px] h-[20px] bg-white rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 180 + 10}px`,
                  bottom: `${Math.random() * 20}px`,
                }}
                animate={{
                  y: [0, -40],
                  opacity: [0.3, 0],
                }}
                transition={{
                  duration: Math.random() * 1 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.h2
        className="text-2xl font-bold text-gray-700 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Cooling Your Space
      </motion.h2>

      <motion.p
        className="text-gray-500 text-center max-w-[280px] mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Adjusting the temperature for your comfort
      </motion.p>

      {/* Dots Animation */}
      <motion.div
        className="flex space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#F5C8C9] to-primary"
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AirConditionerLoader;