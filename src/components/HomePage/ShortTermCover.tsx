

const cardsData = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-check"
                aria-hidden="true"
            >
                <path d="M5 12l5 5l10 -10"></path>
            </svg>
        ),
        title: "Temporary car insurance",
        description: `Drivers aged 17–78 can easily find flexible&nbsp;<a href="https://www.tempcover.com/temporary-car-insurance" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ff5100] transition-colors">short-term car insurance</a>&nbsp;from 1 hour to 28 days – ideal for a range of everyday situations.`,
        link: "/start-quote",
        buttonText: "Get a quote",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-truck " aria-hidden="true"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path></svg>
        ),
        title: "Temporary van insurance",
        description: `Tradesmen or drivers looking to borrow a van, aged 17-77, can find temporary insurance from 1 hour to 28 days&nbsp;<a href="https://www.tempcover.com/temporary-van-insurance" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ff5100] transition-colors">temporary van insurance</a>.`,
        link: "/start-quote",
        buttonText: "Get a quote",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-package " aria-hidden="true"><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>),
        title: "Temporary courier insurance",
        description: `Get flexible, short-term cover for a range of delivery jobs including single or multi-stop deliveries with&nbsp;<a href="https://www.tempcover.com/temporary-courier-insurance" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ff5100] transition-colors">temporary courier insurance</a>.`,
        link: "/start-quote",
        buttonText: "Get a quote",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-prison " aria-hidden="true"><path d="M18 4v16"></path><path d="M14 4v16"></path><path d="M6 4v5"></path><path d="M6 15v5"></path><path d="M10 4v5"></path><path d="M11 9h-6v6h6z"></path><path d="M10 15v5"></path><path d="M8 12h-.01"></path></svg>),
        title: "Impounded vehicle insurance",
        description: `Time is crucial when your vehicle is impounded. Don't waste that time – get covered quickly with&nbsp;<a href="https://www.tempcover.com/impounded-vehicle-insurance" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ff5100] transition-colors">impounded vehicle insurance</a>.`,
        link: "/start-quote",
        buttonText: "Get a quote",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-motorbike " aria-hidden="true"><path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4"></path><path d="M13 6h2l1.5 3l2 4"></path></svg>),
        title: "Temporary bike insurance",
        description: `Get up to 7 days cover with&nbsp;<a href="https://www.tempcover.com/temporary-motorcycle-insurance" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ff5100] transition-colors">temporary motorbike insurance</a>. It's ideal for occasional riders.`,
        link: "/start-quote",
        buttonText: "Get a quote",
    },
    {
        icon: (<svg width="33" stroke="#fff" fill="none" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" ><path d="M5.66669 7.99998C5.66669 7.29274 5.94764 6.61446 6.44774 6.11436C6.94783 5.61426 7.62611 5.33331 8.33335 5.33331H24.3334C25.0406 5.33331 25.7189 5.61426 26.219 6.11436C26.7191 6.61446 27 7.29274 27 7.99998V24C27 24.7072 26.7191 25.3855 26.219 25.8856C25.7189 26.3857 25.0406 26.6666 24.3334 26.6666H8.33335C7.62611 26.6666 6.94783 26.3857 6.44774 25.8856C5.94764 25.3855 5.66669 24.7072 5.66669 24V7.99998Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.3334 10V21H21.3334" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>),
        title: "Temporary learner insurance",
        description: `Get extra practice without the worry.&nbsp;<a href="https://www.tempcover.com/temporary-learner-insurance" target="_blank"  className="underline hover:text-[#ff5100] transition-colors">Temporary learner insurance</a>&nbsp;provides fully comprehensive short-term cover and protects the owner's NCD.`,
        link: "/start-quote",
        buttonText: "Get a quote",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-plane-tilt " aria-hidden="true"><path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z"></path></svg>),
        title: "Temporary expats insurance",
        description: `With tailored&nbsp;<a href="https://www.tempcover.com/temporary-expats-insurance" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ff5100] transition-colors">temporary expats insurance</a>, returning ex-pats can get flexible and affordable temp car insurance if they want to drive while in the UK.`,
        link: "/start-quote",
        buttonText: "Get a quote",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-coin-euro " aria-hidden="true"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M14.401 8c-.669 -.628 -1.5 -1 -2.401 -1c-2.21 0 -4 2.239 -4 5s1.79 5 4 5c.9 0 1.731 -.372 2.4 -1"></path><path d="M7 10.5h4"></path><path d="M7 13.5h4"></path></svg>),
        title: "Temporary European car insurance",
        description: `We offer drivers short-term car insurance that covers them to drive across all EU member states, along with other European countries.`,
        link: "/european-car-insurance",
        buttonText: "Read more",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-coin-euro " aria-hidden="true"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M14.401 8c-.669 -.628 -1.5 -1 -2.401 -1c-2.21 0 -4 2.239 -4 5s1.79 5 4 5c.9 0 1.731 -.372 2.4 -1"></path><path d="M7 10.5h4"></path><path d="M7 13.5h4"></path></svg>),
        title: "Temporary student car insurance",
        description: `University students can save money with our short-term car insurance – perfect for when you're home from uni and want to use the folks' car.`,
        link: "/student-car-insurance",
        buttonText: "Read more",
    },
]

export default function ShortTermCover() {
    return (
        <div className="w-full">
            <div className=" py-5 tc-container">
                <div>
                    <h2 className="mt-0 mb-6 lg:w-[50%] w-full">
                        Choose short term cover  that’s right for you
                    </h2>
                </div>
                <div className="grid my-3 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cardsData.map((card, index) => {

                        return (
                            <div
                                key={index}
                                className="shadow-tc  rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 w-full h-full"
                            >
                                <div className="gap-regular flex w-full items-center *:m-0 *:last:grow">
                                    <span className="min-w-12 w-12 h-12 rounded-[8px] flex group-[.dark]:text-dark-200 group-[.dark]:bg-neutral items-center justify-center text-neutral tc-icon">
                                        {card.icon}
                                    </span>
                                    <h3 className="text-dark-400 text-[18px] font-semibold">{card.title}</h3>
                                </div>
                                <div className="lg:gap-regular flex flex-1 my-2 flex-col lg:flex-row">
                                    <div
                                        className="tc-richtext min-h-32 grow py-2"
                                        dangerouslySetInnerHTML={{ __html: card.description }}
                                    />
                                </div>
                                <div>
                                    <a
                                        href={card.link}
                                        target="_self"
                                        className=" rounded-[8px] border-1 text-center transition-all p-4 font-bold lg:min-w-[270px] min-w-full bg-neutral text-dark-200 border-dark-100 hover:border-primary inline-block active:bg-neutral-400 hover:shadow-lg hover:shadow-primary/10 active:shadow-none group-[.dark]:bg-neutral group-[.dark]:text-dark group-[.dark]:border-0 mt-5"
                                        aria-description={card.title}
                                    >
                                        {card.buttonText}
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
