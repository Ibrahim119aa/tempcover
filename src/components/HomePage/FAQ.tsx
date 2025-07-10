"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const FAQ = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const faqItems = [
        {
            question: "How does short-term vehicle insurance work?",
            answer: (
                <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                        Short-term vehicle insurance gives you fully comprehensive cover for a set period. It is available hourly,
                        daily, weekly or monthly, so you have a choice of durations that could suit your needs.
                    </p>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="leading-relaxed">
                                <strong>Cost:</strong> The amount you pay for your cover depends on the duration, along with other
                                factors such as the cars mileage and make. When you begin the quote process with us, you will be given
                                an estimate of how much your temp insurance will cost based on the information you provide.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="leading-relaxed">
                                <strong>Timing:</strong> You can tell us when you need your cover to begin. With short-term insurance,
                                we understand that you might need to arrange a policy at the last minute, so you can get a quote under 2
                                minutes.
                            </span>
                        </li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed">
                        Begin the quote process now and follow the steps to arrange your insurance policy.
                    </p>
                </div>
            ),
        },
        {
            question: "How quickly can I get temporary insurance?",
            answer: null,
        },
        {
            question: "Am I eligible for temporary insurance?",

        },
    ];

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <div className="w-full flex group light py-regular">
            <div className="tc-container">
                <h2 className="md:text-center max-w-none">Frequently asked questions</h2>
                <div className="flex p-4 flex-col gap-3 py-5 mx-auto max-w-md">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            {openItem === index ? (
                                <div className="shadow-tc   flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6   group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full hover:shadow-primary/10 hover:border-primary transition-all cursor-pointer">

                                    <div className="flex items-start  justify-between mb-4">
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
