import Image from "next/image";
const FeaturedIn = () => {
    return (
        <div className="w-full py-regular">
            <div className="tc-container">
                <div className="w-2/3">
                    <span className="builder-text css-1qggkls">
                        <h2>As featured in:</h2>
                    </span>
                </div>
                <div className="grid grid-cols-4 mt-4 ">
                    <div className="flex  h-40 flex-col  items-center text-center">
                        <Image width={200} height={150} src="/assets/images.webp" className="object-contain" alt="" />

                    </div>


                    <div className="flex  h-40 flex-col  items-center text-center">
                        <Image width={200} height={150} src="/assets/images.webp" className="object-contain" alt="" />

                    </div>

                    <div className="flex  h-40 flex-col  items-center text-center">
                        <Image width={200} height={150} src="/assets/images.webp" className="object-contain" alt="" />

                    </div>
                    <div className="flex  h-40 flex-col  items-center text-center">
                        <Image width={200} height={150} src="/assets/images.webp" className="object-contain" alt="" />

                    </div>


                </div>

            </div>
        </div>
    )
}
export default FeaturedIn;
