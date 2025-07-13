const Banner = () => {
    return (
        <div className="w-full flex group light py-regular">
            <div className="tc-container ">
                <div className=" mx-auto lg:w-[600px] md:max-w-[800px]">
                    <h1 className="mx-auto !mb-4 text-center md:text-center">Quick &amp; Easy Temporary Vehicle Insurance</h1>
                    <div className="tc-subheading mt-0 mb-8 text-center lg:text-left ">Get affordable cover, unbelievably fast</div>
                    <div className="shadow-tc flex grow-0 flex-col rounded-[16px]   *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full md:mx-auto md:max-w-[440px] p-6 my-8">
                        <p className="text-dark-300 mb-4 tracking-[0.12px]">To get started simply enter your reg...</p>
                        <form action="">
                            <div>
                                <div className="mb-4">
                                    <label className="tc-label mb-1 block pl-[1px]" >Enter your Registration number</label>
                                    <div>
                                        <div className="mb-1 flex">
                                            {/* GB Label Box */}
                                            <div className="flex w-18 min-h-full items-center justify-center rounded-tl-lg rounded-bl-lg border border-dark-200 bg-neutral text-lg font-bold font-purista">
                                                GB
                                            </div>

                                            {/* Input Field */}
                                            <input
                                                id="reg"
                                                name="registration"
                                                type="text"
                                                placeholder=" "
                                                required
                                                minLength={2}
                                                maxLength={8}
                                                className="block w-full rounded-tr-lg rounded-br-lg border border-dark-200 py-3 pr-18 pl-3 text-center text-4xl uppercase outline-0 font-purista text-dark"

                                            />
                                        </div>
                                        <button type="button" aria-label="Enables you to select the type of vehicle, make, weight, model and variant" className="hover:text-secondary pl-[1px] text-sm font-bold underline">I don‘t know my reg yet</button>

                                    </div>


                                </div>
                                <fieldset className="mb-6">
                                    <legend className="mb-1 pl-[1px] text-base font-medium text-black">
                                        Can we guess how long you need cover for?
                                    </legend>

                                    <div className="flex gap-4">
                                        {/* 1 Day Option */}
                                        <label className="w-1/3 active-bg cursor-pointer rounded border border-primary-400 bg-neutral py-3 text-center text-sm text-[#A8A8A8] transition-colors hover:bg-secondary-300 focus-within:bg-secondary-300">
                                            <input
                                                type="radio"
                                                name="duration"
                                                value="1 day"
                                                defaultChecked
                                                className="sr-only"
                                            />
                                            1 day
                                        </label>

                                        {/* 2 Days Option */}
                                        <label className="w-1/3 cursor-pointer rounded border border-primary-400 bg-neutral py-3 text-center text-sm text-[#A8A8A8] transition-colors hover:bg-secondary-300 focus-within:bg-secondary-300">
                                            <input
                                                type="radio"
                                                name="duration"
                                                value="2 days"
                                                className="sr-only"
                                            />
                                            2 days
                                        </label>

                                        {/* 1 Week Option */}
                                        <label className="w-1/3 cursor-pointer rounded border border-primary-400 bg-neutral py-3 text-center text-sm text-[#A8A8A8] transition-colors hover:bg-secondary-300 focus-within:bg-secondary-300">
                                            <input
                                                type="radio"
                                                name="duration"
                                                value="1 week"
                                                className="sr-only"
                                            />
                                            1 week
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset className="mb-6">
                                    <legend className="mb-1 pl-[1px] text-base font-medium text-black">
                                        May be,choose your own duration
                                    </legend>

                                    <div className="flex gap-4">
                                        {/* 1 Day Option */}
                                        <label className="w-1/3  cursor-pointer rounded border border-primary-400 bg-neutral py-3 text-center text-sm text-[#A8A8A8] transition-colors hover:bg-secondary-300 focus-within:bg-secondary-300">
                                            <input
                                                type="radio"
                                                name="duration"
                                                value="1 day"
                                                defaultChecked
                                                className="sr-only"
                                            />
                                            Hours
                                        </label>

                                        {/* 2 Days Option */}
                                        <label className="w-1/3 cursor-pointer rounded border border-primary-400 bg-neutral py-3 text-center text-sm text-[#A8A8A8] transition-colors hover:bg-secondary-300 focus-within:bg-secondary-300">
                                            <input
                                                type="radio"
                                                name="duration"
                                                value="2 days"
                                                className="sr-only"
                                            />
                                            Days
                                        </label>

                                        {/* 1 Week Option */}
                                        <label className="w-1/3 cursor-pointer rounded border border-primary-400 bg-neutral py-3 text-center text-sm text-[#A8A8A8] transition-colors hover:bg-secondary-300 focus-within:bg-secondary-300">
                                            <input
                                                type="radio"
                                                name="duration"
                                                value="1 week"
                                                className="sr-only"
                                            />
                                            Weeks
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <button type="submit" className="tc-submit-button">Continue</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Banner;