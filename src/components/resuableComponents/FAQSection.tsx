import { useState } from "react";
import faq1 from "../../assets/faq.png";

const faqs = [
  {
    question: "How Do I Start Earning On BastaFans?",
    answer:
      "After Creating An BastaFans Account, You’ll Need To Upload Your Identification And Banking Information For Review. Once Your Identity Has Been Verified, You Can Begin Creating Paid Content And Promote Your Profile.",
  },
  {
    question: "How Can I Use BastaFans As A Creator?",
    answer:
      "You can use BastaFans by signing up as a creator and uploading content to earn from subscriptions, tips, and PPV messages.",
  },
  {
    question: "How Can I Make Money On BastaFans?",
    answer:
      "You can monetize through subscriptions, tips, pay-per-view content, and paid messages to fans.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white mb:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-6 px-4 ">
        {/* Accordion */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold mb-10 text-center md:text-left">
            FAQ
          </h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 ${
                openIndex === index ? "bg-[#009BFF]" : "bg-[#2A2D44]"
              } cursor-pointer`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold flex justify-between items-center">
                {faq.question}
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h3>
              {openIndex === index && (
                <p className="mt-2 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex justify-center items-center mb-8 md:mb-0">
          <img
            src={faq1}
            alt="FAQ Visual"
            className="rounded-xl w-full max-w-[800px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
