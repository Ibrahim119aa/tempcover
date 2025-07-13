import Image from "next/image";
import Link from "next/link";
const ExpertSay = () => {
    return (
        <div className="w-full flex light py-regular">
            <div className="tc-container">
                <div className="md:flex">
                    <div className=" items-center justify-center md:flex md:w-[30%]">
                        <div className="mr-10 flex w-full gap-4 md:flex-col md:items-center md:justify-center">
                            <div className="h-16 w-16 overflow-hidden rounded-full md:h-[100px] md:w-[100px]">
                                <Image
                                    alt="A picture of one of our experts in the temporary insurance market"
                                    src="/assets/review.webp"
                                    width={100}
                                    height={100}
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                />
                            </div>
                            <div className="flex flex-col justify-center md:text-center">
                                <p className="mt-0 mb-2 font-semibold">Marc Pell</p>
                                <p className="font-base mt-0 mb-0">Managing Director</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                        <h2 className="mt-0 mb-4">What our expert says</h2>
                        <p className="mb-5">Whether you’re borrowing a car, moving house, visiting friends and family, or learning to drive, temporary vehicle insurance can help you find the cover you need for your situation. Its quick, easy, and gives you peace of mind on the road.</p>
                        <Link
                            href="/start-quote"
                            target="_self"
                            className="inline-block w-full max-w-[250px] rounded-[8px] border border-primary-400 bg-primary py-4 px-[20px] text-center text-[18px] font-bold text-white transition-all hover:shadow-xl hover:shadow-primary/20 active:bg-primary-400 active:shadow-none group-[.dark]:bg-primary group-[.dark]:text-white group-[.dark]:border-0"
                        >
                            Get a quote
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default ExpertSay;