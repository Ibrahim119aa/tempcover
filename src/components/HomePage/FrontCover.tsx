"use client"
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FrontCover = () => {
    const settings = {
        dots: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // for screens ≤ 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // for tablets ≤ 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const frontcoverData = [
        {
            heading: "Easter Travel Guide 2025",
            image: "/assets/travel1.webp"
        },
        {
            heading: "10 road trip games to play in the car  with all",
            image: "/assets/images/frontcover2.webp"
        },
        {
            heading: "The ultimate guide to the best vans for new driver",
            image: "/assets/images/frontcover3.webp"
        },
    ]
    return (
        <div className="w-full">
            <div className="mx-auto py-5 tc-container">
                <h2 className="mt-0 mb-6  md:max-w-2/3">Read the latest news on Front Cover</h2>
                <Slider {...settings} >
                    {
                        frontcoverData.map((e, i) =>
                        (
                            <div key={i} className="px-3 ">
                                <div className=" shadow-tc  flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400  ">

                                    <div className="aspect-w-16 aspect-h-9 relative h-full min-h-[200px] overflow-hidden rounded-md">
                                        <Image
                                            src={e.image}
                                            className="object-cover min-h-[200px]"
                                            width={350}
                                            height={350}
                                            alt=""
                                        ></Image>
                                    </div>
                                    <div className="flex  flex-col ">
                                        <div className="h-fit flex-1">
                                            <div role="presentation" className="py-2"></div>
                                            <h3 className="tc-heading-xs mb-0 md:min-h-[2.4em] my-2">
                                                {e.heading}
                                            </h3>
                                        </div>

                                        <a
                                            href=""
                                            target="_self"
                                            className="inline-block rounded-[8px] border border-dark-100 text-center font-bold transition-all p-4 min-w-full lg:min-w-[270px] bg-neutral text-dark-200 hover:border-primary active:bg-neutral-400 hover:shadow-lg hover:shadow-primary/10 active:shadow-none group-[.dark]:bg-neutral group-[.dark]:text-dark group-[.dark]:border-0"
                                        >
                                            Go to article
                                        </a>
                                    </div>

                                </div>
                            </div>

                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
export default FrontCover;
