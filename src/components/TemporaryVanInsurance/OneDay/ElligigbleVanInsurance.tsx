import React from "react";
const InsuranceCover = React.lazy(() => import("@/components/Card/InsuranceCover"));

const ElligibleVanInsurance = () => {
    const data = [
        {
            heading: "To get daily van insurance, you must:",
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
                className="tabler-icon tabler-icon-user"
                aria-hidden="true"
            >
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>),
            list: [
                "Be aged 17-77 years old.",
                "Hold a full UK or EU driving licence with no more than 7 points in the last 3 years.",
                "Have been a permanent UK resident for the last 12 months or be a British expatriate.",
                "Have no criminal convictions.",
                "Not had a previous policy of insurance declared void by an insurer.",

            ]
        },
        {
            heading: "To get daily van insurance, your van must:",
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
                className="tabler-icon tabler-icon-truck"
                aria-hidden="true"
            >
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
            </svg>),
            list: [
                "Be valued between £1,500 and £65,000.",
                "Be taxed and in a roadworthy condition with a valid MOT.",
                "Have no modifications other than the addition of the manufacturer’s optional extras (signage, roof racks, ply lining, interior storage) or those designed to aid disabled drivers.",
                "Be a right-hand drive car with no more than 5 seats.",
                "Not weigh more than 7.5 tonnes.",

            ]
        },


    ]
    return (
        <div className="w-full flex">
            <div className="tc-container">
                <h2>Am I eligible for daily van insurance?</h2>
                <p>One-day van insurance is available to a range of van drivers thanks to our panel of insurers. Despite our wide acceptance criteria, there are some minimum requirements which you must meet to be eligible for a policy.</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-regular my-4">
                    {
                        data.map((e,i) =>
                        (
                            <InsuranceCover key={i} data={e} />
                        ))
                    }
                </div>
                
                <div className="my-2">
                    <p >Each insurer on our panel has its own eligibility criteria. Please pay close attention to their Proposer’s Declaration.</p>
                </div>
            </div>
        </div>
    )
}
export default ElligibleVanInsurance;