const CoverDuration = () => {
    const coverDurationData = [
        {
            heading: "Full cover, no impact",
            content: "Get fully comprehensive cover on our standard short term policies - plus it won't affect your no claims discount"
        },
        {
            heading: "Hourly, daily, weekly",
            content: "Choose the duration you want with 1-12 hour and 1-28 day cover available - don't pay for cover you don't need"
        }
        ,
        {
            heading: "All customised, nothing added",
            content: "Customise your policy to suit your specific situation - get the policy you want and even choose the minute you want your policy to begin"
        }
    ]
    return (
        <div className="w-full py-regular">
            <div className="tc-container">
                <div className="lg:w-2/3 w-full">
                    <span className="builder-text css-1qggkls">
                        <h2>The cover you need for the duration you want</h2>
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
                    {
                        coverDurationData.map((e, index) =>
                        (
                            <div key={index} className="shadow-tc flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full">
                                <blockquote className="flex flex-col items-center justify-center gap-2 text-center">


                                    <p className="text-[var(--color-dark-300)] font-bold">{e.heading}</p>

                                    <p className="text-[var(--color-dark-200)] mt-2">
                                        {e.content}
                                    </p>

                                </blockquote>

                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}
export default CoverDuration;
