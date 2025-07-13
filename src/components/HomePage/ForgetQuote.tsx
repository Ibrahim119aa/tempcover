const ForgetQuote = () => {
    const forequoteData = [
        {
            heading: "No difficult questions",
            content: "We've removed the difficult questions most insurance providers ask, so getting a quote is quick and easy. You can see your cheapest insurance quote in under 2 minutes"
        },
        {
            heading: "Quick quote comparison",
            content: "We do the comparison work to find your cheapest quote. We’ll compare quotes from our panel of insurers in seconds and show you the best price."
        }
        ,
        {
            heading: "Mobile, tablet, desktop & app",
            content: "Get quick and easy quotes online 24/7 on mobile, tablet, desktop and psst...it's even quicker on the tempcover.com app!"
        }
    ]
    return (
        <div className="w-full py-regular bg-[#59214d]">
            <div className="tc-container">
                <div className="w-full lg:w-2/3">
                    <span className="builder-text css-1qggkls">
                        <h2 className="!text-white">Forget long quotes. Get a <br /> price in under 2 minutes.</h2>
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-4 gap-4">
                    {
                        forequoteData.map((e, index) =>
                        (
                            <div key={index} className="bg-[#824578] shadow-tc flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6   border-[#59214d] h-full">
                                <blockquote className="flex flex-col items-center justify-center gap-2 text-center">


                                    <p className="text-white font-medium">{e.heading}</p>

                                    <p className="text-white mt-2">
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
export default ForgetQuote;
