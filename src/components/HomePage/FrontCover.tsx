import Image from "next/image";
const FrontCover = () => {

    return (
        <div className="w-full">
            <div className="mx-auto py-5 tc-container">
                <h2 className="mt-0 mb-6  md:max-w-2/3">Read the latest news on Front Cover</h2>
                <div className="grid my-3 grid-cols-3 gap-4">
                    <div className="shadow-tc flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full ">

                        <div className="aspect-w-16 aspect-h-9 relative h-full min-h-[200px] overflow-hidden rounded-md">
                            <Image
                                src={"/assets/travel1.webp"}
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
                                    Easter Travel Guide 2025
                                </h3>
                            </div>

                            <a
                                href="https://www.tempcover.com/front-cover/easter-travel-guide-2025"
                                target="_self"
                                className="inline-block rounded-[8px] border border-dark-100 text-center font-bold transition-all p-4 min-w-full lg:min-w-[270px] bg-neutral text-dark-200 hover:border-primary active:bg-neutral-400 hover:shadow-lg hover:shadow-primary/10 active:shadow-none group-[.dark]:bg-neutral group-[.dark]:text-dark group-[.dark]:border-0"
                            >
                                Go to article
                            </a>
                        </div>

                    </div>
                   <div className="shadow-tc flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full ">

                        <div className="aspect-w-16 aspect-h-9 relative h-full min-h-[200px] overflow-hidden rounded-md">
                            <Image
                                src={"/assets/travel1.webp"}
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
                                    Easter Travel Guide 2025
                                </h3>
                            </div>

                            <a
                                href="https://www.tempcover.com/front-cover/easter-travel-guide-2025"
                                target="_self"
                                className="inline-block rounded-[8px] border border-dark-100 text-center font-bold transition-all p-4 min-w-full lg:min-w-[270px] bg-neutral text-dark-200 hover:border-primary active:bg-neutral-400 hover:shadow-lg hover:shadow-primary/10 active:shadow-none group-[.dark]:bg-neutral group-[.dark]:text-dark group-[.dark]:border-0"
                            >
                                Go to article
                            </a>
                        </div>

                    </div>
                     <div className="shadow-tc flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full ">

                        <div className="aspect-w-16 aspect-h-9 relative h-full min-h-[200px] overflow-hidden rounded-md">
                            <Image
                                src={"/assets/travel1.webp"}
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
                                    Easter Travel Guide 2025
                                </h3>
                            </div>

                            <a
                                href="https://www.tempcover.com/front-cover/easter-travel-guide-2025"
                                target="_self"
                                className="inline-block rounded-[8px] border border-dark-100 text-center font-bold transition-all p-4 min-w-full lg:min-w-[270px] bg-neutral text-dark-200 hover:border-primary active:bg-neutral-400 hover:shadow-lg hover:shadow-primary/10 active:shadow-none group-[.dark]:bg-neutral group-[.dark]:text-dark group-[.dark]:border-0"
                            >
                                Go to article
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default FrontCover;
