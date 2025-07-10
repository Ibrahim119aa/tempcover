
import { motion, AnimatePresence } from "framer-motion";

const ImpoundOption = () => {
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

                            <a
                                className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                href="https://www.tempcover.com/temporary-Van-insurance"
                                role="menuitem"
                            >
                                Impound
                            </a>
                        </span>

                        {/* Van insurance links */}
                        {[
                            ["Impound Car Insurance", "https://www.tempcover.com/temporary-Van-insurance/one-day"],
                            ["Impound Van Insurance", "https://www.tempcover.com/temporary-Van-insurance/one-day"],

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
                </div>
            </motion.span>
        </AnimatePresence>
    )
}
export default ImpoundOption;