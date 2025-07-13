interface ReviewData {
    heading: string
}
type props = {
    data: ReviewData
}
const Reviews = ({ data }: props) => {
    const heading = data?.heading || "Don’t just take our word for it, hear it from over 40,000 happy drivers...";

    const reviewData = [
        {
            stars: 4,
            title: "Great company",
            content:
                "Great company, easy to use, straightforward, organised, and no silly irrelevant questions. Cheap and reliable insurance company. Ever need temporary cover — these guys will be the ones I choose!",
            author: "Phil",
        },
        {
            stars: 3,
            title: "Quick and simple insurance",
            content:
                "It was so simple to get insurance. Clear and easy guidance insured within minutes which allowed peace of mind when picking up new car on a weekend.",
            author: "Paul",
        },
        {
            stars: 3,
            title: "Always quick and easy to get insurance...",
            content: "Always quick and easy to get insurance fast trusty cover can't go wrong use temp cover every time",
            author: "Mr Vaughan",
        },
    ];

    return (
        <div className="w-full py-regular">
            <div className="tc-container">
                <div className="lg:w-2/3 w-full">
                    <span className="builder-text css-1qggkls">
                        <h2>{heading}</h2>
                        <p>We also currently hold an ‘Excellent’ rating on&nbsp;<a href="https://uk.trustpilot.com/review/tempcover.com" rel="noopener noreferrer" target="_blank"><strong>Trustpilot</strong></a>&nbsp;with over 40,000 reviews.</p></span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-4 gap-4">
                    {
                        reviewData.map((e, index) => (
                            <div key={index} className="shadow-tc flex grow-0 flex-col rounded-[16px] border-1 p-4 *:first:mt-0 *:last:mb-0 md:p-6 bg-neutral group-[.dark]:bg-secondary-200 group-[.dark]:text-neutral group-[.dark]:border-secondary-400 border-background-400 h-full">
                                <blockquote className="flex flex-col items-center justify-center gap-2 text-center">
                                    <span className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                stroke="none"
                                                className={`w-5 h-5 ${i < e.stars ? "fill-purple-400 text-purple-400" : "fill-gray-200 text-gray-200"}`}

                                            >
                                                <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                                            </svg>
                                        ))}
                                    </span>

                                    <p className="text-dark font-medium">{e.title}</p>

                                    <p className="text-[var(--color-dark-200)] mt-2">
                                        {e.content}
                                    </p>

                                    <p className="text-[var(--color-dark-300)] font-medium mt-0 mb-0">{e.author}</p>
                                </blockquote>

                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}
export default Reviews;
