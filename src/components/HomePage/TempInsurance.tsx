const TempInsurance = () => {

    const tempinsuranceData = [
        {
            svg: (<svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill=""
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-check"
                aria-hidden="true"
            >
                <path d="M5 12l5 5l10 -10"></path>
            </svg>),
            heading: "What's covered with short term car insurance?",
            list: [
                "Fully comprehensive insurance (excluding impounded) on policies from 1 hour to 28 days  ",
                "Accidental and malicious damage to your car  ",
                "Cover for injury or damage to another person or their property  ",
                "Driving in the UK",
                "In some instances driving in the EU with the third-party or equivalent level"
            ]
        },
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-plus " aria-hidden="true"><path d="M12 5l0 14"></path><path d="M5 12l14 0"></path></svg>),
            heading: "What's optional with short term car insurance?",
            list: [
                "Legal Expenses Cover providing up to £100,000 cover for legal costs including uninsured loss recovery for accidents that are not your fault ",
                "Excess Reduction Cover, reducing your policy excess to as close as £100 as possible"
            ]
        },
        {
            svg: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x " aria-hidden="true"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>),
            heading: "What's not included with short term insurance?",
            list: [
                "The excess you agreed to pay",
                "Release from an impound (unless you buy a specific temporary impounded vehicle policy)",
                "Additional drivers – we can only cover the driver named on the policy",
                "A sole claim or separate cover for broken/damaged glass including the windscreen"
            ]
        }
    ]
    return (
        <div className="w-full">
            <div className="mx-auto py-5 tc-container">
                <div className="">
                    <h2 className="lg:w-[40%] w-full mt-0 mb-6 ">What does temporary insurance cover?</h2>
                    <p>With comprehensive cover as standard on&nbsp;temporary car insurance&nbsp;(excluding impounded), you’re covered for any damage to yourself, your car and/or any third parties involved in an accident.</p>
                </div>
                <div className="grid my-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {
                        tempinsuranceData.map((e, i) =>
                        (
                            <div key={i} className="shadow-tc flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full ">
                                <div className="gap-regular flex w-full items-center *:m-0 *:last:grow">
                                    <span className="min-w-12 w-12 h-12 rounded-[8px] flex group-[.dark]:text-dark-200 group-[.dark]:bg-neutral items-center justify-center text-neutral tc-icon">
                                        {e.svg}
                                    </span>

                                    <h3 className="text-dark-400 text-[18px] font-semibold">{e.heading}</h3>


                                </div>
                                <div className="lg:gap-regular flex flex-1 my-2 flex-col lg:flex-row">
                                    <div className="tc-richtext min-h-32 grow py-2">
                                        <ul >
                                            {
                                                e.list.map((v, index) =>
                                                (
                                                    <li key={index}>{v}</li>

                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
        </div >
    )
}
export default TempInsurance;
