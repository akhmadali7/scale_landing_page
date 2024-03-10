import Image from 'next/image'
import BlurArrow from "../../public/assets/blue-button.svg"
import Gradient from "../../public/assets/Gradient.svg"
import HeroImage from "../../public/assets/Image.svg"
import Google from '../../public/assets/Google.svg'
import Slack from '../../public/assets/Slack.svg'
import Trustpilot from '../../public/assets/Trustpilot.svg'
import CNN from '../../public/assets/CNN.svg'
import Clutch from '../../public/assets/Clutch.svg'



export function Hero() {
    return (
        <div className="pt-4 lg:pt-10">
            <div className="px-5 lg:px-[100px]">
                <h1 className="font-myserif text-center text-[32px] leading-10 font-medium text-slate-900 mx-auto md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px] md:px-10 lg:px-[70px] xl:px-[250px] 2xl:text-[86px] 2xl:leading-[90px]">Start monitoring your website like a pro
                </h1>
                <p className="text-center pt-6 text-slate-900 mx-auto lg:text-[18px] lg:leading-7 lg:w-11/12 md:px-0 sm:px-5">
                    Experience a transformative shift in your online strategy with our advanced website monitoring solutions. Harness the power of real-time insights to optimize performance, identify issues, and exceed your digital goals effortlessly. Elevate your online presence, enhance user experiences, and stay ahead of the curve with confidence and ease.
                </p>

                <div className="flex w-full justify-center gap-4 pt-8 text-sm font-semibold mx-auto">
                    <button className="w-1/2 px-8 py-4 bg-indigo-700 rounded-md text-white md:w-fit">Try for Free</button>
                    <button className="w-1/2 text-indigo-600 px-4 py-3 flex flex-row items-center gap-x-2 justify-center md:w-fit">View Pricing <span><Image src={BlurArrow} alt="Learn More" /></span></button>
                </div>

            </div>
            <div>
                <div className='relative flex h-full w-full justify-center'>
                    <Image src={Gradient} alt="Background Image" className='min-h-[500px] w-full object-cover lg:h-auto' />

                    <div className='absolute bottom-5 flex flex-col w-full items-center'>
                        <Image src={HeroImage} alt="Hero Image" className='-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-[100px] lg:h-[600px] xl:-mb-[120px] xl:h-[800px] 2xl:-mb-[150px] 2xl:h-[1000px]' />
                        <div className='flex flex-col w-full items-center pt-2 lg:container lg:flex-row lg:justify-between lg:px-20' >
                            <p className='text-white font-medium text-center lg:text-[18px]'>Trusted by</p>
                            <div className='flex flex-col px-4'>
                                <div className='grid grid-cols-3 justify-center justify-items-center  items-center align-middle gap-1  lg:grid-cols-5  lg:px-20 '>
                                    <Image src={Google} alt="Google" />
                                    <Image src={Slack} alt="Google" />
                                    <Image src={Trustpilot} alt="Google" />
                                    <Image src={CNN} alt="Google" />
                                    <Image src={Clutch} alt="Google" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}