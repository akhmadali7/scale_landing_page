import Image from "next/image"
import Logo from '../../public/assets/Logo.svg'
import Facebook from '../../public/assets/Facebook.svg'
import X from '../../public/assets/X.svg'
import Feed from '../../public/assets/Feed.svg'
import Arrow from '../../public/assets/arrow.png'

export function Footer() {
    return (
        <div className="pt-20 pb-10">
            {/* <div className="flex flex-row items-center justify-center gap-x-3">
                <Image src={Logo} alt="Logo" />
                <p className="font-bold text-slate-700">Scale</p>
            </div> */}
            <ul className="flex flex-col items-center gap-y-8 pt-14 text-slate-800 sm:flex-row sm:gap-x-10 sm:justify-center sm:pt-10">
                <li className="flex flex-row items-center">Features</li>
                <li>Pricing <span></span></li>
                <li>Enterprise <span></span></li>
                <li>Careers <span></span></li>
            </ul>
            <p className="text-center pt-14 text-slate-800 font-medium sm:pt-5">
                ©Copyright 2024, Scale. All rights reserved
            </p>
            <div className="pt-10 flex flex-row items-center justify-center gap-x-14">
                <Image src={Facebook} alt="Facebook" />
                <Image src={Feed} alt="Feed" />
                <Image src={X} alt="X" />
            </div>
        </div >
    )
}