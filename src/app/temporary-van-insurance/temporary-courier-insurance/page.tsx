

import React from "react";
const NavigationHeader = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/NavigationHeader"));
const Banner = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/Banner"));
const VanInsurance = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/VanInsurance"));
const OneDayVanInsurance = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/OneDayVanInsurance"));
const HowVanInsurance = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/HowVanInsurance"));
const WhyOneDayVanInsurance = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/WhyOneDayVanInsurance"));
const WhatOneDayInsuranceCover = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/WhatOneDayInsuranceCover"));
const ElligibleVanInsurance = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/ElligigbleVanInsurance"));
const SuitYou = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/SuiteYou"));
const InsurancrCalculator = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/InsuranceCalculator"));
const WorkDirectly = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/WorkDirectly"));
const Reviews = React.lazy(() => import("@/components/HomePage/Reviews"));
const RecognisedWorkOneDay = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/RecognisedWorkOneDay"));
const ExperSay = React.lazy(() => import("@/components/HomePage/ExpertSay"));
const FAQ = React.lazy(() => import("@/components/HomePage/FAQ"));

const CourierInsurance = () => {
    const faqData = {
        heading: "One-day van insurance FAQs",
        faq: [
            {
                question: "How does short-term vehicle insurance work?",
                answer: (
                    <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed">
                            Short-term vehicle insurance gives you fully comprehensive cover for a set period...
                        </p>
                    </div>
                ),
            },
            {
                question: "How quickly can I get temporary insurance?",
                answer: <p className="text-gray-600">You can get a policy in under 2 minutes.</p>,
            },
        ],
    }
    const bannerData = {
        heading: "Temporary courier & delivery driver insurance",
        subheading: "Short-term courier van insurance",
        list: [
            "From 1 hour up to 28 days - get flexible cover to suit you.",
            "Ideal for couriers and delivery drivers looking for occasional cover.",
            "Fully comprehensive cover as standard",
        ],
        image: "/assets/images/couriervanbanner.webp",
        isButton: true
    }
    const navigationHeading = {
        heading: "Temporary Courier Insurance"
    }
    return (
        <div>
            <NavigationHeader data={navigationHeading} />
            <Banner data={bannerData} />
            <VanInsurance />
            <OneDayVanInsurance />
            <HowVanInsurance />
            <WhyOneDayVanInsurance />
            <WhatOneDayInsuranceCover />
            <ElligibleVanInsurance />
            <SuitYou />
            <InsurancrCalculator />
            <WorkDirectly />
            <Reviews data={{ heading: "Customer Satisfaction" }} />
            <RecognisedWorkOneDay />
            <ExperSay />

            <FAQ data={faqData} />
        </div>
    )
}
export default CourierInsurance;
