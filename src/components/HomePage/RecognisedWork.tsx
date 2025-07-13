"use client"
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecognisedWork = () => {
    const settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1280, // screen ≤ 1280px
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1024, // screen ≤ 1024px (tablet landscape)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768, // screen ≤ 768px (tablet portrait)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // screen ≤ 480px (mobile)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const recognisedworkdData = [
        {
            heading: "UK Business & Innovation Awards",
            subheading: "Best Customer Service",
            image: "/assets/images/recognised1.svg"
        },
        {
            heading: "Insurance Times  Awards",
            subheading: "B2C Marketing Campaign of the Year",
            image: "/assets/images/recognised2.svg"
        },
        {
            heading: "British Insurance Award",
            subheading: "Brand Management Award",
            image: "/assets/images/recognised3.svg"
        }
        ,
        {
            heading: "UK IT Industry Award",
            subheading: "Best User Engagement Project Of the Year",
            image: "/assets/images/recognised4.svg"
        }
        ,
        {
            heading: "UK Customer Experience Awards",
            subheading: "Online Customer Experience Award",
            image: "/assets/images/recognised5.svg"
        }

    ]
    return (
        <div className="w-full py-regular mb-20">
            <div className="tc-container">
                <div className="lg:w-2/3 w-full">

                    <h2 className="mt-0 text-[27px] md:max-w-2/3 md:text-[35px]">We’ve been recognised for our work with plenty of awards</h2>

                </div>
                <Slider {...settings}>
                    {
                        recognisedworkdData.map((e, index) =>
                        (
                            <div key={index} className="flex  h-40 flex-col  items-center text-center">
                                <Image width={200} height={150} src={e.image} className="object-contain" alt="" />
                                <h3 className="tc-heading-xs   ">{e.heading}</h3>
                                <div className="text-sm text-dark-300 -mt-2"><p>{e.subheading}</p></div>
                            </div>
                        ))
                    }
                </Slider>


            </div>
        </div>
    )
}
export default RecognisedWork;
