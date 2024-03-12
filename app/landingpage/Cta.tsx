import Image from "next/image"
import BgImage from '../../public/assets/BG_Image.png'
import Arrow from '../../public/assets/arrow.png'

export function Cta() {
    return (
        <div className="pt-16 text-white">
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-800 to-indigo-900 rounded-xl flex justify-center">
                <div className="pb-10 pt-10  flex flex-col items-center">
                    <h2 className="font-myserif font-bold text-3xl text-center px-6 lg:text-4xl md:w-7/12 ">Monitor your website like a pro</h2>
                    <p className="text-center pt-4 pb-10 px-4 md:pb-6 md:w-2/3 font-medium text-base md:text-xl">Join over 800+ happy site owners boosting productivity and efficiency!</p>
                    <div className="flex flex-col items-center align-middle md:flex-row md:gap-x-10 md:pt-3">
                        <a href=""><button className="bg-white px-10  py-3 text-slate-500 rounded-md lg:text-lg font-bold ">Try for me</button></a>
                        <a href=""><h3 className="flex flex-row items-center gap-x-4 pt-6 md:pt-0 font-medium lg:text-lg">Contact Sales <span><Image src={Arrow} alt="" /></span></h3></a>
                    </div>
                </div>
            </div>
        </div>
    )
}