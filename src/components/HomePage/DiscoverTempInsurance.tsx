const DiscoverTempInsurance = () => {
    const items = [
        {
            label: "Who we Cover",
            href: "https://www.tempcover.com/help-centre",
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    fill="none"
                    d="m13 13.5 3.35 3.35M7 13.5l-3.35 3.35m0-12.7L7 7.5m9.35-3.35L13 7.5m-7 3a4 4 0 1 0 8 0 4 4 0 0 0-8 0m-5 0a9 9 0 1 0 18.001 0A9 9 0 0 0 1 10.5"
                />
            ),
        },
        {
            label: "FAQ",
            href: "https://www.tempcover.com/contact-us",
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    fill="none"
                    d="M6 6h8m-8 4h6m-5 5H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3l-3 3z"
                />
            ),
        },
        {
            label: "Product guides",
            href: "https://www.tempcover.com/frontcover",
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    fill="none"
                    d="M5 5.5h10m-10 4h10m-10 4h10M1 3.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z"
                />
            ),
        },
        {
            label: "Blog",
            href: "https://www.tempcover.com/about-us",
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 19.5v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1m1-11h2a2 2 0 0 1 2 2v1m-18 0v-1a2 2 0 0 1 2-2h2m3 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0m5-8a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
                />
            ),
        },
        {
            label: "Live Chat",
            href: "https://www.tempcover.com/help-centre",
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    fill="none"
                    d="m13 13.5 3.35 3.35M7 13.5l-3.35 3.35m0-12.7L7 7.5m9.35-3.35L13 7.5m-7 3a4 4 0 1 0 8 0 4 4 0 0 0-8 0m-5 0a9 9 0 1 0 18.001 0A9 9 0 0 0 1 10.5"
                />
            ),
        },
        {
            label: "Contact Us",
            href: "https://www.tempcover.com/help-centre",
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    fill="none"
                    d="m13 13.5 3.35 3.35M7 13.5l-3.35 3.35m0-12.7L7 7.5m9.35-3.35L13 7.5m-7 3a4 4 0 1 0 8 0 4 4 0 0 0-8 0m-5 0a9 9 0 1 0 18.001 0A9 9 0 0 0 1 10.5"
                />
            ),
        },
    ];

    return (
        <div className="w-full py-12">
            <div className="tc-container">
                <div className="lg:w-2/3 w-full mb-6">
                    <h2 className="text-xl md:text-2xl font-semibold">
                        Discover more about temporary insurance
                    </h2>
                </div>

                <div className="flex flex-wrap gap-4 justify-start">
                    {items.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="border-dark-100 bg-background-200 group text-dark hover:border-primary active:bg-background-300 md:bg-background-100 flex items-center text-[15px] font-bold rounded-md border px-3 py-2 transition w-full sm:w-auto"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 21"
                                width="20"
                                height="21"
                                className="stroke-dark-200 mr-2 h-4 w-4"
                            >
                                {item.icon}
                            </svg>
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiscoverTempInsurance;
