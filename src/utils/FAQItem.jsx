import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
const FAQItem = ({ question, answer, Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFAQ = () => setIsOpen(!isOpen);

  return (
    <div
      onClick={toggleFAQ}
      className={`relative rounded-lg border w-full px-4 cursor-pointer transition-all duration-200 `}
    >
      {isOpen && (
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.2 }}
          className={`-top-px absolute transition-all duration-1000 inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent shadow-2xl mx-auto w-1/2 h-px`}
        />
      )}
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          <Icon className="text-xl" />
          <span>{question}</span>
        </div>
        <LiaAngleRightSolid
          className={`${isOpen && "rotate-90"} transtion-all duration-500`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-3 font-la text-sm">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
