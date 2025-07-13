import React from "react";
const BenefitsVan = React.lazy(() => import("@/components/Card/BenefitsVan"));

const OneDayVanInsurance = () => {
    const onedayvan = [
        {
            heading: "It's cost-effective",
            content: "When you only want one-day van cover, save money by only paying for insurance on the day that you need it."
        },
        {
            heading: "It's fast",
            content: "Get your online quote for one-day van insurance in under 2 minutes or in the Tempcover App. Receive super-fast temporary van cover as soon as possible!"
        },
        {
            heading: "It's flexible",
            content: "You'll find temporary one-day van insurance that is fully flexible with no long-term contracts. Take advantage of convenient cover ranging from 24 hours to 28 days!."
        },
        {
            heading: "No impact on NCD",
            content: "Protect your No Claims Discount with one-day van insurance and save money in the long and short term."
        }
    ]


    return (
        <div className="flex w-full group light py-regular">
            <div className="tc-container">
                <div className="lg:w-[40%] w-full builder-block builder-c98f826ca861444c9c92e3442e09b3e3 builder-has-component css-1sx5d80" builder-id="builder-c98f826ca861444c9c92e3442e09b3e3">
                    <span className="builder-text css-1qggkls">
                        <h2>Benefits of our one-day van insurance</h2>
                    </span>
                </div>
                <div className="grid my-3 grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {
                        onedayvan.map((e,i) =>
                        (
                            <BenefitsVan key={i} data={e} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}
export default OneDayVanInsurance;