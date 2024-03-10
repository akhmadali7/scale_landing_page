import Image from 'next/image'
import Feature1 from '../../public/assets/feature-1.svg'
import Feature2 from '../../public/assets/feature-2.svg'
import Feature3 from '../../public/assets/feature-3.svg'
import Check from '../../public/assets/check.svg'
import BlueButton from '../../public/assets/blue-button.svg'
import GreenButton from '../../public/assets/green-button.svg'
import PinkButton from '../../public/assets/pink-button.svg'

export function Features() {
    return (
        <div className='flex flex-col pb-10 pt-20' id='features'>

            <div className="flex flex-col gap-y-14 mx-auto items-center lg:pt-[50px] lg:flex-row lg:items-end lg:gap-x-6 xl:items-start">
                <div className='pt-14 md:w-1/2 lg:pt-14 lg:pr-14'>
                    <h3 className="font-medium text-sky-500 lg:text-[18px]">Sales Monitoring</h3>
                    <h1 className="font-myserif pt-2 text-2xl font-medium text-slate-900 lg:text-[42px] lg:leading-[58px]">Keep track of your sales performance effortlessly.</h1>
                    <Image src={Feature1} alt="" className='pt-4 lg:hidden' />
                    <p className='pt-6 text-slate-700  lg:text-[18px]'>
                        Stay on top of things and revamp your work process with our game-changing feature. Get a birds eye view with our customizable dashboard.
                    </p>
                    <ul className='flex flex-col gap-y-3 pt-4 lg:text-[18px]'>
                        <li className='flex flex-row items-center gap-x-4 text-slate-800'><span><Image src={Check} alt="" /></span>Real-time insights into sales figures.</li>
                        <li className='flex flex-row items-center gap-x-4 text-slate-800'><span><Image src={Check} alt="" /></span>Detailed reports for analysis.</li>
                        <li className='flex flex-row items-center gap-x-4 text-slate-800'><span><Image src={Check} alt="" /></span>Customizable alerts for important metrics.</li>
                    </ul>
                    <p className='flex flex-row gap-x-2  items-center pt-6 text-sky-600 font-medium lg:text-[18px]'>
                        Learn More <span><Image src={BlueButton} alt='' /></span>
                    </p>
                </div>
                <Image src={Feature1} alt="" className='hidden  w-1/2 lg:block' />
            </div>

            <div className="flex flex-col gap-y-14 mx-auto items-center lg:pt-[50px] lg:flex-row-reverse lg:items-end lg:gap-x-6 xl:items-start">
                <div className='pt-14 md:w-1/2 lg:pt-14 lg:pl-14'>
                    <h3 className="font-medium text-green-500 lg:text-[18px]">Consumer Support</h3>
                    <h1 className="font-myserif pt-2 text-2xl font-medium text-slate-900 lg:text-[42px] lg:leading-[58px]">Elevate your customer service experience.</h1>
                    <Image src={Feature2} alt="" className='pt-4 lg:hidden' />
                    <p className='pt-6 text-slate-700  lg:text-[18px]'>
                        Elevate your customer service experience by managing all customer inquiries seamlessly in one place, enabling your team to respond promptly and effectively.
                    </p>
                    <ul className='flex flex-col gap-y-3 pt-4 lg:text-[18px]'>
                        <li className='flex flex-row items-center gap-x-4 text-slate-800'><span><Image src={Check} alt="" /></span>Instant access to customer inquiries.</li>
                        <li className='flex flex-row items-center gap-x-4 text-slate-800'><span><Image src={Check} alt="" /></span>Streamlined ticket management.</li>
                        <li className='flex flex-row items-center gap-x-4 text-slate-800'><span><Image src={Check} alt="" /></span>Integration with CRM tools for seamless support.</li>
                    </ul>
                    <p className='flex flex-row gap-x-2  items-center pt-6 text-green-500 font-medium lg:text-[18px]'>
                        Learn More <span><Image src={GreenButton} alt='' /></span>
                    </p>
                </div>
                <Image src={Feature2} alt="" className='hidden  w-1/2 lg:block' />
            </div>

            <div className="flex flex-col gap-y-14 mx-auto items-center lg:pt-[50px] lg:flex-row lg:items-end lg:gap-x-6 xl:items-start">
                <div className='pt-14 md:w-1/2 lg:pt-14 lg:pr-14'>
                    <h3 className="font-medium text-pink-500 lg:text-[18px]">Website Performance</h3>
                    <h1 className="font-myserif pt-2 text-2xl font-medium text-slate-900 lg:text-[42px] lg:leading-[58px]">Optimize your website for success.</h1>
                    <Image src={Feature3} alt="" className='pt-4 lg:hidden' />
                    <p className='pt-6 text-slate-700  lg:text-[18px]'>
                        Optimize your website for success by monitoring its uptime and performance round the clock, ensuring it`s always available and responsive to your visitors.
                    </p>


                    <div className='flex flex-row w-full items-center gap-x-14 pt-6 '>
                        <div className='w-auto'>
                            <h1 className='text-xl lg:text-2xl font-medium'>100+</h1>
                            <p className='text-sm text-slate-600 pt-2'>Subscibers</p>
                        </div>
                        <div className='w-auto'>
                            <h1 className='text-xl lg:text-2xl font-medium'>800+</h1>
                            <p className='text-sm text-slate-600 pt-2'>Project Finished</p>
                        </div>
                        <div className='w-auto'>
                            <h1 className='text-xl lg:text-2xl font-medium'>50K+</h1>
                            <p className='text-sm text-slate-600 pt-2'>Orders</p>
                        </div>
                    </div>
                    <p className='flex flex-row gap-x-2  items-center pt-6 text-pink-500 font-medium lg:text-[18px]'>
                        Learn More <span><Image src={PinkButton} alt='' /></span>
                    </p>
                </div>
                <Image src={Feature3} alt="" className='hidden rounded-2xl w-1/2 lg:block' />
            </div>


        </div>

    )
}