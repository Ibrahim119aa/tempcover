import Image from "next/image";
const RecognisedWork = () => {
    return (
        <div className="w-full py-regular mb-20">
            <div className="tc-container">
                <div className="w-2/3">

                    <h2 className="mt-0 text-[27px] md:max-w-2/3 md:text-[35px]">We’ve been recognised for our work with plenty of awards</h2>

                </div>
                <div className="grid grid-cols-4 mt-4 ">
                    <div className="flex  h-40 flex-col  items-center text-center">
                        <Image width={200} height={150} src="/assets/images.webp" className="object-contain" alt="" />
                        <h3 className="tc-heading-xs   ">UK Business &amp; Innovation Awards</h3>
                        <div className="text-sm text-dark-300 -mt-2"><p>Best Customer Service</p></div>
                    </div>
                    <div className="flex  h-40 flex-col  items-center text-center">
                        <Image width={200} height={150} src="/assets/images.webp" className="object-contain" alt="" />
                        <h3 className="tc-heading-xs   ">UK Business &amp; Innovation Awards</h3>
                        <div className="text-sm text-dark-300 -mt-2"><p>Best Customer Service</p></div>
                    </div>
                    <div className="flex  h-40 flex-col  items-center text-center">
                        <Image width={200} height={150} src="/assets/images.webp" className="object-contain" alt="" />
                        <h3 className="tc-heading-xs   ">UK Business &amp; Innovation Awards</h3>
                        <div className="text-sm text-dark-300 -mt-2"><p>Best Customer Service</p></div>
                    </div>
                    <div className="flex  h-40 flex-col  items-center text-center">
                        <Image width={200} height={150} src="/assets/images.webp" className="object-contain" alt="" />
                        <h3 className="tc-heading-xs   ">UK Business &amp; Innovation Awards</h3>
                        <div className="text-sm text-dark-300 -mt-2"><p>Best Customer Service</p></div>
                    </div>





                </div>

            </div>
        </div>
    )
}
export default RecognisedWork;
