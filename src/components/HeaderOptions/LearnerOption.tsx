
import { motion, AnimatePresence } from "framer-motion";

const LearnerOption = () => {
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
                        <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                            <span className="stroke-dark -mt-[2px] mr-2 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 33 32"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    name="Learner"
                                    className="w-[18px] h-[18px] text-current"
                                >
                                    <path d="M5.66669 7.99998C5.66669 7.29274 5.94764 6.61446 6.44774 6.11436C6.94783 5.61426 7.62611 5.33331 8.33335 5.33331H24.3334C25.0406 5.33331 25.7189 5.61426 26.219 6.11436C26.7191 6.61446 27 7.29274 27 7.99998V24C27 24.7072 26.7191 25.3855 26.219 25.8856C25.7189 26.3857 25.0406 26.6666 24.3334 26.6666H8.33335C7.62611 26.6666 6.94783 26.3857 6.44774 25.8856C5.94764 25.3855 5.66669 24.7072 5.66669 24V7.99998Z" />
                                    <path d="M11.3334 10V21H21.3334" />
                                </svg>


                            </span>
                            <a
                                className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                href="https://www.tempcover.com/temporary-Van-insurance"
                                role="menuitem"
                            >
                                Learn Car Insurance
                            </a>
                        </span>

                        {/* Van insurance links */}
                        {[
                            ["One Day Learner Insurance", "https://www.tempcover.com/temporary-Van-insurance/one-day"],
                           
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

                    {/* Right column */}
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
                                Helpful Guides
                            </a>
                        </span>

                        {/* Helpful guide links */}
                        {[
                            ["Quickest way to learn to drive", "https://www.tempcover.com/front-cover/insurance/can-i-drive-someone-elses-Van-on-my-insurance"],
                            ["Learning to drive with family or friend", "https://www.tempcover.com/front-cover/insurance/can-you-tax-a-Van-with-temporary-insurance"],
                            ["Learner driver rules", "https://www.tempcover.com/front-cover/driving-advice/can-you-insure-a-sorn-Van"],
                            

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
export default LearnerOption;