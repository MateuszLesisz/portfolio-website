import { MdClose } from "react-icons/md";
import Image from "next/image"

const Model = ({state, details, toggleModel}) => {
    return state ? (
        <div className="fixed inset-0 w-full h-screen bg-black/25 p-4 backdrop-blur z-[99999999999] flex items-center
        justify-center">
            <MdClose onClick={toggleModel}
                     className="cursor-pointer text-[25px] absolute top-6 right-6 text-black dark:text-white"/>
            <div className="max-w-screen-xl w-full bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-100
            dark:border-zinc-700 max-h-[80vh]">
                <div className="flex flex-wrap lg:space-x-6">
                    <div className="relative w-full lg:w-[400px] rounded-lg overflow-hidden">
                        <div className="pt-[56.25%]">
                            <Image src={details.image}
                                   fill
                                   className="w-full h-full absolute inset-0"
                                   alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        ""
    )
}
export default Model;