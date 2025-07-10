import Link from "next/link";

const AffordableCover = () => {
    return (
        <div className="w-full mt-3 py-regular bg-[#59214d]">
            <div className="tc-container">
                <div className="w-full   py-12 lg:w-1/2">
                    <div className="tc-heading-xs !text-white mt-0">Affordable cover, unbelievably fast</div>

                    <h2 className="!text-white tc-heading-2xl mt-0 mb-6 md:mb-8">
                        Find out how <br /> we can help you
                    </h2>

                    <Link
                        href="/start-quote"
                       
                        className="inline-block mt-4 w-full max-w-[250px] px-5 py-4 text-[18px] font-bold text-white text-center transition-all rounded-[8px] border border-[#ff5100] bg-primary hover:shadow-xl hover:shadow-primary/20 active:bg-primary-400 active:shadow-none group-[.dark]:bg-primary group-[.dark]:text-white group-[.dark]:border-0"
                    >
                        Get a quote
                    </Link>
                </div>



            </div>
        </div>
    )
}
export default AffordableCover;
