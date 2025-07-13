"use client"
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const RecognisedWorkOneDay = () => {
    const settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1280, // screens smaller than 1280px
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1024, // screens smaller than 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768, // screens smaller than 768px (tablets)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // screens smaller than 480px (mobile)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const images = [
        "/assets/images/slider1.webp",
        "/assets/images/slider2.webp",
        "/assets/images/slider3.webp",
        "/assets/images/slider4.webp",
        "/assets/images/Slider5.webp"
    ]
    return (
        <div className="w-full py-regular ">
            <div className="tc-container">
                <div className="lg:w-[75%] w-full  mb-8">

                    <h2 className="mt-0 text-[27px] md:max-w-2/3 md:text-[35px]">We’ve been recognised for our work with plenty of awards</h2>

                </div>
                <Slider {...settings}>
                    {
                        images.map((e, i) =>
                        (
                            <div key={i} className="flex  h-40   items-center text-center">
                                <Image width={200} height={150} src={e} className="object-contain" alt="" />

                            </div>
                        ))
                    }

                </Slider>
            </div>
        </div>
    )
}
export default RecognisedWorkOneDay;
