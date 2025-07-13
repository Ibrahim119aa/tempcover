import React from "react";

const Banner = React.lazy(() => import("@/components/HomePage/Banner"));
const ShortTermCover = React.lazy(() => import("@/components/HomePage/ShortTermCover"));
const Review = React.lazy(() => import('@/components/HomePage/Reviews'));
const TempCover = React.lazy(() => import("@/components/HomePage/TempCover"));
const TempInsurance = React.lazy(() => import("@/components/HomePage/TempInsurance"));
const ForgetQuote = React.lazy(() => import("@/components/HomePage/ForgetQuote"));
const CoverDuration = React.lazy(() => import("@/components/HomePage/CoverDuration"));
const FeaturedIn = React.lazy(() => import("@/components/HomePage/FeaturedIn"));
const ExpertSay = React.lazy(() => import("@/components/HomePage/ExpertSay"));
const RecognisedWork = React.lazy(() => import("@/components/HomePage/RecognisedWork"));
const DiscoverTempInsurance = React.lazy(() => import("@/components/HomePage/DiscoverTempInsurance"));
const AffordableCover = React.lazy(() => import("@/components/HomePage/AffordableCover"));
const FAQ = React.lazy(() => import("@/components/HomePage/FAQ"));
const FrontCover = React.lazy(() => import("@/components/HomePage/FrontCover"));
export default function Home() {
  const faqData = {
    heading: "Frequently Asked Questions",
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
  return (
    <div>

      <Banner />
      <ShortTermCover />
      <Review data={{ heading: "Don’t just take our word for it, hear it from over 40,000 happy drivers..." }} />

      <TempCover />
      <TempInsurance />
      <ForgetQuote />
      <CoverDuration />
      <FeaturedIn />
      <ExpertSay />
      <RecognisedWork />
      <DiscoverTempInsurance />
      <AffordableCover />
      <FAQ
        data={faqData}
      />

      <FrontCover />
    </div>
  );
}
