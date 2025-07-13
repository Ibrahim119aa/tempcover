const InsurancrCalculator = () => {
    return (
        <div className="w-full">
            <div className="tc-container">
                <h2>Temporary van insurance calculator</h2>
                <p className="my-6">It could not be simpler get a short term insurance policy. You can buy a policy online anytime you need it, and with our straightforward quote process, you can get a price in under 2 minutes!</p>
                <div
                    role="presentation"
                    className="flex grow-0 flex-col h-auto max-w-[900px] rounded-lg border border-background-400 bg-neutral p-4 md:p-6 shadow group-[.dark]:border-secondary-400 group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral"
                >
                    <div className="flex flex-1 flex-col items-center md:flex-row md:gap-6">
                        {/* Left Side - Form */}
                        <div className="mb-4 w-full md:mb-0 md:w-1/2">
                            <div className="mb-6 flex w-full items-center gap-4">
                                <span className="min-w-12 w-12 h-12 rounded-[8px] flex group-[.dark]:text-dark-200 group-[.dark]:bg-neutral items-center justify-center text-neutral tc-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-calculator"
                                        aria-hidden="true"
                                    >
                                        <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                        <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                                        <path d="M8 14l0 .01" />
                                        <path d="M12 14l0 .01" />
                                        <path d="M16 14l0 .01" />
                                        <path d="M8 17l0 .01" />
                                        <path d="M12 17l0 .01" />
                                        <path d="M16 17l0 .01" />
                                    </svg>
                                </span>
                                <h3 id="calculator_title" className="text-lg font-semibold">
                                    Get your price estimate
                                </h3>
                            </div>

                            <fieldset className="mb-6 flex gap-2 md:gap-4">
                                <legend className="mb-4 text-lg">Please select a duration below</legend>

                                {["1 Hour", "1 Day", "1 Week"].map((label, i) => (
                                    <label
                                        key={i}
                                        className={`${i == 1 ? 'active-bg' : ''} inline-block w-1/3 rounded border border-primary-400 bg-neutral py-3 text-center text-sm text-[#A8A8A8] transition-all hover:bg-secondary focus:bg-secondary ${label === "1 Day" ? "ring-2 ring-primary-400" : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="calculator_cost"
                                            className="hidden"
                                            defaultChecked={label === "1 Day"}
                                        />
                                        {label}
                                    </label>
                                ))}
                            </fieldset>

                            <p className="mb-2">It could not be simpler get a short term insurance policy.</p>
                            <p className="mb-0 pb-0">
                                You can buy a policy online anytime you need it, and with our straightforward quote
                                process, you can get a price in under 2 minutes!
                            </p>
                        </div>

                        {/* Right Side - Price Display */}
                        <div className="w-full rounded-xl bg-background-200 p-4 shadow-[inset_0_1px_3px_theme('colors.neutral.100')] md:w-1/2">
                            <h3 className="mt-0 mb-7 text-xl font-heading">The price for your selected duration is from:</h3>
                            <p className="font-title mb-9 text-5xl  font-extrabold">just £42.8</p>
                            <p className="mb-4 text-sm">
                                Prices based on the average price 19,765 policies for the displayed durations (January
                                2023)
                            </p>
                            <a href="https://www.tempcover.com/start-quote" target="_self" className="inline-block rounded-[8px] border-1 text-center font-bold transition-all pt-[12px] pb-[10px] px-7 md:px-15 w-full max-w-[400px] text-[20px] md:text-[24px] font-black bg-primary border-primary-400 hover:shadow-xl hover:shadow-primary/20 active:bg-primary-400 text-[white] active:shadow-none group-[.dark]:bg-primary group-[.dark]:text-white group-[.dark]:border-0 ">Get your quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InsurancrCalculator;