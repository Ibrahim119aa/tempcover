interface CoverCardType {
    heading: string | "",
    content: string | ""
}
type props = {
    data: CoverCardType
};

const CoverCard = ({ data }: props) => {
    return (
        <div className="shadow-tc flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full ">
            <div className="flex  justify-center items-center ">


                <h3 className="text-dark-400 text-[18px] font-semibold">{data.heading}</h3>


            </div>
            <div className="lg:gap-regular flex flex-1 flex-col lg:flex-row">
                <div className="text-center  min-h-28 grow py-2">
                    <p className="mt-2 text-center text-base leading-relaxed text-gray-700">
                        {data.content}
                    </p>
                </div>
            </div>

        </div>
    )
}
export default CoverCard;
