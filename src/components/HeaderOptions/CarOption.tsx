
import { motion, AnimatePresence } from "framer-motion";

const CarOption = () => {
    return (
        <AnimatePresence>
            <motion.span
                id="Car"
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
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-car"
                                >
                                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                                </svg>
                            </span>
                            <a
                                className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                href="https://www.tempcover.com/temporary-car-insurance"
                                role="menuitem"
                            >
                                Temporary Car Insurance
                            </a>
                        </span>

                        {/* Car insurance links */}
                        {[
                            ["One Day Car Insurance", "https://www.tempcover.com/temporary-car-insurance/one-day"],
                            ["Monthly Car Insurance", "https://www.tempcover.com/temporary-car-insurance/one-month"],
                            ["Weekly Car Insurance", "https://www.tempcover.com/temporary-car-insurance/weekly"],
                            ["Hourly Car Insurance", "https://www.tempcover.com/temporary-car-insurance/hourly"],
                            ["Temporary Business Car Insurance", "https://www.tempcover.com/temporary-business-car-insurance"],
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
                            ["Can I drive someone else's car on my insurance?", "https://www.tempcover.com/front-cover/insurance/can-i-drive-someone-elses-car-on-my-insurance"],
                            ["Can I tax a car with temporary insurance?", "https://www.tempcover.com/front-cover/insurance/can-you-tax-a-car-with-temporary-insurance"],
                            ["Can I insure a SORN car?", "https://www.tempcover.com/front-cover/driving-advice/can-you-insure-a-sorn-car"],
                            ["Temporary car insurance for new drivers", "https://www.tempcover.com/temporary-car-insurance/new-drivers"],
                            ["Temporary car insurance for additional drivers", "https://www.tempcover.com/temporary-car-insurance/additional-drivers"],
                            ["Temporary car insurance for convicted drivers", "https://www.tempcover.com/temporary-car-insurance/convicted-drivers"],
                            ["Driving licence types", "https://www.tempcover.com/temporary-car-insurance/driving-licence-types"],
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
export default CarOption;