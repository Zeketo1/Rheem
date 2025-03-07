import React, { useState } from "react";
import { faqItems } from "../utils/constant";
import FAQItem from "../utils/FAQItem";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="grid grid-cols-2 justify-between my-20 px-20">
      <div className="flex flex-col h-full justify-center">
        <h1 className="mb-4 text-[22px] font-bitter font-semibold">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="mb-5 text-[14px]">
          Need help? Here are answers to common questions about our air <br />
          conditioners, delivery, warranty, installation, payments, and more. We{" "}
          <br />
          ensure a seamless shopping experience with reliable products and{" "}
          <br />
          services. If you have any other queries, feel free to contact us!
        </p>
        <button className="relative w-fit text-[14px] bg-primary py-2 px-8 rounded-full text-white">
          Shop now
        </button>
      </div>
      <section id="faqs" className="w-full h-full px-4 md:px-0">
        <div className="space-y-4">
          {faqItems.map((faq, i) => (
            <FAQItem
              key={i}
              isOpen={i === openIndex}
              onClick={() => toggleFAQ(i)}
              question={faq.word}
              answer={faq.description}
              Icon={faq.Icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
