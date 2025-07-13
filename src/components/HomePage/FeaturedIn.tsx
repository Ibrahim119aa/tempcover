"use client"
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FeaturedIn = () => {
    const settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1280, // screen width <= 1280px
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1024, // screen width <= 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768, // screen width <= 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // screen width <= 480px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const images = [
        "/assets/images.webp",
        "/assets/images/featuredimage2.webp",
        "/assets/images/five.webp",
        "/assets/images/dailyexpress.webp",
        "/assets/images/timetime.webp"
    ]
    return (
        <div className="w-full py-regular">
            <div className="tc-container">
                <div className="w-2/3">
                    <span className="builder-text css-1qggkls">
                        <h2>As featured in:</h2>
                    </span>
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
export default FeaturedIn;