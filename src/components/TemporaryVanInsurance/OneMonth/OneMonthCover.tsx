import React from "react";
const CoverCard = React.lazy(() => import("@/components/Card/CoverCard"));

const OneMonthCover = () => {
    const onemonthcovercard = [
        {
            heading: "Full cover, no impact",
            content: "Get fully comprehensive cover on our standard short term policies - plus it won't affect your no claims discount"
        },
        {
            heading: "Hourly, daily, weekly",
            content: "Choose the duration you want with 1-12 hour and 1-28 day cover available - don't pay for cover you don't need"
        },
        {
            heading: "All customised, nothing added",
            content: "Customise your policy to suit your specific situation - get the policy you want and even choose the minute you want your policy to begin"
        },
    ]
    return (
        <div className="w-full flex">
            <div className="tc-container">
                <h2 className="lg:max-w-2/3 w-full lg:text-[35px]">The cover you need for the duration you want</h2>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-regular">
                    {
                        onemonthcovercard.map((e, i) =>
                        (
                            <CoverCard data={e} key={i} />
                        ))
                    }
                </div>

                <div className="flex justify-center my-3">
                    <div className="builder-block builder-a150fbbd106d4430b55d2c1d8cef195b builder-has-component">
                        <a
                            href="/start-quote"
                            target="_self"
                            className="inline-block rounded-[8px] border border-primary-400 text-center font-bold transition-all py-4 px-[20px] w-full max-w-[250px] text-[18px] bg-primary text-white hover:shadow-xl hover:shadow-primary/20 active:bg-primary-400 active:shadow-none group-[.dark]:bg-primary group-[.dark]:text-white group-[.dark]:border-0"
                        >
                            Get a quote
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OneMonthCover;