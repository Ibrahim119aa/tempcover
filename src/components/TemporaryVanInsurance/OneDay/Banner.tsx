import Image from "next/image";


interface BannerData {
    heading: string,
    subheading: string,
    list: string[],
    image: string,
    isButton: boolean
}
type props = {
    data: BannerData
}

const Banner = ({ data }: props) => {
    return (
        <div className="w-full  ">
            <div className="tc-container py-8">
                <div className="grid grid-col-2 md:mx-auto md:grid-cols-2  md:grid-rows-[1fr_auto_auto] md:gap-x-4">
                    <div>
                        <h1 className="order-2  !mt-0  !mb-4 ">{data.heading}</h1>
                        <div className="order-3    ">
                            <span className="tc-heading-sm  ">{data.subheading}</span>
                        </div>
                        <div className="order-4 mb-5  md:mb-0">

                            <div className="mt-12 md:mb-10">
                                <ul className="!m-0 !p-0">
                                    {
                                        data.list.map((e,i) =>
                                        (
                                            <li key={i} className=" flex items-center md:max-w-[80%]">
                                                <div className="tc-icon mr-4 rounded-md p-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#FFF"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="tabler-icon tabler-icon-check"
                                                    >
                                                        <path d="M5 12l5 5l10 -10" />
                                                    </svg>
                                                </div>
                                                {e}
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="relative order-1 mb-6 flex min-h-40 items-center justify-center md:order-4 md:row-span-full md:row-start-1 md:col-start-2">
                        <Image
                            src={data.image}
                            className="object-cover  h-[25rem]"
                            width={600}
                            height={400}
                            alt=""
                        />
                    </div>

                </div>
                {
                    data.isButton ?
                        (
                            <div className="my-5 flex justify-center">
                                <a
                                    href="https://www.tempcover.com/start-quote"
                                    target="_self"
                                    className="inline-block rounded-[8px] border border-primary-400 text-center font-bold transition-all py-4 px-[20px] w-full max-w-[250px] text-[18px] bg-primary text-white hover:shadow-xl hover:shadow-primary/20 active:bg-primary-400 active:shadow-none group-[.dark]:bg-primary group-[.dark]:text-white group-[.dark]:border-0"
                                >
                                    Get a quote
                                </a>
                            </div>

                        ) : null
                }
            </div>

        </div>

    )
}
export default Banner;