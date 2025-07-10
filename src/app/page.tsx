import React from "react";

const PreBanner = React.lazy(() => import("@/components/HomePage/PreBanner"));
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
const AffordableCover=React.lazy(()=>import("@/components/HomePage/AffordableCover"));
const FAQ=React.lazy(()=>import("@/components/HomePage/FAQ"));
const FrontCover=React.lazy(()=>import("@/components/HomePage/FrontCover"));
export default function Home() {
  return (
    <div>
      <PreBanner />
      <Banner />
      <ShortTermCover />
      <Review />
      <TempCover />
      <TempInsurance />
      <ForgetQuote />
      <CoverDuration />
      <FeaturedIn />
      <ExpertSay />
      <RecognisedWork />
      <DiscoverTempInsurance />
      <AffordableCover/>
      <FAQ/>
      <FrontCover/>
    </div>
  );
}
