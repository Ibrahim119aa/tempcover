"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode | null;
}

interface FAQData {
  heading: string;
  faq: FAQItem[];
}

type Props = {
  data: FAQData;
};

const FAQ = ({ data }: Props) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="w-full flex group light py-regular">
      <div className="tc-container">
        <h2 className="md:text-center max-w-none">{data.heading}</h2>

        <div className="flex p-4 flex-col gap-3 py-5 mx-auto max-w-md">
          {data.faq.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              {openItem === index ? (
                <div className="shadow-tc flex grow-0 flex-col rounded-[16px] border p-4 md:p-6 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full hover:shadow-primary/10 hover:border-primary transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                    <button
                      onClick={() => toggleItem(index)}
                      className="flex-shrink-0 p-1 hover:bg-gray-200 rounded"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  {item.answer}
                </div>
              ) : (
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                    <Plus className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
