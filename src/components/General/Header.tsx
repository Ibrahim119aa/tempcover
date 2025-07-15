"use client";
import React, { useState } from "react";
const CarOption = React.lazy(() => import("@/components/HeaderOptions/CarOption"));
const VanOption = React.lazy(() => import("@/components/HeaderOptions/VanOption"));
const LearnerOption = React.lazy(() => import("@/components/HeaderOptions/LearnerOption"));
const MotorBikeOption = React.lazy(() => import("@/components/HeaderOptions/MotorBIkeOption"));
import Link from "next/link";
const ImpoundOption = React.lazy(() => import("@/components/HeaderOptions/ImpoundOption"));
const MoreOption = React.lazy(() => import("@/components/HeaderOptions/MoreOption"));
import { Menu, X, ChevronRight, Globe, Mail, Newspaper } from "lucide-react"


const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const navItems = [
        { name: "Car", href: "#" },
        { name: "Van", href: "#" },
        { name: "Learner", href: "#" },
        { name: "Motorbike", href: "#" },
        { name: "Impound", href: "#" },
        { name: "More", href: "#" },
    ]
    const contactItems = [
        { name: "Help Centre", href: "#", icon: Globe },
        { name: "Contact Us", href: "#", icon: Mail },
        { name: "News", href: "#", icon: Newspaper },
    ]
    const [carOpen, setCarOpen] = useState(false);
    const [vanOpen, setVanOpen] = useState(false);
    const [learnerOpen, setLearnOpen] = useState(false);
    const [impoundOpen, setImpoundOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [motorBikeOpen, setmotorBikeOpen] = useState(false);

    const [isCarMobile, setIsCarMobile] = useState(false);
    const [isVanMobile, setIsVanMobile] = useState(false);
    const [isLearnMobile, setIsLearnMobile] = useState(false);
    const [isMotorbikeMobile, setIsMotorbikeMobile] = useState(false);
    const [isImpoundMobile, setIsImpoundMobile] = useState(false);
    const [isMoreMobile, setIsMoreMobile] = useState(false);


    return (
        <div className="w-full items-center">
            {/* Top links row */}
            <div className="tc-container hidden  lg:flex gap-4 justify-end lg:pt-5">
                {[
                    {
                        label: "Help Center",
                        href: "https://www.tempcover.com/help-centre",
                        icon: (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                fill="none"
                                d="m13 13.5 3.35 3.35M7 13.5l-3.35 3.35m0-12.7L7 7.5m9.35-3.35L13 7.5m-7 3a4 4 0 1 0 8 0 4 4 0 0 0-8 0m-5 0a9 9 0 1 0 18.001 0A9 9 0 0 0 1 10.5"
                            />
                        ),
                    },
                    {
                        label: "Contact Us",
                        href: "https://www.tempcover.com/contact-us",
                        icon: (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                fill="none"
                                d="M6 6h8m-8 4h6m-5 5H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3l-3 3z"
                            />
                        ),
                    },
                    {
                        label: "News",
                        href: "https://www.tempcover.com/frontcover",
                        icon: (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                fill="none"
                                d="M5 5.5h10m-10 4h10m-10 4h10M1 3.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z"
                            />
                        ),
                    },
                    {
                        label: "About Us",
                        href: "https://www.tempcover.com/about-us",
                        icon: (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 19.5v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1m1-11h2a2 2 0 0 1 2 2v1m-18 0v-1a2 2 0 0 1 2-2h2m3 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0m5-8a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
                            />
                        ),
                    },
                ].map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        className="border-dark-100 bg-background-200 group text-dark hover:border-primary active:bg-background-300 md:bg-background-100 flex h-[40px] items-center text-center text-[16px] font-medium lg:rounded-md lg:border-[1px] lg:px-3 lg:py-0.5 lg:text-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 21"
                            width="20"
                            height="21"
                            className="stroke-dark-200 mr-2 h-4 w-4"
                        >
                            {item.icon}
                        </svg>
                        {item.label}
                    </a>
                ))}
            </div>

            {/* Sticky header with logo */}
            <div className="bg-background-200 border-b-dark-100 sticky top-0 z-30 flex w-full items-center gap-4 border-b py-4 align-middle lg:gap-0 lg:pb-4.5">
                <div className="tc-container gap-regular flex">
                    <div className="logo align-center order-1 flex grow justify-center lg:order-0 lg:justify-start">
                        <a
                            href="https://www.tempcover.com"
                            title="Tempcover - Affordable cover, unbelievably fast"
                            className="flex justify-center lg:justify-start"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 958.8 177.252"
                                style={{ maxWidth: "206px", width: "100%" }}
                            >
                                <defs><clipPath id="clip-path">
                                    <rect width="958.8" height="177.252" fill="#fe5000"></rect>
                                </clipPath>
                                </defs><g id="Group_2123-2" data-name="Group 2123" clipPath="url(#clip-path)"><path d="M201.384,90.284q2.818-14.9-1.509-26.374a37.22,37.22,0,0,0-14.4-18.218q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.336,56.336,0,0,0-19.729,16,56.949,56.949,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983a39.627,39.627,0,0,0,16.408,19.729q11.574,7.249,28.486,7.248a75.338,75.338,0,0,0,22.749-3.423,59.877,59.877,0,0,0,18.32-9.059l-11.274-21.139a37.967,37.967,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336h61.854ZM150.451,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H140.567a32.15,32.15,0,0,1,2.838-6.341,18.7,18.7,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M361.752,50.422Q354.2,38.947,337.7,38.947A39.658,39.658,0,0,0,313.637,46.7a40.794,40.794,0,0,0-8.245,8.075.2.2,0,0,0-.009-.022,26.841,26.841,0,0,0-9.663-11.375,27.543,27.543,0,0,0-15.8-4.429,36.88,36.88,0,0,0-19.83,5.838,37.294,37.294,0,0,0-10.5,9.749l.135-12.567h-31L200.4,136.988h34.827l9.463-47.913a34.922,34.922,0,0,1,3.724-10.469,19.2,19.2,0,0,1,6.039-6.744A13.508,13.508,0,0,1,262,69.547q5.633,0,7.75,4.027t.3,12.683l-9.865,50.731h35.029l9.663-50.53A31,31,0,0,1,308.3,77.1a14.56,14.56,0,0,1,13.286-7.55q5.436,0,7.651,3.825t.4,12.885l-9.662,50.731h34.827l10.468-54.154Q369.3,61.9,361.752,50.422" fill="#fe5000"></path><path d="M466.094,46.195q-7.956-7.248-19.628-7.248a36.653,36.653,0,0,0-19.729,5.637,34.673,34.673,0,0,0-10.193,9.827l.128-12.444h-31L359.5,177.252h35.029l7.8-40.438a49.136,49.136,0,0,0,18.173,3.4,58.28,58.28,0,0,0,25.87-5.738A54.871,54.871,0,0,0,466.3,117.963,60.558,60.558,0,0,0,477.267,92.1a60.511,60.511,0,0,0-.2-26.474q-3.02-12.177-10.972-19.426m-23.856,44.49a26.044,26.044,0,0,1-4.228,10.872,20.889,20.889,0,0,1-7.851,6.945,23.549,23.549,0,0,1-10.669,2.315,31.833,31.833,0,0,1-11.707-2.314l4.057-21.039A29.656,29.656,0,0,1,415.766,77a19.321,19.321,0,0,1,6.543-6.442,16.2,16.2,0,0,1,8.254-2.215,11.285,11.285,0,0,1,7.85,2.718,14.187,14.187,0,0,1,4.127,7.751,28.775,28.775,0,0,1-.3,11.877" fill="#fe5000"></path><path d="M543.91,108.7a19.987,19.987,0,0,1-9.06,2.114,16.343,16.343,0,0,1-9.864-2.919,14.754,14.754,0,0,1-5.536-8.153,26.7,26.7,0,0,1-.3-12.079A27.232,27.232,0,0,1,523.375,77.3a21.356,21.356,0,0,1,7.55-6.743,20.824,20.824,0,0,1,9.965-2.416q10.267,0,16.1,9.26l23.353-16.911a44.592,44.592,0,0,0-16.106-15.9q-9.864-5.633-23.151-5.637a59.759,59.759,0,0,0-25.97,5.737,55.913,55.913,0,0,0-20.232,16.105,56.92,56.92,0,0,0-10.972,24.26q-3.02,15.5,2.215,27.983a41.7,41.7,0,0,0,16.91,19.728q11.675,7.248,27.178,7.247A54.977,54.977,0,0,0,570.282,123.5l-17.515-21.339a37.294,37.294,0,0,1-8.857,6.542" fill="#fe5000"></path><path d="M659.849,46.4q-11.679-7.446-27.983-7.449A58.242,58.242,0,0,0,606.4,44.584a55.109,55.109,0,0,0-19.729,15.7A53.985,53.985,0,0,0,576.1,84.042q-3.02,15.7,2.416,28.486A42.85,42.85,0,0,0,595.83,132.66q11.875,7.347,27.782,7.348a58.061,58.061,0,0,0,25.567-5.637,55.328,55.328,0,0,0,19.628-15.7,53.941,53.941,0,0,0,10.569-23.554q3.219-16.1-2.315-28.687A44.623,44.623,0,0,0,659.849,46.4m-14.9,44.692a25.652,25.652,0,0,1-4.026,10.066,22.586,22.586,0,0,1-7.349,6.945,18.29,18.29,0,0,1-9.361,2.517,13.9,13.9,0,0,1-8.756-2.717,14.319,14.319,0,0,1-4.933-7.853,25.638,25.638,0,0,1,0-11.978A29.23,29.23,0,0,1,614.652,77.8a21.682,21.682,0,0,1,7.248-6.945,17.949,17.949,0,0,1,9.16-2.517,14,14,0,0,1,8.858,2.819,14.6,14.6,0,0,1,5.033,7.851,26.1,26.1,0,0,1,0,12.079" fill="#fe5000"></path><path d="M753.681,41.967,725.006,99.7,716.84,41.967H682.214l21.339,95.021h30.4l55.764-95.021Z" fill="#fe5000"></path><path d="M871.208,90.284q2.817-14.9-1.51-26.374A37.218,37.218,0,0,0,855.3,45.692q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.327,56.327,0,0,0-19.729,16,56.937,56.937,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983A39.63,39.63,0,0,0,793.6,132.962q11.576,7.249,28.487,7.248a75.338,75.338,0,0,0,22.749-3.423,59.889,59.889,0,0,0,18.32-9.059l-11.274-21.139a37.972,37.972,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336H869.6ZM820.275,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H810.391a32.151,32.151,0,0,1,2.838-6.341,18.692,18.692,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M947.526,40.356a32.516,32.516,0,0,0-13.79,3.02,36.941,36.941,0,0,0-11.676,8.556,38.468,38.468,0,0,0-2.808,3.418l.291-13.383h-31l-18.32,95.021h34.828L913.3,95.114a42.586,42.586,0,0,1,4.932-13.789,25.021,25.021,0,0,1,8.154-8.557,20.448,20.448,0,0,1,11.072-3.019,26.832,26.832,0,0,1,5.637.6,36.461,36.461,0,0,1,5.435,1.61L958.8,42.571a29.636,29.636,0,0,0-11.274-2.215" fill="#fe5000"></path><path d="M86.636,112.215a15.7,15.7,0,0,1-5.845,1.2A8.365,8.365,0,0,1,73.45,109.8c-1.689-2.418-2.184-5.768-1.514-10.06l4.99-24.876-22-6.738h45.193l5.029-26.167H83.335L91.613,0H33.272L55.267,6.739,49.68,35.217l22,6.74L0,41.954l32.953,10.1L29.864,68.124h13.38L37.506,97.515q-2.4,12.5.913,22.147a27.882,27.882,0,0,0,11.777,15q8.448,5.331,20.73,5.331a54.55,54.55,0,0,0,16.613-2.408,42.293,42.293,0,0,0,13.787-7.457L91.87,108.992a17.217,17.217,0,0,1-5.234,3.223" fill="#fe5000"></path></g></svg>
                        </a>
                    </div>
                    <div className="flex order-2 justify-end lg:hidden">
                        <div className="text-dark h-[50px] transition-all border-dark-100 bg-background-100 relative z-2 h-[52px] w-[52px] rounded-md border-[1px] focus:outline-none flex items-center justify-center lg:hidden">
                            <button
                                onClick={() => setIsOpen(true)}
                            >
                                {/* Hamburger icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div
                        className={
                            `fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300` +
                            (isOpen ? " opacity-100 pointer-events-auto" : " opacity-0 pointer-events-none")
                        }
                        onClick={() => setIsOpen(false)}
                    />



                    <div
                        className={
                            `bg-white  fixed top-0 right-0 z-50 h-full w-full  shadow-xl transform transition-transform duration-600` +
                            (isOpen ? " translate-x-0" : " translate-x-full")
                        }
                    >
                        <div className="flex items-center justify-between px-4 py-4 border-b">
                            <div className="logo align-center order-1 flex grow justify-center lg:order-0 lg:justify-start">
                                <a
                                    href="https://www.tempcover.com"
                                    title="Tempcover - Affordable cover, unbelievably fast"
                                    className="flex justify-center lg:justify-start"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 958.8 177.252"
                                        style={{ maxWidth: "206px", width: "100%" }}
                                    >
                                        <defs><clipPath id="clip-path">
                                            <rect width="958.8" height="177.252" fill="#fe5000"></rect>
                                        </clipPath>
                                        </defs><g id="Group_2123-2" data-name="Group 2123" clipPath="url(#clip-path)"><path d="M201.384,90.284q2.818-14.9-1.509-26.374a37.22,37.22,0,0,0-14.4-18.218q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.336,56.336,0,0,0-19.729,16,56.949,56.949,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983a39.627,39.627,0,0,0,16.408,19.729q11.574,7.249,28.486,7.248a75.338,75.338,0,0,0,22.749-3.423,59.877,59.877,0,0,0,18.32-9.059l-11.274-21.139a37.967,37.967,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336h61.854ZM150.451,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H140.567a32.15,32.15,0,0,1,2.838-6.341,18.7,18.7,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M361.752,50.422Q354.2,38.947,337.7,38.947A39.658,39.658,0,0,0,313.637,46.7a40.794,40.794,0,0,0-8.245,8.075.2.2,0,0,0-.009-.022,26.841,26.841,0,0,0-9.663-11.375,27.543,27.543,0,0,0-15.8-4.429,36.88,36.88,0,0,0-19.83,5.838,37.294,37.294,0,0,0-10.5,9.749l.135-12.567h-31L200.4,136.988h34.827l9.463-47.913a34.922,34.922,0,0,1,3.724-10.469,19.2,19.2,0,0,1,6.039-6.744A13.508,13.508,0,0,1,262,69.547q5.633,0,7.75,4.027t.3,12.683l-9.865,50.731h35.029l9.663-50.53A31,31,0,0,1,308.3,77.1a14.56,14.56,0,0,1,13.286-7.55q5.436,0,7.651,3.825t.4,12.885l-9.662,50.731h34.827l10.468-54.154Q369.3,61.9,361.752,50.422" fill="#fe5000"></path><path d="M466.094,46.195q-7.956-7.248-19.628-7.248a36.653,36.653,0,0,0-19.729,5.637,34.673,34.673,0,0,0-10.193,9.827l.128-12.444h-31L359.5,177.252h35.029l7.8-40.438a49.136,49.136,0,0,0,18.173,3.4,58.28,58.28,0,0,0,25.87-5.738A54.871,54.871,0,0,0,466.3,117.963,60.558,60.558,0,0,0,477.267,92.1a60.511,60.511,0,0,0-.2-26.474q-3.02-12.177-10.972-19.426m-23.856,44.49a26.044,26.044,0,0,1-4.228,10.872,20.889,20.889,0,0,1-7.851,6.945,23.549,23.549,0,0,1-10.669,2.315,31.833,31.833,0,0,1-11.707-2.314l4.057-21.039A29.656,29.656,0,0,1,415.766,77a19.321,19.321,0,0,1,6.543-6.442,16.2,16.2,0,0,1,8.254-2.215,11.285,11.285,0,0,1,7.85,2.718,14.187,14.187,0,0,1,4.127,7.751,28.775,28.775,0,0,1-.3,11.877" fill="#fe5000"></path><path d="M543.91,108.7a19.987,19.987,0,0,1-9.06,2.114,16.343,16.343,0,0,1-9.864-2.919,14.754,14.754,0,0,1-5.536-8.153,26.7,26.7,0,0,1-.3-12.079A27.232,27.232,0,0,1,523.375,77.3a21.356,21.356,0,0,1,7.55-6.743,20.824,20.824,0,0,1,9.965-2.416q10.267,0,16.1,9.26l23.353-16.911a44.592,44.592,0,0,0-16.106-15.9q-9.864-5.633-23.151-5.637a59.759,59.759,0,0,0-25.97,5.737,55.913,55.913,0,0,0-20.232,16.105,56.92,56.92,0,0,0-10.972,24.26q-3.02,15.5,2.215,27.983a41.7,41.7,0,0,0,16.91,19.728q11.675,7.248,27.178,7.247A54.977,54.977,0,0,0,570.282,123.5l-17.515-21.339a37.294,37.294,0,0,1-8.857,6.542" fill="#fe5000"></path><path d="M659.849,46.4q-11.679-7.446-27.983-7.449A58.242,58.242,0,0,0,606.4,44.584a55.109,55.109,0,0,0-19.729,15.7A53.985,53.985,0,0,0,576.1,84.042q-3.02,15.7,2.416,28.486A42.85,42.85,0,0,0,595.83,132.66q11.875,7.347,27.782,7.348a58.061,58.061,0,0,0,25.567-5.637,55.328,55.328,0,0,0,19.628-15.7,53.941,53.941,0,0,0,10.569-23.554q3.219-16.1-2.315-28.687A44.623,44.623,0,0,0,659.849,46.4m-14.9,44.692a25.652,25.652,0,0,1-4.026,10.066,22.586,22.586,0,0,1-7.349,6.945,18.29,18.29,0,0,1-9.361,2.517,13.9,13.9,0,0,1-8.756-2.717,14.319,14.319,0,0,1-4.933-7.853,25.638,25.638,0,0,1,0-11.978A29.23,29.23,0,0,1,614.652,77.8a21.682,21.682,0,0,1,7.248-6.945,17.949,17.949,0,0,1,9.16-2.517,14,14,0,0,1,8.858,2.819,14.6,14.6,0,0,1,5.033,7.851,26.1,26.1,0,0,1,0,12.079" fill="#fe5000"></path><path d="M753.681,41.967,725.006,99.7,716.84,41.967H682.214l21.339,95.021h30.4l55.764-95.021Z" fill="#fe5000"></path><path d="M871.208,90.284q2.817-14.9-1.51-26.374A37.218,37.218,0,0,0,855.3,45.692q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.327,56.327,0,0,0-19.729,16,56.937,56.937,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983A39.63,39.63,0,0,0,793.6,132.962q11.576,7.249,28.487,7.248a75.338,75.338,0,0,0,22.749-3.423,59.889,59.889,0,0,0,18.32-9.059l-11.274-21.139a37.972,37.972,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336H869.6ZM820.275,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H810.391a32.151,32.151,0,0,1,2.838-6.341,18.692,18.692,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M947.526,40.356a32.516,32.516,0,0,0-13.79,3.02,36.941,36.941,0,0,0-11.676,8.556,38.468,38.468,0,0,0-2.808,3.418l.291-13.383h-31l-18.32,95.021h34.828L913.3,95.114a42.586,42.586,0,0,1,4.932-13.789,25.021,25.021,0,0,1,8.154-8.557,20.448,20.448,0,0,1,11.072-3.019,26.832,26.832,0,0,1,5.637.6,36.461,36.461,0,0,1,5.435,1.61L958.8,42.571a29.636,29.636,0,0,0-11.274-2.215" fill="#fe5000"></path><path d="M86.636,112.215a15.7,15.7,0,0,1-5.845,1.2A8.365,8.365,0,0,1,73.45,109.8c-1.689-2.418-2.184-5.768-1.514-10.06l4.99-24.876-22-6.738h45.193l5.029-26.167H83.335L91.613,0H33.272L55.267,6.739,49.68,35.217l22,6.74L0,41.954l32.953,10.1L29.864,68.124h13.38L37.506,97.515q-2.4,12.5.913,22.147a27.882,27.882,0,0,0,11.777,15q8.448,5.331,20.73,5.331a54.55,54.55,0,0,0,16.613-2.408,42.293,42.293,0,0,0,13.787-7.457L91.87,108.992a17.217,17.217,0,0,1-5.234,3.223" fill="#fe5000"></path></g></svg>
                                </a>
                            </div>
                            <div className="account inline-flex items-center gap-5" role="none">
                                <a className="tc-secondary-button" href="https://www.tempcover.com/under-construction">
                                    Account
                                </a>

                            </div>
                            <div className="flex order-2 justify-end lg:hidden">
                                <div className="text-dark h-[50px] transition-all border-dark-100 bg-background-100 relative z-2 h-[52px] w-[52px] rounded-md border-[1px] focus:outline-none flex items-center justify-center lg:hidden">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {/* Hamburger icon */}
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                            </div>

                        </div>

                        <div className="p-4 w-full ">
                            <a className="tc-submit-button w-full block text-center" href="https://www.tempcover.com/start-quote">
                                Get a quote
                            </a>
                        </div>


                        <nav className="flex-1 overflow-y-auto">

                            {navItems.map((item, index) => (
                                <React.Fragment key={item.name}>
                                    <Link
                                        onClick={() => {
                                            setIsOpen(false);
                                            if (item.name == "Car") {
                                                setIsCarMobile(true);
                                            }
                                            else if (item.name == "Van") {
                                                setIsVanMobile(true);
                                            }
                                            else if (item.name == "Learner") {
                                                setIsLearnMobile(true);
                                            }
                                            else if (item.name == "Motorbike") {
                                                setIsMotorbikeMobile(true);
                                            }
                                            else if (item.name == "Impound") {
                                                setIsImpoundMobile(true);
                                            }
                                            else if (item.name == "More") {
                                                setIsMoreMobile(true);
                                            }


                                        }}
                                        href={item.href}
                                        className="flex items-center justify-between px-4 py-4 text-base font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        <span>{item.name}</span>
                                        <ChevronRight className="h-5 w-5 text-gray-500" />
                                    </Link>
                                    {index < navItems.length - 1 && <div className="h-px bg-gray-200 mx-4" />}
                                </React.Fragment>
                            ))}

                            <div className="h-px bg-gray-200 my-4 mx-4" />

                            <div className="px-4 pb-4">
                                {contactItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md px-2"
                                    >
                                        <item.icon className="h-5 w-5 text-gray-500" />
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>

                    {
                        isCarMobile ?
                            (
                                <div
                                    className={
                                        `bg-white  fixed top-0 right-0 z-50 h-full w-full  shadow-xl transform transition-transform duration-600` +
                                        (isCarMobile ? " translate-x-0" : " translate-x-full")
                                    }
                                >
                                    <div className="flex items-center justify-between px-4 py-4 border-b">
                                        <div className="logo align-center order-1 flex grow justify-center lg:order-0 lg:justify-start">
                                            <a
                                                href="https://www.tempcover.com"
                                                title="Tempcover - Affordable cover, unbelievably fast"
                                                className="flex justify-center lg:justify-start"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 958.8 177.252"
                                                    style={{ maxWidth: "206px", width: "100%" }}
                                                >
                                                    <defs><clipPath id="clip-path">
                                                        <rect width="958.8" height="177.252" fill="#fe5000"></rect>
                                                    </clipPath>
                                                    </defs><g id="Group_2123-2" data-name="Group 2123" clipPath="url(#clip-path)"><path d="M201.384,90.284q2.818-14.9-1.509-26.374a37.22,37.22,0,0,0-14.4-18.218q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.336,56.336,0,0,0-19.729,16,56.949,56.949,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983a39.627,39.627,0,0,0,16.408,19.729q11.574,7.249,28.486,7.248a75.338,75.338,0,0,0,22.749-3.423,59.877,59.877,0,0,0,18.32-9.059l-11.274-21.139a37.967,37.967,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336h61.854ZM150.451,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H140.567a32.15,32.15,0,0,1,2.838-6.341,18.7,18.7,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M361.752,50.422Q354.2,38.947,337.7,38.947A39.658,39.658,0,0,0,313.637,46.7a40.794,40.794,0,0,0-8.245,8.075.2.2,0,0,0-.009-.022,26.841,26.841,0,0,0-9.663-11.375,27.543,27.543,0,0,0-15.8-4.429,36.88,36.88,0,0,0-19.83,5.838,37.294,37.294,0,0,0-10.5,9.749l.135-12.567h-31L200.4,136.988h34.827l9.463-47.913a34.922,34.922,0,0,1,3.724-10.469,19.2,19.2,0,0,1,6.039-6.744A13.508,13.508,0,0,1,262,69.547q5.633,0,7.75,4.027t.3,12.683l-9.865,50.731h35.029l9.663-50.53A31,31,0,0,1,308.3,77.1a14.56,14.56,0,0,1,13.286-7.55q5.436,0,7.651,3.825t.4,12.885l-9.662,50.731h34.827l10.468-54.154Q369.3,61.9,361.752,50.422" fill="#fe5000"></path><path d="M466.094,46.195q-7.956-7.248-19.628-7.248a36.653,36.653,0,0,0-19.729,5.637,34.673,34.673,0,0,0-10.193,9.827l.128-12.444h-31L359.5,177.252h35.029l7.8-40.438a49.136,49.136,0,0,0,18.173,3.4,58.28,58.28,0,0,0,25.87-5.738A54.871,54.871,0,0,0,466.3,117.963,60.558,60.558,0,0,0,477.267,92.1a60.511,60.511,0,0,0-.2-26.474q-3.02-12.177-10.972-19.426m-23.856,44.49a26.044,26.044,0,0,1-4.228,10.872,20.889,20.889,0,0,1-7.851,6.945,23.549,23.549,0,0,1-10.669,2.315,31.833,31.833,0,0,1-11.707-2.314l4.057-21.039A29.656,29.656,0,0,1,415.766,77a19.321,19.321,0,0,1,6.543-6.442,16.2,16.2,0,0,1,8.254-2.215,11.285,11.285,0,0,1,7.85,2.718,14.187,14.187,0,0,1,4.127,7.751,28.775,28.775,0,0,1-.3,11.877" fill="#fe5000"></path><path d="M543.91,108.7a19.987,19.987,0,0,1-9.06,2.114,16.343,16.343,0,0,1-9.864-2.919,14.754,14.754,0,0,1-5.536-8.153,26.7,26.7,0,0,1-.3-12.079A27.232,27.232,0,0,1,523.375,77.3a21.356,21.356,0,0,1,7.55-6.743,20.824,20.824,0,0,1,9.965-2.416q10.267,0,16.1,9.26l23.353-16.911a44.592,44.592,0,0,0-16.106-15.9q-9.864-5.633-23.151-5.637a59.759,59.759,0,0,0-25.97,5.737,55.913,55.913,0,0,0-20.232,16.105,56.92,56.92,0,0,0-10.972,24.26q-3.02,15.5,2.215,27.983a41.7,41.7,0,0,0,16.91,19.728q11.675,7.248,27.178,7.247A54.977,54.977,0,0,0,570.282,123.5l-17.515-21.339a37.294,37.294,0,0,1-8.857,6.542" fill="#fe5000"></path><path d="M659.849,46.4q-11.679-7.446-27.983-7.449A58.242,58.242,0,0,0,606.4,44.584a55.109,55.109,0,0,0-19.729,15.7A53.985,53.985,0,0,0,576.1,84.042q-3.02,15.7,2.416,28.486A42.85,42.85,0,0,0,595.83,132.66q11.875,7.347,27.782,7.348a58.061,58.061,0,0,0,25.567-5.637,55.328,55.328,0,0,0,19.628-15.7,53.941,53.941,0,0,0,10.569-23.554q3.219-16.1-2.315-28.687A44.623,44.623,0,0,0,659.849,46.4m-14.9,44.692a25.652,25.652,0,0,1-4.026,10.066,22.586,22.586,0,0,1-7.349,6.945,18.29,18.29,0,0,1-9.361,2.517,13.9,13.9,0,0,1-8.756-2.717,14.319,14.319,0,0,1-4.933-7.853,25.638,25.638,0,0,1,0-11.978A29.23,29.23,0,0,1,614.652,77.8a21.682,21.682,0,0,1,7.248-6.945,17.949,17.949,0,0,1,9.16-2.517,14,14,0,0,1,8.858,2.819,14.6,14.6,0,0,1,5.033,7.851,26.1,26.1,0,0,1,0,12.079" fill="#fe5000"></path><path d="M753.681,41.967,725.006,99.7,716.84,41.967H682.214l21.339,95.021h30.4l55.764-95.021Z" fill="#fe5000"></path><path d="M871.208,90.284q2.817-14.9-1.51-26.374A37.218,37.218,0,0,0,855.3,45.692q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.327,56.327,0,0,0-19.729,16,56.937,56.937,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983A39.63,39.63,0,0,0,793.6,132.962q11.576,7.249,28.487,7.248a75.338,75.338,0,0,0,22.749-3.423,59.889,59.889,0,0,0,18.32-9.059l-11.274-21.139a37.972,37.972,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336H869.6ZM820.275,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H810.391a32.151,32.151,0,0,1,2.838-6.341,18.692,18.692,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M947.526,40.356a32.516,32.516,0,0,0-13.79,3.02,36.941,36.941,0,0,0-11.676,8.556,38.468,38.468,0,0,0-2.808,3.418l.291-13.383h-31l-18.32,95.021h34.828L913.3,95.114a42.586,42.586,0,0,1,4.932-13.789,25.021,25.021,0,0,1,8.154-8.557,20.448,20.448,0,0,1,11.072-3.019,26.832,26.832,0,0,1,5.637.6,36.461,36.461,0,0,1,5.435,1.61L958.8,42.571a29.636,29.636,0,0,0-11.274-2.215" fill="#fe5000"></path><path d="M86.636,112.215a15.7,15.7,0,0,1-5.845,1.2A8.365,8.365,0,0,1,73.45,109.8c-1.689-2.418-2.184-5.768-1.514-10.06l4.99-24.876-22-6.738h45.193l5.029-26.167H83.335L91.613,0H33.272L55.267,6.739,49.68,35.217l22,6.74L0,41.954l32.953,10.1L29.864,68.124h13.38L37.506,97.515q-2.4,12.5.913,22.147a27.882,27.882,0,0,0,11.777,15q8.448,5.331,20.73,5.331a54.55,54.55,0,0,0,16.613-2.408,42.293,42.293,0,0,0,13.787-7.457L91.87,108.992a17.217,17.217,0,0,1-5.234,3.223" fill="#fe5000"></path></g></svg>
                                            </a>
                                        </div>
                                        <div className="account inline-flex items-center gap-5" role="none">
                                            <a className="tc-secondary-button" href="https://www.tempcover.com/under-construction">
                                                Account
                                            </a>

                                        </div>
                                        <div className="flex order-2 justify-end lg:hidden">
                                            <div className="text-dark h-[50px] transition-all border-dark-100 bg-background-100 relative z-2 h-[52px] w-[52px] rounded-md border-[1px] focus:outline-none flex items-center justify-center lg:hidden">
                                                <button
                                                    onClick={() => setIsCarMobile(false)}
                                                >
                                                    {/* Hamburger icon */}
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsCarMobile(false);
                                            setIsOpen(true);
                                        }
                                        }
                                        className="mb-4 mt-6 mx-4 flex items-center text-[16px] font-medium lg:hidden"
                                        role="menuitem"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-chevron-left"
                                        >
                                            <path d="M15 6l-6 6l6 6"></path>
                                        </svg>
                                        Back to main menu
                                    </button>



                                    <nav className="flex-1 px-4 overflow-y-auto">

                                        <div className="mb-4 flex  w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                                                <span className="stroke-dark -mt-[2px] mr-2 flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="tabler-icon tabler-icon-car"
                                                    >
                                                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                                                    </svg>
                                                </span>
                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/temporary-car-insurance"
                                                    role="menuitem"
                                                >
                                                    Temporary Car Insurance
                                                </a>
                                            </span>

                                            {/* Car insurance links */}
                                            {[
                                                ["One Day Car Insurance", "/temporary-car-insurance/one-day"],
                                                ["Monthly Car Insurance", "https://www.tempcover.com/temporary-car-insurance/one-month"],
                                                ["Weekly Car Insurance", "https://www.tempcover.com/temporary-car-insurance/weekly"],
                                                ["Hourly Car Insurance", "https://www.tempcover.com/temporary-car-insurance/hourly"],
                                                ["Temporary Business Car Insurance", "https://www.tempcover.com/temporary-business-car-insurance"],
                                            ].map(([label, link], i) => (
                                                <Link
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                                                <span className="stroke-black -mt-[2px] mr-2 flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 19"
                                                        width="18"
                                                        height="18"
                                                        className="stroke-dark"
                                                        name="Guide"

                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            d="M5 5.5h10m-10 4h10m-10 4h10M1 3.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/frontcover"
                                                    role="menuitem"
                                                >
                                                    Helpful Guides
                                                </a>
                                            </span>

                                            {/* Helpful guide links */}
                                            {[
                                                ["Can I drive someone else's car on my insurance?", "https://www.tempcover.com/front-cover/insurance/can-i-drive-someone-elses-car-on-my-insurance"],
                                                ["Can I tax a car with temporary insurance?", "https://www.tempcover.com/front-cover/insurance/can-you-tax-a-car-with-temporary-insurance"],
                                                ["Can I insure a SORN car?", "https://www.tempcover.com/front-cover/driving-advice/can-you-insure-a-sorn-car"],
                                                ["Temporary car insurance for new drivers", "https://www.tempcover.com/temporary-car-insurance/new-drivers"],
                                                ["Temporary car insurance for additional drivers", "https://www.tempcover.com/temporary-car-insurance/additional-drivers"],
                                                ["Temporary car insurance for convicted drivers", "https://www.tempcover.com/temporary-car-insurance/convicted-drivers"],
                                                ["Driving licence types", "https://www.tempcover.com/temporary-car-insurance/driving-licence-types"],
                                            ].map(([label, link], i) => (
                                                <a
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium  underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>


                                    </nav>
                                </div>
                            ) : null
                    }
                    {
                        isVanMobile ?
                            (
                                <div
                                    className={
                                        `bg-white  fixed top-0 right-0 z-50 h-full w-full  shadow-xl transform transition-transform duration-600` +
                                        (isVanMobile ? " translate-x-0" : " translate-x-full")
                                    }
                                >
                                    <div className="flex items-center justify-between px-4 py-4 border-b">
                                        <div className="logo align-center order-1 flex grow justify-center lg:order-0 lg:justify-start">
                                            <a
                                                href="https://www.tempcover.com"
                                                title="Tempcover - Affordable cover, unbelievably fast"
                                                className="flex justify-center lg:justify-start"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 958.8 177.252"
                                                    style={{ maxWidth: "206px", width: "100%" }}
                                                >
                                                    <defs><clipPath id="clip-path">
                                                        <rect width="958.8" height="177.252" fill="#fe5000"></rect>
                                                    </clipPath>
                                                    </defs><g id="Group_2123-2" data-name="Group 2123" clipPath="url(#clip-path)"><path d="M201.384,90.284q2.818-14.9-1.509-26.374a37.22,37.22,0,0,0-14.4-18.218q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.336,56.336,0,0,0-19.729,16,56.949,56.949,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983a39.627,39.627,0,0,0,16.408,19.729q11.574,7.249,28.486,7.248a75.338,75.338,0,0,0,22.749-3.423,59.877,59.877,0,0,0,18.32-9.059l-11.274-21.139a37.967,37.967,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336h61.854ZM150.451,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H140.567a32.15,32.15,0,0,1,2.838-6.341,18.7,18.7,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M361.752,50.422Q354.2,38.947,337.7,38.947A39.658,39.658,0,0,0,313.637,46.7a40.794,40.794,0,0,0-8.245,8.075.2.2,0,0,0-.009-.022,26.841,26.841,0,0,0-9.663-11.375,27.543,27.543,0,0,0-15.8-4.429,36.88,36.88,0,0,0-19.83,5.838,37.294,37.294,0,0,0-10.5,9.749l.135-12.567h-31L200.4,136.988h34.827l9.463-47.913a34.922,34.922,0,0,1,3.724-10.469,19.2,19.2,0,0,1,6.039-6.744A13.508,13.508,0,0,1,262,69.547q5.633,0,7.75,4.027t.3,12.683l-9.865,50.731h35.029l9.663-50.53A31,31,0,0,1,308.3,77.1a14.56,14.56,0,0,1,13.286-7.55q5.436,0,7.651,3.825t.4,12.885l-9.662,50.731h34.827l10.468-54.154Q369.3,61.9,361.752,50.422" fill="#fe5000"></path><path d="M466.094,46.195q-7.956-7.248-19.628-7.248a36.653,36.653,0,0,0-19.729,5.637,34.673,34.673,0,0,0-10.193,9.827l.128-12.444h-31L359.5,177.252h35.029l7.8-40.438a49.136,49.136,0,0,0,18.173,3.4,58.28,58.28,0,0,0,25.87-5.738A54.871,54.871,0,0,0,466.3,117.963,60.558,60.558,0,0,0,477.267,92.1a60.511,60.511,0,0,0-.2-26.474q-3.02-12.177-10.972-19.426m-23.856,44.49a26.044,26.044,0,0,1-4.228,10.872,20.889,20.889,0,0,1-7.851,6.945,23.549,23.549,0,0,1-10.669,2.315,31.833,31.833,0,0,1-11.707-2.314l4.057-21.039A29.656,29.656,0,0,1,415.766,77a19.321,19.321,0,0,1,6.543-6.442,16.2,16.2,0,0,1,8.254-2.215,11.285,11.285,0,0,1,7.85,2.718,14.187,14.187,0,0,1,4.127,7.751,28.775,28.775,0,0,1-.3,11.877" fill="#fe5000"></path><path d="M543.91,108.7a19.987,19.987,0,0,1-9.06,2.114,16.343,16.343,0,0,1-9.864-2.919,14.754,14.754,0,0,1-5.536-8.153,26.7,26.7,0,0,1-.3-12.079A27.232,27.232,0,0,1,523.375,77.3a21.356,21.356,0,0,1,7.55-6.743,20.824,20.824,0,0,1,9.965-2.416q10.267,0,16.1,9.26l23.353-16.911a44.592,44.592,0,0,0-16.106-15.9q-9.864-5.633-23.151-5.637a59.759,59.759,0,0,0-25.97,5.737,55.913,55.913,0,0,0-20.232,16.105,56.92,56.92,0,0,0-10.972,24.26q-3.02,15.5,2.215,27.983a41.7,41.7,0,0,0,16.91,19.728q11.675,7.248,27.178,7.247A54.977,54.977,0,0,0,570.282,123.5l-17.515-21.339a37.294,37.294,0,0,1-8.857,6.542" fill="#fe5000"></path><path d="M659.849,46.4q-11.679-7.446-27.983-7.449A58.242,58.242,0,0,0,606.4,44.584a55.109,55.109,0,0,0-19.729,15.7A53.985,53.985,0,0,0,576.1,84.042q-3.02,15.7,2.416,28.486A42.85,42.85,0,0,0,595.83,132.66q11.875,7.347,27.782,7.348a58.061,58.061,0,0,0,25.567-5.637,55.328,55.328,0,0,0,19.628-15.7,53.941,53.941,0,0,0,10.569-23.554q3.219-16.1-2.315-28.687A44.623,44.623,0,0,0,659.849,46.4m-14.9,44.692a25.652,25.652,0,0,1-4.026,10.066,22.586,22.586,0,0,1-7.349,6.945,18.29,18.29,0,0,1-9.361,2.517,13.9,13.9,0,0,1-8.756-2.717,14.319,14.319,0,0,1-4.933-7.853,25.638,25.638,0,0,1,0-11.978A29.23,29.23,0,0,1,614.652,77.8a21.682,21.682,0,0,1,7.248-6.945,17.949,17.949,0,0,1,9.16-2.517,14,14,0,0,1,8.858,2.819,14.6,14.6,0,0,1,5.033,7.851,26.1,26.1,0,0,1,0,12.079" fill="#fe5000"></path><path d="M753.681,41.967,725.006,99.7,716.84,41.967H682.214l21.339,95.021h30.4l55.764-95.021Z" fill="#fe5000"></path><path d="M871.208,90.284q2.817-14.9-1.51-26.374A37.218,37.218,0,0,0,855.3,45.692q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.327,56.327,0,0,0-19.729,16,56.937,56.937,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983A39.63,39.63,0,0,0,793.6,132.962q11.576,7.249,28.487,7.248a75.338,75.338,0,0,0,22.749-3.423,59.889,59.889,0,0,0,18.32-9.059l-11.274-21.139a37.972,37.972,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336H869.6ZM820.275,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H810.391a32.151,32.151,0,0,1,2.838-6.341,18.692,18.692,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M947.526,40.356a32.516,32.516,0,0,0-13.79,3.02,36.941,36.941,0,0,0-11.676,8.556,38.468,38.468,0,0,0-2.808,3.418l.291-13.383h-31l-18.32,95.021h34.828L913.3,95.114a42.586,42.586,0,0,1,4.932-13.789,25.021,25.021,0,0,1,8.154-8.557,20.448,20.448,0,0,1,11.072-3.019,26.832,26.832,0,0,1,5.637.6,36.461,36.461,0,0,1,5.435,1.61L958.8,42.571a29.636,29.636,0,0,0-11.274-2.215" fill="#fe5000"></path><path d="M86.636,112.215a15.7,15.7,0,0,1-5.845,1.2A8.365,8.365,0,0,1,73.45,109.8c-1.689-2.418-2.184-5.768-1.514-10.06l4.99-24.876-22-6.738h45.193l5.029-26.167H83.335L91.613,0H33.272L55.267,6.739,49.68,35.217l22,6.74L0,41.954l32.953,10.1L29.864,68.124h13.38L37.506,97.515q-2.4,12.5.913,22.147a27.882,27.882,0,0,0,11.777,15q8.448,5.331,20.73,5.331a54.55,54.55,0,0,0,16.613-2.408,42.293,42.293,0,0,0,13.787-7.457L91.87,108.992a17.217,17.217,0,0,1-5.234,3.223" fill="#fe5000"></path></g></svg>
                                            </a>
                                        </div>
                                        <div className="account inline-flex items-center gap-5" role="none">
                                            <a className="tc-secondary-button" href="https://www.tempcover.com/under-construction">
                                                Account
                                            </a>

                                        </div>
                                        <div className="flex order-2 justify-end lg:hidden">
                                            <div className="text-dark h-[50px] transition-all border-dark-100 bg-background-100 relative z-2 h-[52px] w-[52px] rounded-md border-[1px] focus:outline-none flex items-center justify-center lg:hidden">
                                                <button
                                                    onClick={() => setIsVanMobile(false)}
                                                >
                                                    {/* Hamburger icon */}
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsVanMobile(false);
                                            setIsOpen(true);
                                        }
                                        }
                                        className="mb-4 mt-6 mx-4 flex items-center text-[16px] font-medium lg:hidden"
                                        role="menuitem"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-chevron-left"
                                        >
                                            <path d="M15 6l-6 6l6 6"></path>
                                        </svg>
                                        Back to main menu
                                    </button>



                                    <nav className="flex-1 px-4 overflow-y-auto">

                                        <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                                                <span className="stroke-dark -mt-[2px] mr-2 flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        name="Van"
                                                        className="h-[18px] w-[18px] text-current"
                                                    >
                                                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                                                    </svg>


                                                </span>
                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/temporary-Van-insurance"
                                                    role="menuitem"
                                                >
                                                    Temporary Van Insurance
                                                </a>
                                            </span>

                                            {[
                                                ["One Day Van Insurance", "/temporary-van-insurance/one-day"],
                                                ["Monthly Van Insurance", "/temporary-van-insurance/one-month"],
                                                ["Weekly Van Insurance", "/temporary-van-insurance/weekly"],
                                                ["Hourly Van Insurance", "/temporary-van-insurance/hourly-van-insurance"],
                                                ["Temporary Courier Insurance", "/temporary-van-insurance/temporary-courier-insurance"],
                                                ["Temporary Business Van Insurance", "https://www.tempcover.com/temporary-business-Van-insurance"],
                                            ].map(([label, link], i) => (
                                                <a
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>

                                        {/* Right column */}
                                        <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                                                <span className="stroke-black -mt-[2px] mr-2 flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 19"
                                                        width="18"
                                                        height="18"
                                                        className="stroke-dark"
                                                        name="Guide"

                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            d="M5 5.5h10m-10 4h10m-10 4h10M1 3.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/frontcover"
                                                    role="menuitem"
                                                >
                                                    Helpful Guides
                                                </a>
                                            </span>

                                            {/* Helpful guide links */}
                                            {[
                                                ["Temporary Pick Up Truck Insurance", "https://www.tempcover.com/front-cover/insurance/can-i-drive-someone-elses-Van-on-my-insurance"],
                                                ["Temporary Horsebox Insurance", "https://www.tempcover.com/front-cover/insurance/can-you-tax-a-Van-with-temporary-insurance"],
                                                ["Can I drive a van on my car Insurance?", "https://www.tempcover.com/front-cover/driving-advice/can-you-insure-a-sorn-Van"],
                                                ["Driving a van for the first time", "https://www.tempcover.com/temporary-Van-insurance/new-drivers"],

                                            ].map(([label, link], i) => (
                                                <a
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium  underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>

                                    </nav>
                                </div>
                            ) : null
                    }
                    {
                        isLearnMobile ?
                            (
                                <div
                                    className={
                                        `bg-white  fixed top-0 right-0 z-50 h-full w-full  shadow-xl transform transition-transform duration-600` +
                                        (isLearnMobile ? " translate-x-0" : " translate-x-full")
                                    }
                                >
                                    <div className="flex items-center justify-between px-4 py-4 border-b">
                                        <div className="logo align-center order-1 flex grow justify-center lg:order-0 lg:justify-start">
                                            <a
                                                href="https://www.tempcover.com"
                                                title="Tempcover - Affordable cover, unbelievably fast"
                                                className="flex justify-center lg:justify-start"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 958.8 177.252"
                                                    style={{ maxWidth: "206px", width: "100%" }}
                                                >
                                                    <defs><clipPath id="clip-path">
                                                        <rect width="958.8" height="177.252" fill="#fe5000"></rect>
                                                    </clipPath>
                                                    </defs><g id="Group_2123-2" data-name="Group 2123" clipPath="url(#clip-path)"><path d="M201.384,90.284q2.818-14.9-1.509-26.374a37.22,37.22,0,0,0-14.4-18.218q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.336,56.336,0,0,0-19.729,16,56.949,56.949,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983a39.627,39.627,0,0,0,16.408,19.729q11.574,7.249,28.486,7.248a75.338,75.338,0,0,0,22.749-3.423,59.877,59.877,0,0,0,18.32-9.059l-11.274-21.139a37.967,37.967,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336h61.854ZM150.451,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H140.567a32.15,32.15,0,0,1,2.838-6.341,18.7,18.7,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M361.752,50.422Q354.2,38.947,337.7,38.947A39.658,39.658,0,0,0,313.637,46.7a40.794,40.794,0,0,0-8.245,8.075.2.2,0,0,0-.009-.022,26.841,26.841,0,0,0-9.663-11.375,27.543,27.543,0,0,0-15.8-4.429,36.88,36.88,0,0,0-19.83,5.838,37.294,37.294,0,0,0-10.5,9.749l.135-12.567h-31L200.4,136.988h34.827l9.463-47.913a34.922,34.922,0,0,1,3.724-10.469,19.2,19.2,0,0,1,6.039-6.744A13.508,13.508,0,0,1,262,69.547q5.633,0,7.75,4.027t.3,12.683l-9.865,50.731h35.029l9.663-50.53A31,31,0,0,1,308.3,77.1a14.56,14.56,0,0,1,13.286-7.55q5.436,0,7.651,3.825t.4,12.885l-9.662,50.731h34.827l10.468-54.154Q369.3,61.9,361.752,50.422" fill="#fe5000"></path><path d="M466.094,46.195q-7.956-7.248-19.628-7.248a36.653,36.653,0,0,0-19.729,5.637,34.673,34.673,0,0,0-10.193,9.827l.128-12.444h-31L359.5,177.252h35.029l7.8-40.438a49.136,49.136,0,0,0,18.173,3.4,58.28,58.28,0,0,0,25.87-5.738A54.871,54.871,0,0,0,466.3,117.963,60.558,60.558,0,0,0,477.267,92.1a60.511,60.511,0,0,0-.2-26.474q-3.02-12.177-10.972-19.426m-23.856,44.49a26.044,26.044,0,0,1-4.228,10.872,20.889,20.889,0,0,1-7.851,6.945,23.549,23.549,0,0,1-10.669,2.315,31.833,31.833,0,0,1-11.707-2.314l4.057-21.039A29.656,29.656,0,0,1,415.766,77a19.321,19.321,0,0,1,6.543-6.442,16.2,16.2,0,0,1,8.254-2.215,11.285,11.285,0,0,1,7.85,2.718,14.187,14.187,0,0,1,4.127,7.751,28.775,28.775,0,0,1-.3,11.877" fill="#fe5000"></path><path d="M543.91,108.7a19.987,19.987,0,0,1-9.06,2.114,16.343,16.343,0,0,1-9.864-2.919,14.754,14.754,0,0,1-5.536-8.153,26.7,26.7,0,0,1-.3-12.079A27.232,27.232,0,0,1,523.375,77.3a21.356,21.356,0,0,1,7.55-6.743,20.824,20.824,0,0,1,9.965-2.416q10.267,0,16.1,9.26l23.353-16.911a44.592,44.592,0,0,0-16.106-15.9q-9.864-5.633-23.151-5.637a59.759,59.759,0,0,0-25.97,5.737,55.913,55.913,0,0,0-20.232,16.105,56.92,56.92,0,0,0-10.972,24.26q-3.02,15.5,2.215,27.983a41.7,41.7,0,0,0,16.91,19.728q11.675,7.248,27.178,7.247A54.977,54.977,0,0,0,570.282,123.5l-17.515-21.339a37.294,37.294,0,0,1-8.857,6.542" fill="#fe5000"></path><path d="M659.849,46.4q-11.679-7.446-27.983-7.449A58.242,58.242,0,0,0,606.4,44.584a55.109,55.109,0,0,0-19.729,15.7A53.985,53.985,0,0,0,576.1,84.042q-3.02,15.7,2.416,28.486A42.85,42.85,0,0,0,595.83,132.66q11.875,7.347,27.782,7.348a58.061,58.061,0,0,0,25.567-5.637,55.328,55.328,0,0,0,19.628-15.7,53.941,53.941,0,0,0,10.569-23.554q3.219-16.1-2.315-28.687A44.623,44.623,0,0,0,659.849,46.4m-14.9,44.692a25.652,25.652,0,0,1-4.026,10.066,22.586,22.586,0,0,1-7.349,6.945,18.29,18.29,0,0,1-9.361,2.517,13.9,13.9,0,0,1-8.756-2.717,14.319,14.319,0,0,1-4.933-7.853,25.638,25.638,0,0,1,0-11.978A29.23,29.23,0,0,1,614.652,77.8a21.682,21.682,0,0,1,7.248-6.945,17.949,17.949,0,0,1,9.16-2.517,14,14,0,0,1,8.858,2.819,14.6,14.6,0,0,1,5.033,7.851,26.1,26.1,0,0,1,0,12.079" fill="#fe5000"></path><path d="M753.681,41.967,725.006,99.7,716.84,41.967H682.214l21.339,95.021h30.4l55.764-95.021Z" fill="#fe5000"></path><path d="M871.208,90.284q2.817-14.9-1.51-26.374A37.218,37.218,0,0,0,855.3,45.692q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.327,56.327,0,0,0-19.729,16,56.937,56.937,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983A39.63,39.63,0,0,0,793.6,132.962q11.576,7.249,28.487,7.248a75.338,75.338,0,0,0,22.749-3.423,59.889,59.889,0,0,0,18.32-9.059l-11.274-21.139a37.972,37.972,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336H869.6ZM820.275,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H810.391a32.151,32.151,0,0,1,2.838-6.341,18.692,18.692,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M947.526,40.356a32.516,32.516,0,0,0-13.79,3.02,36.941,36.941,0,0,0-11.676,8.556,38.468,38.468,0,0,0-2.808,3.418l.291-13.383h-31l-18.32,95.021h34.828L913.3,95.114a42.586,42.586,0,0,1,4.932-13.789,25.021,25.021,0,0,1,8.154-8.557,20.448,20.448,0,0,1,11.072-3.019,26.832,26.832,0,0,1,5.637.6,36.461,36.461,0,0,1,5.435,1.61L958.8,42.571a29.636,29.636,0,0,0-11.274-2.215" fill="#fe5000"></path><path d="M86.636,112.215a15.7,15.7,0,0,1-5.845,1.2A8.365,8.365,0,0,1,73.45,109.8c-1.689-2.418-2.184-5.768-1.514-10.06l4.99-24.876-22-6.738h45.193l5.029-26.167H83.335L91.613,0H33.272L55.267,6.739,49.68,35.217l22,6.74L0,41.954l32.953,10.1L29.864,68.124h13.38L37.506,97.515q-2.4,12.5.913,22.147a27.882,27.882,0,0,0,11.777,15q8.448,5.331,20.73,5.331a54.55,54.55,0,0,0,16.613-2.408,42.293,42.293,0,0,0,13.787-7.457L91.87,108.992a17.217,17.217,0,0,1-5.234,3.223" fill="#fe5000"></path></g></svg>
                                            </a>
                                        </div>
                                        <div className="account inline-flex items-center gap-5" role="none">
                                            <a className="tc-secondary-button" href="https://www.tempcover.com/under-construction">
                                                Account
                                            </a>

                                        </div>
                                        <div className="flex order-2 justify-end lg:hidden">
                                            <div className="text-dark h-[50px] transition-all border-dark-100 bg-background-100 relative z-2 h-[52px] w-[52px] rounded-md border-[1px] focus:outline-none flex items-center justify-center lg:hidden">
                                                <button
                                                    onClick={() => setIsLearnMobile(false)}
                                                >
                                                    {/* Hamburger icon */}
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsLearnMobile(false);
                                            setIsOpen(true);
                                        }
                                        }
                                        className="mb-4 mt-6 mx-4 flex items-center text-[16px] font-medium lg:hidden"
                                        role="menuitem"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-chevron-left"
                                        >
                                            <path d="M15 6l-6 6l6 6"></path>
                                        </svg>
                                        Back to main menu
                                    </button>



                                    <nav className="flex-1 px-4 overflow-y-auto">

                                        <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                                                <span className="stroke-dark -mt-[2px] mr-2 flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 33 32"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        name="Learner"
                                                        className="w-[18px] h-[18px] text-current"
                                                    >
                                                        <path d="M5.66669 7.99998C5.66669 7.29274 5.94764 6.61446 6.44774 6.11436C6.94783 5.61426 7.62611 5.33331 8.33335 5.33331H24.3334C25.0406 5.33331 25.7189 5.61426 26.219 6.11436C26.7191 6.61446 27 7.29274 27 7.99998V24C27 24.7072 26.7191 25.3855 26.219 25.8856C25.7189 26.3857 25.0406 26.6666 24.3334 26.6666H8.33335C7.62611 26.6666 6.94783 26.3857 6.44774 25.8856C5.94764 25.3855 5.66669 24.7072 5.66669 24V7.99998Z" />
                                                        <path d="M11.3334 10V21H21.3334" />
                                                    </svg>


                                                </span>
                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/temporary-Van-insurance"
                                                    role="menuitem"
                                                >
                                                    Learn Car Insurance
                                                </a>
                                            </span>

                                            {/* Van insurance links */}
                                            {[
                                                ["One Day Learner Insurance", "https://www.tempcover.com/temporary-Van-insurance/one-day"],

                                            ].map(([label, link], i) => (
                                                <a
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>

                                        {/* Right column */}
                                        <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                                                <span className="stroke-black -mt-[2px] mr-2 flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 19"
                                                        width="18"
                                                        height="18"
                                                        className="stroke-dark"
                                                        name="Guide"

                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            d="M5 5.5h10m-10 4h10m-10 4h10M1 3.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/frontcover"
                                                    role="menuitem"
                                                >
                                                    Helpful Guides
                                                </a>
                                            </span>

                                            {/* Helpful guide links */}
                                            {[
                                                ["Quickest way to learn to drive", "https://www.tempcover.com/front-cover/insurance/can-i-drive-someone-elses-Van-on-my-insurance"],
                                                ["Learning to drive with family or friend", "https://www.tempcover.com/front-cover/insurance/can-you-tax-a-Van-with-temporary-insurance"],
                                                ["Learner driver rules", "https://www.tempcover.com/front-cover/driving-advice/can-you-insure-a-sorn-Van"],


                                            ].map(([label, link], i) => (
                                                <a
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium  underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                            ) : null
                    }
                    {
                        isImpoundMobile ?
                            (
                                <div
                                    className={
                                        `bg-white  fixed top-0 right-0 z-50 h-full w-full  shadow-xl transform transition-transform duration-600` +
                                        (isImpoundMobile ? " translate-x-0" : " translate-x-full")
                                    }
                                >
                                    <div className="flex items-center justify-between px-4 py-4 border-b">
                                        <div className="logo align-center order-1 flex grow justify-center lg:order-0 lg:justify-start">
                                            <a
                                                href="https://www.tempcover.com"
                                                title="Tempcover - Affordable cover, unbelievably fast"
                                                className="flex justify-center lg:justify-start"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 958.8 177.252"
                                                    style={{ maxWidth: "206px", width: "100%" }}
                                                >
                                                    <defs><clipPath id="clip-path">
                                                        <rect width="958.8" height="177.252" fill="#fe5000"></rect>
                                                    </clipPath>
                                                    </defs><g id="Group_2123-2" data-name="Group 2123" clipPath="url(#clip-path)"><path d="M201.384,90.284q2.818-14.9-1.509-26.374a37.22,37.22,0,0,0-14.4-18.218q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.336,56.336,0,0,0-19.729,16,56.949,56.949,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983a39.627,39.627,0,0,0,16.408,19.729q11.574,7.249,28.486,7.248a75.338,75.338,0,0,0,22.749-3.423,59.877,59.877,0,0,0,18.32-9.059l-11.274-21.139a37.967,37.967,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336h61.854ZM150.451,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H140.567a32.15,32.15,0,0,1,2.838-6.341,18.7,18.7,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M361.752,50.422Q354.2,38.947,337.7,38.947A39.658,39.658,0,0,0,313.637,46.7a40.794,40.794,0,0,0-8.245,8.075.2.2,0,0,0-.009-.022,26.841,26.841,0,0,0-9.663-11.375,27.543,27.543,0,0,0-15.8-4.429,36.88,36.88,0,0,0-19.83,5.838,37.294,37.294,0,0,0-10.5,9.749l.135-12.567h-31L200.4,136.988h34.827l9.463-47.913a34.922,34.922,0,0,1,3.724-10.469,19.2,19.2,0,0,1,6.039-6.744A13.508,13.508,0,0,1,262,69.547q5.633,0,7.75,4.027t.3,12.683l-9.865,50.731h35.029l9.663-50.53A31,31,0,0,1,308.3,77.1a14.56,14.56,0,0,1,13.286-7.55q5.436,0,7.651,3.825t.4,12.885l-9.662,50.731h34.827l10.468-54.154Q369.3,61.9,361.752,50.422" fill="#fe5000"></path><path d="M466.094,46.195q-7.956-7.248-19.628-7.248a36.653,36.653,0,0,0-19.729,5.637,34.673,34.673,0,0,0-10.193,9.827l.128-12.444h-31L359.5,177.252h35.029l7.8-40.438a49.136,49.136,0,0,0,18.173,3.4,58.28,58.28,0,0,0,25.87-5.738A54.871,54.871,0,0,0,466.3,117.963,60.558,60.558,0,0,0,477.267,92.1a60.511,60.511,0,0,0-.2-26.474q-3.02-12.177-10.972-19.426m-23.856,44.49a26.044,26.044,0,0,1-4.228,10.872,20.889,20.889,0,0,1-7.851,6.945,23.549,23.549,0,0,1-10.669,2.315,31.833,31.833,0,0,1-11.707-2.314l4.057-21.039A29.656,29.656,0,0,1,415.766,77a19.321,19.321,0,0,1,6.543-6.442,16.2,16.2,0,0,1,8.254-2.215,11.285,11.285,0,0,1,7.85,2.718,14.187,14.187,0,0,1,4.127,7.751,28.775,28.775,0,0,1-.3,11.877" fill="#fe5000"></path><path d="M543.91,108.7a19.987,19.987,0,0,1-9.06,2.114,16.343,16.343,0,0,1-9.864-2.919,14.754,14.754,0,0,1-5.536-8.153,26.7,26.7,0,0,1-.3-12.079A27.232,27.232,0,0,1,523.375,77.3a21.356,21.356,0,0,1,7.55-6.743,20.824,20.824,0,0,1,9.965-2.416q10.267,0,16.1,9.26l23.353-16.911a44.592,44.592,0,0,0-16.106-15.9q-9.864-5.633-23.151-5.637a59.759,59.759,0,0,0-25.97,5.737,55.913,55.913,0,0,0-20.232,16.105,56.92,56.92,0,0,0-10.972,24.26q-3.02,15.5,2.215,27.983a41.7,41.7,0,0,0,16.91,19.728q11.675,7.248,27.178,7.247A54.977,54.977,0,0,0,570.282,123.5l-17.515-21.339a37.294,37.294,0,0,1-8.857,6.542" fill="#fe5000"></path><path d="M659.849,46.4q-11.679-7.446-27.983-7.449A58.242,58.242,0,0,0,606.4,44.584a55.109,55.109,0,0,0-19.729,15.7A53.985,53.985,0,0,0,576.1,84.042q-3.02,15.7,2.416,28.486A42.85,42.85,0,0,0,595.83,132.66q11.875,7.347,27.782,7.348a58.061,58.061,0,0,0,25.567-5.637,55.328,55.328,0,0,0,19.628-15.7,53.941,53.941,0,0,0,10.569-23.554q3.219-16.1-2.315-28.687A44.623,44.623,0,0,0,659.849,46.4m-14.9,44.692a25.652,25.652,0,0,1-4.026,10.066,22.586,22.586,0,0,1-7.349,6.945,18.29,18.29,0,0,1-9.361,2.517,13.9,13.9,0,0,1-8.756-2.717,14.319,14.319,0,0,1-4.933-7.853,25.638,25.638,0,0,1,0-11.978A29.23,29.23,0,0,1,614.652,77.8a21.682,21.682,0,0,1,7.248-6.945,17.949,17.949,0,0,1,9.16-2.517,14,14,0,0,1,8.858,2.819,14.6,14.6,0,0,1,5.033,7.851,26.1,26.1,0,0,1,0,12.079" fill="#fe5000"></path><path d="M753.681,41.967,725.006,99.7,716.84,41.967H682.214l21.339,95.021h30.4l55.764-95.021Z" fill="#fe5000"></path><path d="M871.208,90.284q2.817-14.9-1.51-26.374A37.218,37.218,0,0,0,855.3,45.692q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.327,56.327,0,0,0-19.729,16,56.937,56.937,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983A39.63,39.63,0,0,0,793.6,132.962q11.576,7.249,28.487,7.248a75.338,75.338,0,0,0,22.749-3.423,59.889,59.889,0,0,0,18.32-9.059l-11.274-21.139a37.972,37.972,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336H869.6ZM820.275,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H810.391a32.151,32.151,0,0,1,2.838-6.341,18.692,18.692,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M947.526,40.356a32.516,32.516,0,0,0-13.79,3.02,36.941,36.941,0,0,0-11.676,8.556,38.468,38.468,0,0,0-2.808,3.418l.291-13.383h-31l-18.32,95.021h34.828L913.3,95.114a42.586,42.586,0,0,1,4.932-13.789,25.021,25.021,0,0,1,8.154-8.557,20.448,20.448,0,0,1,11.072-3.019,26.832,26.832,0,0,1,5.637.6,36.461,36.461,0,0,1,5.435,1.61L958.8,42.571a29.636,29.636,0,0,0-11.274-2.215" fill="#fe5000"></path><path d="M86.636,112.215a15.7,15.7,0,0,1-5.845,1.2A8.365,8.365,0,0,1,73.45,109.8c-1.689-2.418-2.184-5.768-1.514-10.06l4.99-24.876-22-6.738h45.193l5.029-26.167H83.335L91.613,0H33.272L55.267,6.739,49.68,35.217l22,6.74L0,41.954l32.953,10.1L29.864,68.124h13.38L37.506,97.515q-2.4,12.5.913,22.147a27.882,27.882,0,0,0,11.777,15q8.448,5.331,20.73,5.331a54.55,54.55,0,0,0,16.613-2.408,42.293,42.293,0,0,0,13.787-7.457L91.87,108.992a17.217,17.217,0,0,1-5.234,3.223" fill="#fe5000"></path></g></svg>
                                            </a>
                                        </div>
                                        <div className="account inline-flex items-center gap-5" role="none">
                                            <a className="tc-secondary-button" href="https://www.tempcover.com/under-construction">
                                                Account
                                            </a>

                                        </div>
                                        <div className="flex order-2 justify-end lg:hidden">
                                            <div className="text-dark h-[50px] transition-all border-dark-100 bg-background-100 relative z-2 h-[52px] w-[52px] rounded-md border-[1px] focus:outline-none flex items-center justify-center lg:hidden">
                                                <button
                                                    onClick={() => setIsImpoundMobile(false)}
                                                >
                                                    {/* Hamburger icon */}
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsImpoundMobile(false);
                                            setIsOpen(true);
                                        }
                                        }
                                        className="mb-4 mt-6 mx-4 flex items-center text-[16px] font-medium lg:hidden"
                                        role="menuitem"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-chevron-left"
                                        >
                                            <path d="M15 6l-6 6l6 6"></path>
                                        </svg>
                                        Back to main menu
                                    </button>



                                    <nav className="flex-1 px-4 overflow-y-auto">

                                        <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">

                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/temporary-Van-insurance"
                                                    role="menuitem"
                                                >
                                                    Impound
                                                </a>
                                            </span>

                                            {/* Van insurance links */}
                                            {[
                                                ["Impound Car Insurance", "https://www.tempcover.com/temporary-Van-insurance/one-day"],
                                                ["Impound Van Insurance", "https://www.tempcover.com/temporary-Van-insurance/one-day"],

                                            ].map(([label, link], i) => (
                                                <a
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>

                                    </nav>
                                </div>
                            ) : null
                    }
                    {
                        isMotorbikeMobile ?
                            (
                                <div
                                    className={
                                        `bg-white  fixed top-0 right-0 z-50 h-full w-full  shadow-xl transform transition-transform duration-600` +
                                        (isMotorbikeMobile ? " translate-x-0" : " translate-x-full")
                                    }
                                >
                                    <div className="flex items-center justify-between px-4 py-4 border-b">
                                        <div className="logo align-center order-1 flex grow justify-center lg:order-0 lg:justify-start">
                                            <a
                                                href="https://www.tempcover.com"
                                                title="Tempcover - Affordable cover, unbelievably fast"
                                                className="flex justify-center lg:justify-start"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 958.8 177.252"
                                                    style={{ maxWidth: "206px", width: "100%" }}
                                                >
                                                    <defs><clipPath id="clip-path">
                                                        <rect width="958.8" height="177.252" fill="#fe5000"></rect>
                                                    </clipPath>
                                                    </defs><g id="Group_2123-2" data-name="Group 2123" clipPath="url(#clip-path)"><path d="M201.384,90.284q2.818-14.9-1.509-26.374a37.22,37.22,0,0,0-14.4-18.218q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.336,56.336,0,0,0-19.729,16,56.949,56.949,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983a39.627,39.627,0,0,0,16.408,19.729q11.574,7.249,28.486,7.248a75.338,75.338,0,0,0,22.749-3.423,59.877,59.877,0,0,0,18.32-9.059l-11.274-21.139a37.967,37.967,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336h61.854ZM150.451,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H140.567a32.15,32.15,0,0,1,2.838-6.341,18.7,18.7,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M361.752,50.422Q354.2,38.947,337.7,38.947A39.658,39.658,0,0,0,313.637,46.7a40.794,40.794,0,0,0-8.245,8.075.2.2,0,0,0-.009-.022,26.841,26.841,0,0,0-9.663-11.375,27.543,27.543,0,0,0-15.8-4.429,36.88,36.88,0,0,0-19.83,5.838,37.294,37.294,0,0,0-10.5,9.749l.135-12.567h-31L200.4,136.988h34.827l9.463-47.913a34.922,34.922,0,0,1,3.724-10.469,19.2,19.2,0,0,1,6.039-6.744A13.508,13.508,0,0,1,262,69.547q5.633,0,7.75,4.027t.3,12.683l-9.865,50.731h35.029l9.663-50.53A31,31,0,0,1,308.3,77.1a14.56,14.56,0,0,1,13.286-7.55q5.436,0,7.651,3.825t.4,12.885l-9.662,50.731h34.827l10.468-54.154Q369.3,61.9,361.752,50.422" fill="#fe5000"></path><path d="M466.094,46.195q-7.956-7.248-19.628-7.248a36.653,36.653,0,0,0-19.729,5.637,34.673,34.673,0,0,0-10.193,9.827l.128-12.444h-31L359.5,177.252h35.029l7.8-40.438a49.136,49.136,0,0,0,18.173,3.4,58.28,58.28,0,0,0,25.87-5.738A54.871,54.871,0,0,0,466.3,117.963,60.558,60.558,0,0,0,477.267,92.1a60.511,60.511,0,0,0-.2-26.474q-3.02-12.177-10.972-19.426m-23.856,44.49a26.044,26.044,0,0,1-4.228,10.872,20.889,20.889,0,0,1-7.851,6.945,23.549,23.549,0,0,1-10.669,2.315,31.833,31.833,0,0,1-11.707-2.314l4.057-21.039A29.656,29.656,0,0,1,415.766,77a19.321,19.321,0,0,1,6.543-6.442,16.2,16.2,0,0,1,8.254-2.215,11.285,11.285,0,0,1,7.85,2.718,14.187,14.187,0,0,1,4.127,7.751,28.775,28.775,0,0,1-.3,11.877" fill="#fe5000"></path><path d="M543.91,108.7a19.987,19.987,0,0,1-9.06,2.114,16.343,16.343,0,0,1-9.864-2.919,14.754,14.754,0,0,1-5.536-8.153,26.7,26.7,0,0,1-.3-12.079A27.232,27.232,0,0,1,523.375,77.3a21.356,21.356,0,0,1,7.55-6.743,20.824,20.824,0,0,1,9.965-2.416q10.267,0,16.1,9.26l23.353-16.911a44.592,44.592,0,0,0-16.106-15.9q-9.864-5.633-23.151-5.637a59.759,59.759,0,0,0-25.97,5.737,55.913,55.913,0,0,0-20.232,16.105,56.92,56.92,0,0,0-10.972,24.26q-3.02,15.5,2.215,27.983a41.7,41.7,0,0,0,16.91,19.728q11.675,7.248,27.178,7.247A54.977,54.977,0,0,0,570.282,123.5l-17.515-21.339a37.294,37.294,0,0,1-8.857,6.542" fill="#fe5000"></path><path d="M659.849,46.4q-11.679-7.446-27.983-7.449A58.242,58.242,0,0,0,606.4,44.584a55.109,55.109,0,0,0-19.729,15.7A53.985,53.985,0,0,0,576.1,84.042q-3.02,15.7,2.416,28.486A42.85,42.85,0,0,0,595.83,132.66q11.875,7.347,27.782,7.348a58.061,58.061,0,0,0,25.567-5.637,55.328,55.328,0,0,0,19.628-15.7,53.941,53.941,0,0,0,10.569-23.554q3.219-16.1-2.315-28.687A44.623,44.623,0,0,0,659.849,46.4m-14.9,44.692a25.652,25.652,0,0,1-4.026,10.066,22.586,22.586,0,0,1-7.349,6.945,18.29,18.29,0,0,1-9.361,2.517,13.9,13.9,0,0,1-8.756-2.717,14.319,14.319,0,0,1-4.933-7.853,25.638,25.638,0,0,1,0-11.978A29.23,29.23,0,0,1,614.652,77.8a21.682,21.682,0,0,1,7.248-6.945,17.949,17.949,0,0,1,9.16-2.517,14,14,0,0,1,8.858,2.819,14.6,14.6,0,0,1,5.033,7.851,26.1,26.1,0,0,1,0,12.079" fill="#fe5000"></path><path d="M753.681,41.967,725.006,99.7,716.84,41.967H682.214l21.339,95.021h30.4l55.764-95.021Z" fill="#fe5000"></path><path d="M871.208,90.284q2.817-14.9-1.51-26.374A37.218,37.218,0,0,0,855.3,45.692q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.327,56.327,0,0,0-19.729,16,56.937,56.937,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983A39.63,39.63,0,0,0,793.6,132.962q11.576,7.249,28.487,7.248a75.338,75.338,0,0,0,22.749-3.423,59.889,59.889,0,0,0,18.32-9.059l-11.274-21.139a37.972,37.972,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336H869.6ZM820.275,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H810.391a32.151,32.151,0,0,1,2.838-6.341,18.692,18.692,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M947.526,40.356a32.516,32.516,0,0,0-13.79,3.02,36.941,36.941,0,0,0-11.676,8.556,38.468,38.468,0,0,0-2.808,3.418l.291-13.383h-31l-18.32,95.021h34.828L913.3,95.114a42.586,42.586,0,0,1,4.932-13.789,25.021,25.021,0,0,1,8.154-8.557,20.448,20.448,0,0,1,11.072-3.019,26.832,26.832,0,0,1,5.637.6,36.461,36.461,0,0,1,5.435,1.61L958.8,42.571a29.636,29.636,0,0,0-11.274-2.215" fill="#fe5000"></path><path d="M86.636,112.215a15.7,15.7,0,0,1-5.845,1.2A8.365,8.365,0,0,1,73.45,109.8c-1.689-2.418-2.184-5.768-1.514-10.06l4.99-24.876-22-6.738h45.193l5.029-26.167H83.335L91.613,0H33.272L55.267,6.739,49.68,35.217l22,6.74L0,41.954l32.953,10.1L29.864,68.124h13.38L37.506,97.515q-2.4,12.5.913,22.147a27.882,27.882,0,0,0,11.777,15q8.448,5.331,20.73,5.331a54.55,54.55,0,0,0,16.613-2.408,42.293,42.293,0,0,0,13.787-7.457L91.87,108.992a17.217,17.217,0,0,1-5.234,3.223" fill="#fe5000"></path></g></svg>
                                            </a>
                                        </div>
                                        <div className="account inline-flex items-center gap-5" role="none">
                                            <a className="tc-secondary-button" href="https://www.tempcover.com/under-construction">
                                                Account
                                            </a>

                                        </div>
                                        <div className="flex order-2 justify-end lg:hidden">
                                            <div className="text-dark h-[50px] transition-all border-dark-100 bg-background-100 relative z-2 h-[52px] w-[52px] rounded-md border-[1px] focus:outline-none flex items-center justify-center lg:hidden">
                                                <button
                                                    onClick={() => setIsMotorbikeMobile(false)}
                                                >
                                                    {/* Hamburger icon */}
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsMotorbikeMobile(false);
                                            setIsOpen(true);
                                        }
                                        }
                                        className="mb-4 mt-6 mx-4 flex items-center text-[16px] font-medium lg:hidden"
                                        role="menuitem"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-chevron-left"
                                        >
                                            <path d="M15 6l-6 6l6 6"></path>
                                        </svg>
                                        Back to main menu
                                    </button>



                                    <nav className="flex-1 px-4 overflow-y-auto">

                                        <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">


                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">

                                                <svg

                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-[18px] h-[18px] mt-2"
                                                    name="Motorbike"
                                                >
                                                    <path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                                    <path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                                    <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
                                                    <path d="M13 6h2l1.5 3l2 4" />
                                                </svg>
                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/temporary-Van-insurance"
                                                    role="menuitem"
                                                >
                                                    Temporary Motorbike Insurance
                                                </a>
                                            </span>

                                            {/* Van insurance links */}
                                            {[
                                                ["Learner Motorbike  Insurance", "https://www.tempcover.com/temporary-Van-insurance/one-day"],


                                            ].map(([label, link], i) => (
                                                <a
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>
                                        <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                                                <span className="stroke-black -mt-[2px] mr-2 flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 19"
                                                        width="18"
                                                        height="18"
                                                        className="stroke-dark"
                                                        name="Guide"

                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            d="M5 5.5h10m-10 4h10m-10 4h10M1 3.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/frontcover"
                                                    role="menuitem"
                                                >
                                                    Helpful Guides / FAQS
                                                </a>
                                            </span>

                                            {/* Helpful guide links */}
                                            {[
                                                ["What is AskMID?", "https://www.tempcover.com/front-cover/insurance/can-i-drive-someone-elses-car-on-my-insurance"],
                                                ["How to check if my car is insured?", "https://www.tempcover.com/front-cover/insurance/can-you-tax-a-car-with-temporary-insurance"],
                                                ["How to cancel my policy?", "https://www.tempcover.com/front-cover/driving-advice/can-you-insure-a-sorn-car"],
                                                ["Why can't I get a quote", "https://www.tempcover.com/temporary-car-insurance/new-drivers"],
                                                ["What to do when my car breaks down?", "https://www.tempcover.com/temporary-car-insurance/additional-drivers"],

                                            ].map(([label, link], i) => (
                                                <a
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium  underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>

                                    </nav>
                                </div>
                            ) : null
                    }
                    {
                        isMoreMobile ?
                            (
                                <div
                                    className={
                                        `bg-white  fixed top-0 right-0 z-50 h-full w-full  shadow-xl transform transition-transform duration-600` +
                                        (isMoreMobile ? " translate-x-0" : " translate-x-full")
                                    }
                                >
                                    <div className="flex items-center justify-between px-4 py-4 border-b">
                                        <div className="logo align-center order-1 flex grow justify-center lg:order-0 lg:justify-start">
                                            <a
                                                href="https://www.tempcover.com"
                                                title="Tempcover - Affordable cover, unbelievably fast"
                                                className="flex justify-center lg:justify-start"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 0 958.8 177.252"
                                                    style={{ maxWidth: "206px", width: "100%" }}
                                                >
                                                    <defs><clipPath id="clip-path">
                                                        <rect width="958.8" height="177.252" fill="#fe5000"></rect>
                                                    </clipPath>
                                                    </defs><g id="Group_2123-2" data-name="Group 2123" clipPath="url(#clip-path)"><path d="M201.384,90.284q2.818-14.9-1.509-26.374a37.22,37.22,0,0,0-14.4-18.218q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.336,56.336,0,0,0-19.729,16,56.949,56.949,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983a39.627,39.627,0,0,0,16.408,19.729q11.574,7.249,28.486,7.248a75.338,75.338,0,0,0,22.749-3.423,59.877,59.877,0,0,0,18.32-9.059l-11.274-21.139a37.967,37.967,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336h61.854ZM150.451,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H140.567a32.15,32.15,0,0,1,2.838-6.341,18.7,18.7,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M361.752,50.422Q354.2,38.947,337.7,38.947A39.658,39.658,0,0,0,313.637,46.7a40.794,40.794,0,0,0-8.245,8.075.2.2,0,0,0-.009-.022,26.841,26.841,0,0,0-9.663-11.375,27.543,27.543,0,0,0-15.8-4.429,36.88,36.88,0,0,0-19.83,5.838,37.294,37.294,0,0,0-10.5,9.749l.135-12.567h-31L200.4,136.988h34.827l9.463-47.913a34.922,34.922,0,0,1,3.724-10.469,19.2,19.2,0,0,1,6.039-6.744A13.508,13.508,0,0,1,262,69.547q5.633,0,7.75,4.027t.3,12.683l-9.865,50.731h35.029l9.663-50.53A31,31,0,0,1,308.3,77.1a14.56,14.56,0,0,1,13.286-7.55q5.436,0,7.651,3.825t.4,12.885l-9.662,50.731h34.827l10.468-54.154Q369.3,61.9,361.752,50.422" fill="#fe5000"></path><path d="M466.094,46.195q-7.956-7.248-19.628-7.248a36.653,36.653,0,0,0-19.729,5.637,34.673,34.673,0,0,0-10.193,9.827l.128-12.444h-31L359.5,177.252h35.029l7.8-40.438a49.136,49.136,0,0,0,18.173,3.4,58.28,58.28,0,0,0,25.87-5.738A54.871,54.871,0,0,0,466.3,117.963,60.558,60.558,0,0,0,477.267,92.1a60.511,60.511,0,0,0-.2-26.474q-3.02-12.177-10.972-19.426m-23.856,44.49a26.044,26.044,0,0,1-4.228,10.872,20.889,20.889,0,0,1-7.851,6.945,23.549,23.549,0,0,1-10.669,2.315,31.833,31.833,0,0,1-11.707-2.314l4.057-21.039A29.656,29.656,0,0,1,415.766,77a19.321,19.321,0,0,1,6.543-6.442,16.2,16.2,0,0,1,8.254-2.215,11.285,11.285,0,0,1,7.85,2.718,14.187,14.187,0,0,1,4.127,7.751,28.775,28.775,0,0,1-.3,11.877" fill="#fe5000"></path><path d="M543.91,108.7a19.987,19.987,0,0,1-9.06,2.114,16.343,16.343,0,0,1-9.864-2.919,14.754,14.754,0,0,1-5.536-8.153,26.7,26.7,0,0,1-.3-12.079A27.232,27.232,0,0,1,523.375,77.3a21.356,21.356,0,0,1,7.55-6.743,20.824,20.824,0,0,1,9.965-2.416q10.267,0,16.1,9.26l23.353-16.911a44.592,44.592,0,0,0-16.106-15.9q-9.864-5.633-23.151-5.637a59.759,59.759,0,0,0-25.97,5.737,55.913,55.913,0,0,0-20.232,16.105,56.92,56.92,0,0,0-10.972,24.26q-3.02,15.5,2.215,27.983a41.7,41.7,0,0,0,16.91,19.728q11.675,7.248,27.178,7.247A54.977,54.977,0,0,0,570.282,123.5l-17.515-21.339a37.294,37.294,0,0,1-8.857,6.542" fill="#fe5000"></path><path d="M659.849,46.4q-11.679-7.446-27.983-7.449A58.242,58.242,0,0,0,606.4,44.584a55.109,55.109,0,0,0-19.729,15.7A53.985,53.985,0,0,0,576.1,84.042q-3.02,15.7,2.416,28.486A42.85,42.85,0,0,0,595.83,132.66q11.875,7.347,27.782,7.348a58.061,58.061,0,0,0,25.567-5.637,55.328,55.328,0,0,0,19.628-15.7,53.941,53.941,0,0,0,10.569-23.554q3.219-16.1-2.315-28.687A44.623,44.623,0,0,0,659.849,46.4m-14.9,44.692a25.652,25.652,0,0,1-4.026,10.066,22.586,22.586,0,0,1-7.349,6.945,18.29,18.29,0,0,1-9.361,2.517,13.9,13.9,0,0,1-8.756-2.717,14.319,14.319,0,0,1-4.933-7.853,25.638,25.638,0,0,1,0-11.978A29.23,29.23,0,0,1,614.652,77.8a21.682,21.682,0,0,1,7.248-6.945,17.949,17.949,0,0,1,9.16-2.517,14,14,0,0,1,8.858,2.819,14.6,14.6,0,0,1,5.033,7.851,26.1,26.1,0,0,1,0,12.079" fill="#fe5000"></path><path d="M753.681,41.967,725.006,99.7,716.84,41.967H682.214l21.339,95.021h30.4l55.764-95.021Z" fill="#fe5000"></path><path d="M871.208,90.284q2.817-14.9-1.51-26.374A37.218,37.218,0,0,0,855.3,45.692q-10.068-6.743-24.56-6.745a55.407,55.407,0,0,0-24.762,5.738,56.327,56.327,0,0,0-19.729,16,56.937,56.937,0,0,0-10.871,24.56q-3.021,15.505,1.811,27.983A39.63,39.63,0,0,0,793.6,132.962q11.576,7.249,28.487,7.248a75.338,75.338,0,0,0,22.749-3.423,59.889,59.889,0,0,0,18.32-9.059l-11.274-21.139a37.972,37.972,0,0,1-24.158,8.053q-7.653,0-12.482-2.717a13.725,13.725,0,0,1-6.542-7.851,20.377,20.377,0,0,1-.956-5.336H869.6ZM820.275,66.629a18.2,18.2,0,0,1,8.858-2.315,12.186,12.186,0,0,1,7.851,2.415,11.829,11.829,0,0,1,4.027,6.946,24.636,24.636,0,0,1,.472,6.341H810.391a32.151,32.151,0,0,1,2.838-6.341,18.692,18.692,0,0,1,7.046-7.046" fill="#fe5000"></path><path d="M947.526,40.356a32.516,32.516,0,0,0-13.79,3.02,36.941,36.941,0,0,0-11.676,8.556,38.468,38.468,0,0,0-2.808,3.418l.291-13.383h-31l-18.32,95.021h34.828L913.3,95.114a42.586,42.586,0,0,1,4.932-13.789,25.021,25.021,0,0,1,8.154-8.557,20.448,20.448,0,0,1,11.072-3.019,26.832,26.832,0,0,1,5.637.6,36.461,36.461,0,0,1,5.435,1.61L958.8,42.571a29.636,29.636,0,0,0-11.274-2.215" fill="#fe5000"></path><path d="M86.636,112.215a15.7,15.7,0,0,1-5.845,1.2A8.365,8.365,0,0,1,73.45,109.8c-1.689-2.418-2.184-5.768-1.514-10.06l4.99-24.876-22-6.738h45.193l5.029-26.167H83.335L91.613,0H33.272L55.267,6.739,49.68,35.217l22,6.74L0,41.954l32.953,10.1L29.864,68.124h13.38L37.506,97.515q-2.4,12.5.913,22.147a27.882,27.882,0,0,0,11.777,15q8.448,5.331,20.73,5.331a54.55,54.55,0,0,0,16.613-2.408,42.293,42.293,0,0,0,13.787-7.457L91.87,108.992a17.217,17.217,0,0,1-5.234,3.223" fill="#fe5000"></path></g></svg>
                                            </a>
                                        </div>
                                        <div className="account inline-flex items-center gap-5" role="none">
                                            <a className="tc-secondary-button" href="https://www.tempcover.com/under-construction">
                                                Account
                                            </a>

                                        </div>
                                        <div className="flex order-2 justify-end lg:hidden">
                                            <div className="text-dark h-[50px] transition-all border-dark-100 bg-background-100 relative z-2 h-[52px] w-[52px] rounded-md border-[1px] focus:outline-none flex items-center justify-center lg:hidden">
                                                <button
                                                    onClick={() => setIsMoreMobile(false)}
                                                >
                                                    {/* Hamburger icon */}
                                                    <X className="h-5 w-5" />
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                    <button
                                        onClick={() => {
                                            setIsMoreMobile(false);
                                            setIsOpen(true);
                                        }
                                        }
                                        className="mb-4 mt-6 mx-4 flex items-center text-[16px] font-medium lg:hidden"
                                        role="menuitem"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-chevron-left"
                                        >
                                            <path d="M15 6l-6 6l6 6"></path>
                                        </svg>
                                        Back to main menu
                                    </button>



                                    <nav className="flex-1 px-4 overflow-y-auto">

                                        <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                                                <span className="stroke-dark -mt-[2px] mr-2 flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="tabler-icon tabler-icon-car"
                                                    >
                                                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                        <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                                                    </svg>
                                                </span>
                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/temporary-car-insurance"
                                                    role="menuitem"
                                                >
                                                    More Insurance
                                                </a>
                                            </span>

                                            {/* Car insurance links */}
                                            {[
                                                ["Expat Insurance", "https://www.tempcover.com/temporary-car-insurance/one-day"],
                                                ["Drive Away Insurance", "https://www.tempcover.com/temporary-car-insurance/one-month"],
                                                ["European Car Insurance", "https://www.tempcover.com/temporary-car-insurance/weekly"],


                                            ].map(([label, link], i) => (
                                                <a
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>

                                        {/* Right column */}
                                        <div className="mb-4 flex w-full flex-col items-start justify-start text-left lg:max-w-1/2">
                                            <span className="text-dark-400 group mb-3 flex w-full border-b-[1px] border-b-[#B1ADC0] pb-1 font-semibold">
                                                <span className="stroke-black -mt-[2px] mr-2 flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 19"
                                                        width="18"
                                                        height="18"
                                                        className="stroke-dark"
                                                        name="Guide"

                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            d="M5 5.5h10m-10 4h10m-10 4h10M1 3.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z"
                                                        />
                                                    </svg>
                                                </span>
                                                <a
                                                    className="group-hover:text-primary text-dark-400 w-full cursor-pointer py-2 font-semibold underline-offset-8 group-hover:font-semibold group-hover:underline"
                                                    href="https://www.tempcover.com/frontcover"
                                                    role="menuitem"
                                                >
                                                    Helpful Guides / FAQS
                                                </a>
                                            </span>

                                            {/* Helpful guide links */}
                                            {[
                                                ["What is AskMID?", "https://www.tempcover.com/front-cover/insurance/can-i-drive-someone-elses-car-on-my-insurance"],
                                                ["How to check if my car is insured?", "https://www.tempcover.com/front-cover/insurance/can-you-tax-a-car-with-temporary-insurance"],
                                                ["How to cancel my policy?", "https://www.tempcover.com/front-cover/driving-advice/can-you-insure-a-sorn-car"],
                                                ["Why can't I get a quote", "https://www.tempcover.com/temporary-car-insurance/new-drivers"],
                                                ["What to do when my car breaks down?", "https://www.tempcover.com/temporary-car-insurance/additional-drivers"],

                                            ].map(([label, link], i) => (
                                                <a
                                                    key={i}
                                                    className="hover:text-primary text-dark-200 w-full py-2 font-medium  underline-offset-8 hover:font-semibold hover:underline"
                                                    href={link}
                                                    role="menuitem"
                                                >
                                                    {label}
                                                </a>
                                            ))}
                                        </div>

                                    </nav>
                                </div>
                            ) : null
                    }
                    <nav
                        className="flex items-center justify-between gap-5 order-0 lg:order-1 lg:grow"
                        data-testid="navigation"
                    >
                        <div
                            className="bg-background-200 fixed top-[var(--nav-mobile-height)] left-full flex h-[calc(100%-var(--nav-mobile-height))] w-lvw grow-0 flex-col gap-4 px-4 pt-4 pb-16 text-center duration-500 lg:static lg:left-0 lg:h-auto lg:w-auto lg:translate-none lg:flex-row lg:gap-0 lg:overflow-y-visible lg:bg-transparent lg:px-0 lg:pt-0 lg:pb-0 lg:text-left lg:transition-none translate-x-none"
                            role="group"
                        >


                            <div
                                onMouseEnter={() => setCarOpen(true)}
                            >
                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    aria-controls="Car"
                                    className="flex w-full"
                                >
                                    <span className="flex w-full justify-between border-b-[1px] border-b-[#B1ADC0] pb-4 lg:border-0 lg:px-2 lg:pb-0">
                                        <span className="text-dark-200 font-medium">Car</span>
                                        <span className="ml-2 flex items-center justify-center">
                                            {carOpen ? (
                                                // Open icon (up chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-up transition-all"
                                                >
                                                    <path d="M18 15l-6-6l-6 6" />
                                                </svg>
                                            ) : (
                                                // Close icon (down chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-down transition-all"
                                                >
                                                    <path d="M6 9l6 6l6 -6" />
                                                </svg>
                                            )}
                                        </span>
                                    </span>
                                </button>
                                {
                                    carOpen && (
                                        <div
                                            onMouseLeave={() => setCarOpen(false)}
                                        >
                                            <CarOption />
                                        </div>
                                    )
                                }


                            </div>
                            <div onMouseEnter={() => setVanOpen(true)}
                            >
                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    aria-controls="Car"
                                    className="flex w-full"
                                >
                                    <span className="flex w-full justify-between border-b-[1px] border-b-[#B1ADC0] pb-4 lg:border-0 lg:px-2 lg:pb-0">
                                        <span className="text-dark-200 font-medium">Van</span>
                                        <span className="ml-2 flex items-center justify-center">
                                            {vanOpen ? (
                                                // Open icon (up chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-up transition-all"
                                                >
                                                    <path d="M18 15l-6-6l-6 6" />
                                                </svg>
                                            ) : (
                                                // Close icon (down chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-down transition-all"
                                                >
                                                    <path d="M6 9l6 6l6 -6" />
                                                </svg>
                                            )}
                                        </span>
                                    </span>
                                </button>
                                {
                                    vanOpen && (
                                        <div
                                            onMouseLeave={() => setVanOpen(false)}
                                        >
                                            <VanOption />
                                        </div>

                                    )
                                }

                            </div>
                            <div
                                onMouseEnter={() => setLearnOpen(true)}
                                onMouseLeave={() => setLearnOpen(false)}>

                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    aria-controls="Car"
                                    className="flex w-full"
                                >
                                    <span className="flex w-full justify-between border-b-[1px] border-b-[#B1ADC0] pb-4 lg:border-0 lg:px-2 lg:pb-0">
                                        <span className="text-dark-200 font-medium">Learner</span>
                                        <span className="ml-2 flex items-center justify-center">
                                            {learnerOpen ? (
                                                // Open icon (up chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-up transition-all"
                                                >
                                                    <path d="M18 15l-6-6l-6 6" />
                                                </svg>
                                            ) : (
                                                // Close icon (down chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-down transition-all"
                                                >
                                                    <path d="M6 9l6 6l6 -6" />
                                                </svg>
                                            )}
                                        </span>
                                    </span>
                                </button>

                                {
                                    learnerOpen && (
                                        <LearnerOption />
                                    )
                                }
                            </div>
                            <div
                                onMouseEnter={() => setmotorBikeOpen(true)}
                                onMouseLeave={() => setmotorBikeOpen(false)}>

                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    aria-controls="Car"
                                    className="flex w-full"
                                >
                                    <span className="flex w-full justify-between border-b-[1px] border-b-[#B1ADC0] pb-4 lg:border-0 lg:px-2 lg:pb-0">
                                        <span className="text-dark-200 font-medium">Motorbike</span>
                                        <span className="ml-2 flex items-center justify-center">
                                            {motorBikeOpen ? (
                                                // Open icon (up chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-up transition-all"
                                                >
                                                    <path d="M18 15l-6-6l-6 6" />
                                                </svg>
                                            ) : (
                                                // Close icon (down chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-down transition-all"
                                                >
                                                    <path d="M6 9l6 6l6 -6" />
                                                </svg>
                                            )}
                                        </span>
                                    </span>
                                </button>

                                {
                                    motorBikeOpen && (
                                        <MotorBikeOption />
                                    )
                                }
                            </div>
                            <div
                                onMouseEnter={() => setImpoundOpen(true)}
                                onMouseLeave={() => setImpoundOpen(false)}>


                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    aria-controls="Car"
                                    className="flex w-full"
                                >
                                    <span className="flex w-full justify-between border-b-[1px] border-b-[#B1ADC0] pb-4 lg:border-0 lg:px-2 lg:pb-0">
                                        <span className="text-dark-200 font-medium">Impouned</span>
                                        <span className="ml-2 flex items-center justify-center">
                                            {impoundOpen ? (
                                                // Open icon (up chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-up transition-all"
                                                >
                                                    <path d="M18 15l-6-6l-6 6" />
                                                </svg>
                                            ) : (
                                                // Close icon (down chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-down transition-all"
                                                >
                                                    <path d="M6 9l6 6l6 -6" />
                                                </svg>
                                            )}
                                        </span>
                                    </span>
                                </button>
                                {
                                    impoundOpen && (
                                        <ImpoundOption />
                                    )
                                }

                            </div>
                            <div
                                onMouseEnter={() => setMoreOpen(true)}
                                onMouseLeave={() => setMoreOpen(false)}>


                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    aria-controls="Car"
                                    className="flex w-full"
                                >
                                    <span className="flex w-full justify-between border-b-[1px] border-b-[#B1ADC0] pb-4 lg:border-0 lg:px-2 lg:pb-0">
                                        <span className="text-dark-200 font-medium">More</span>
                                        <span className="ml-2 flex items-center justify-center">
                                            {moreOpen ? (
                                                // Open icon (up chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-up transition-all"
                                                >
                                                    <path d="M18 15l-6-6l-6 6" />
                                                </svg>
                                            ) : (
                                                // Close icon (down chevron)
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="tabler-icon tabler-icon-chevron-down transition-all"
                                                >
                                                    <path d="M6 9l6 6l6 -6" />
                                                </svg>
                                            )}
                                        </span>
                                    </span>
                                </button>

                                {
                                    moreOpen && (
                                        <MoreOption />
                                    )
                                }
                            </div>



                        </div>
                        <div className="account inline-flex items-center gap-5" role="none">
                            <a className="tc-secondary-button" href="https://www.tempcover.com/under-construction">
                                Account
                            </a>
                            <a className="tc-submit-button hidden lg:block" href="https://www.tempcover.com/start-quote">
                                Get a quote
                            </a>
                        </div>
                    </nav>




                </div>
            </div>
        </div>
    );
};

export default Header;
