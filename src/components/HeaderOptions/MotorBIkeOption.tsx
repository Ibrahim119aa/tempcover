
import { motion, AnimatePresence } from "framer-motion";

const MotorBikeOption = () => {
    return (
        <AnimatePresence>
            <motion.span
                id="Van"
                role="menu"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-neutral absolute inset-0 z-30 mt-[1px] transform  pb-16 transition-all duration-300 ease-in-out 
          md:right-0 md:left-0 lg:top-full lg:right-0 lg:bottom-auto lg:left-0 lg:transform-none lg:p-2 lg:transition-none
          pointer-events-auto w-full lg:w-full"
            >
                <div className="tc-container bg-neutral flex w-full flex-col items-start justify-start gap-4 py-4 pb-16 text-left lg:flex-row lg:py-8">
                    {/* Mobile back button */}
                    <button
                        className="mb-4 -ml-2 flex items-center text-[16px] font-medium lg:hidden"
                        role="menuitem"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="tabler-icon tabler-icon-chevron-left"
                        >
                            <path d="M15 6l-6 6l6 6"></path>
                        </svg>
                        Back to main menu
                    </button>

                    {/* Left column */}
                    <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                        <span className="-mt-[2px] mr-2 flex items-center justify-center text-dark">
                            
                        </span>

                        <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">

<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-[18px] h-[18px]"
                                name="Motorbike"
                            >
                                <path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
                                <path d="M13 6h2l1.5 3l2 4" />
                            </svg>
                            <a
                                className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                href="https://www.tempcover.com/temporary-Van-insurance"
                                role="menuitem"
                            >
                                Temporary Motorbike Insurance
                            </a>
                        </span>

                        {/* Van insurance links */}
                        {[
                            ["Learner Motorbike  Insurance", "https://www.tempcover.com/temporary-Van-insurance/one-day"],


                        ].map(([label, link], i) => (
                            <a
                                key={i}
                                className="hover:text-primary text-dark-200 w-full py-2 font-medium underline-offset-8 hover:font-semibold hover:underline"
                                href={link}
                                role="menuitem"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                    <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                        <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                            <span className="stroke-black -mt-[2px] mr-2 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 19"
                                    width="18"
                                    height="18"
                                    className="stroke-dark"
                                    name="Guide"

                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        fill="none"
                                        d="M5 5.5h10m-10 4h10m-10 4h10M1 3.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z"
                                    />
                                </svg>
                            </span>
                            <a
                                className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                href="https://www.tempcover.com/frontcover"
                                role="menuitem"
                            >
                                Helpful Guides / FAQS
                            </a>
                        </span>

                        {/* Helpful guide links */}
                        {[
                            ["What is AskMID?", "https://www.tempcover.com/front-cover/insurance/can-i-drive-someone-elses-car-on-my-insurance"],
                            ["How to check if my car is insured?", "https://www.tempcover.com/front-cover/insurance/can-you-tax-a-car-with-temporary-insurance"],
                            ["How to cancel my policy?", "https://www.tempcover.com/front-cover/driving-advice/can-you-insure-a-sorn-car"],
                            ["Why can't I get a quote", "https://www.tempcover.com/temporary-car-insurance/new-drivers"],
                            ["What to do when my car breaks down?", "https://www.tempcover.com/temporary-car-insurance/additional-drivers"],

                        ].map(([label, link], i) => (
                            <a
                                key={i}
                                className="hover:text-primary text-dark-200 w-full py-2 font-medium  underline-offset-8 hover:font-semibold hover:underline"
                                href={link}
                                role="menuitem"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.span>
        </AnimatePresence>
    )
}
export default MotorBikeOption;