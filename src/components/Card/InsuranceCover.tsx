import { ReactNode } from "react"


interface InsuranceCoverData {
    heading: string,
    svg: ReactNode,
    list: string[]
}
type props = {
    data: InsuranceCoverData
}
const InsuranceCover = ({ data }: props) => {
    return (
        <div className="shadow-tc flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full ">
            <div className="gap-regular flex w-full items-center *:m-0 *:last:grow">
                <span className="min-w-12 w-12 h-12 rounded-[8px] flex group-[.dark]:text-dark-200 group-[.dark]:bg-neutral items-center justify-center text-neutral tc-icon">
                    {data.svg}
                </span>

                <h3 className="text-dark-400 text-[18px] font-semibold">{data.heading}</h3>


            </div>
            <div className="lg:gap-regular flex flex-1 my-2 flex-col lg:flex-row">
                <div className="tc-richtext min-h-32 grow py-2">
                    <ul className="!mt-0">
                        {
                            data.list.map((e, i) =>
                            (
                                <li key={i}>{e}</li>
                            ))
                        }
                    </ul></div>
            </div>

        </div>
    )
}
export default InsuranceCover;
