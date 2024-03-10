import Image from "next/image"; //this is an feature
import Logo from "../../public/assets/Logo.svg"
import User from "../../public/assets/User.svg"
import Menu from "../../public/assets/Menu.svg"

const navLinks = [
    { name: 'Features', link: '/#features' },
    { name: 'Pricing', link: '/#' },
    { name: 'Enterprise', link: '/#' },
    { name: 'Careers', link: '/#' },
]



export function Navbar() {
    return (

        // lg:container lg:mx-auto -> coba zoom out dengan mx-auto jadi center dengan container jadi ada max-widthnya
        <nav className="flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-20">

            <div className="flex flex-row items-center">
                <a href="/"><Image src={Logo} alt="logo" /></a>
                <div className="hidden gap-x-12 pl-[74px] lg:flex">
                    {navLinks.map((item, index) => (
                        <a href={item.link} className="text-blue-950 font-medium" key={index}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center gap-x-5" >
                <a href="/register" className="hidden lg:block pr-12">
                    <h1 className="font-medium text-blue-950">Open an Account</h1>
                </a>

                <a href="/sign-in" className="flex flex-row items-center gap-x-2"><Image src={User} alt="User" />
                    <span className="hidden lg:block font-medium text-blue-950 ">Sign in</span></a>

                <div className="lg:hidden">
                    <Image src={Menu} alt="menu" />
                </div>
            </div>

        </nav >
    );
}