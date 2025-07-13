
import Link from "next/link"
interface NavigationHeading
{
    heading:string
}
type props=
{
    data:NavigationHeading
}
const NavigationHeader = ({data}:props) => {
    return (
        <div className="border-dark-100 border-b">
            <div className="tc-container my-1">
                <ul className="text-dark !m-0 flex  !list-none  !pl-0">
                    {/* Mobile view only */}
                    <li className="hover:text-primary m-0 flex items-center whitespace-nowrap underline underline-offset-4 sm:hidden">
                        <Link href="/temporary-van-insurance" passHref>
                            <span className="flex items-center">
                                ...
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-right mx-1 h-4 w-4"
                                >
                                    <path d="M9 6l6 6l-6 6"></path>
                                </svg>
                            </span>
                        </Link>
                    </li>

                    {/* Desktop view */}
                    <li className="m-0 !pl-0  hidden sm:flex">
                        <ul className="!m-0 flex items-center !pl-0">
                            <li className="hover:text-primary m-0 flex items-center whitespace-nowrap underline underline-offset-4">
                                <Link href="https://www.tempcover.com/" target="_blank" rel="noopener noreferrer">
                                    Home
                                </Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-right mx-1 h-4 w-4"
                                >
                                    <path d="M9 6l6 6l-6 6"></path>
                                </svg>
                            </li>
                            <li className="hover:text-primary m-0 flex items-center whitespace-nowrap underline underline-offset-4">
                                <Link href="/temporary-van-insurance">
                                    Temporary Van Insurance
                                </Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-right mx-1 h-4 w-4"
                                >
                                    <path d="M9 6l6 6l-6 6"></path>
                                </svg>
                            </li>
                            <li className="m-0 hidden sm:flex" data-testid="breadcrumb-page">
                                {data.heading}
                            </li>
                        </ul>
                    </li>



                </ul>
            </div>
        </div>
    )

}

export default NavigationHeader;