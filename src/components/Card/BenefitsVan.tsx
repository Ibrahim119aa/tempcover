interface BenefitsCarType {
    heading: string | "",
    content: string | ""
}
type props = {
    data: BenefitsCarType
};

const BenefitsVan = ({ data }: props) => {
    return (
        <div className="shadow-tc flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full ">
            <div className="gap-regular flex w-full items-center *:m-0 *:last:grow">
                <span className="min-w-12 w-12 h-12 rounded-[8px] flex group-[.dark]:text-dark-200 group-[.dark]:bg-neutral items-center justify-center text-neutral tc-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill=""
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-check"
                        aria-hidden="true"
                    >
                        <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                </span>

                <h3 className="text-dark-400 text-[18px] font-semibold">Its cost-effective</h3>


            </div>
            <div className="lg:gap-regular flex flex-1 flex-col lg:flex-row">
            <div className="tc-richtext min-h-32 grow py-2">
            <p className="mt-2">{data.content}</p></div></div>

        </div>
    )
}
export default  BenefitsVan;
