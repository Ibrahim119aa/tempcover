import React from "react";
const NavigationHeader = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/NavigationHeader"));
const Banner = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/Banner"));
const MoreAboutVanInsurance = React.lazy(() => import("@/components/TemporaryVanInsurance/Weekly/MoreAboutVanInsurance"));
const Reviews = React.lazy(() => import("@/components/HomePage/Reviews"));
const RecognisedWorkOneDay = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/RecognisedWorkOneDay"));
const WorkDirectly = React.lazy(() => import("@/components/TemporaryVanInsurance/OneDay/WorkDirectly"));
const OneMonthCover = React.lazy(() => import("@/components/TemporaryVanInsurance/OneMonth/OneMonthCover"));

const Weekly = () => {
    const bannerData = {
        heading: "Van Insurance for a Week",
        subheading: "Need to borrow a van? Don't pay for cover you don't need",
        list: [
            "From 1-28 days. You only pay for the cover you want and only when you need it",
            " Drive away cover while waiting for your annual policy.",
            "  Protects your no claims discount. Fully comp insurance for peace of mind.",

        ],
        image: "/assets/images/vanbanner2.webp",
        isButton: true
    }
    const navigationHeading = {
        heading: "1 Month Van Insurance"
    }
    return (
        <div>
            <NavigationHeader data={navigationHeading} />
            <Banner data={bannerData} />
            <MoreAboutVanInsurance />
            <Reviews data={{ heading: "Customer Satisfaction" }} />
            <RecognisedWorkOneDay />
            <WorkDirectly />
            <OneMonthCover />
        </div>
    )
}
export default Weekly;