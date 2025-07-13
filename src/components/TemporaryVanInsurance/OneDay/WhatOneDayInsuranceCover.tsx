import React from "react";
const InsuranceCover = React.lazy(() => import("@/components/Card/InsuranceCover"));

const WhatOneDayInsuranceCover = () => {
    const data = [
        {
            heading: "What’s covered with daily van insurance",
            svg: (<svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-check"
            >
                <path d="M5 12l5 5l10 -10" />
            </svg>),
            list: [
                "Fully comprehensive insurance on policies from 1 hour to 28 days",
                "Accidental and malicious damage to your van",
                "Loss or damage to your van caused by fire, theft, or attempted theft",
                "Legal liabilities for injury or damage to another person or their property",
                "Personal belongings (definitions may differ by insurer)",
                "Driving in the UK",
                "In some instances driving in the EU with the third-party or equivariant level"
            ]
        },
        {
            heading: "What's optional with daily van insurance",
            svg: (<svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-plus"
                aria-hidden="true"
            >
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
            </svg>),
            list: [
                "Excess Reduction Cover, reducing your policy excess to as close as £100 as possible",

            ]
        },
        {
            heading: "What's not covered with daily van insurance",
            svg: (<svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-x"
                aria-hidden="true"
            >
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </svg>),
            list: [
                "The excess you agreed to pay",
                "Release from an impound (unless you buy a specific temporary impounded van policy)",
                "Additional drivers – we can only cover the driver named on the policy",
                "Cover for the loss or damage to a vehicle, trailer, trailer-caravan or broken-down vehicle when being towed by the insured van",
                "A sole claim or separate cover for broken/damaged glass including the windscreen",


            ]
        },

    ]
    return (
        <div className="w-full flex">
            <div className="tc-container">
                <h2>What does one-day van insurance cover?</h2>
                <p>With comprehensive cover as standard on one-day van insurance from Tempcover, you’re covered for any damage to yourself, your van and any third parties involved in an accident.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-regular my-4">
                    {
                        data.map((e,i) =>
                        (
                            <InsuranceCover key={i} data={e} />
                        ))
                    }
                </div>
                <br />
               <div >
                 <p >Tempcover works with a panel of insurers to ensure that we can provide temporary van insurance for as many drivers as possible. Because of this, full details of cover may differ depending on the insurer. Please double-check the policy wording before buying, to confirm what your policy specifically covers.</p>
               </div>
            </div>
        </div>
    )
}
export default WhatOneDayInsuranceCover;