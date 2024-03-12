import Image from 'next/image';
import Checklist from '../../public/assets/check-white.svg'
import ChecklistBlack from '../../public/assets/check.svg'

const freeTrial = [
    { point: "Access to essential monitoring features." },
    { point: "Evaluate website performance without financial commitment." },
    { point: "Receive insights into website health and reliability." },

]

const Business = [
    { point: "Advanced monitoring capabilities for comprehensive oversight." },
    { point: "Customizable alerts for proactive issue resolution." },
    { point: "Priority support from expert team for rapid assistance." },
    { point: "Real-time analytics for actionable insights." },
    { point: "Performance optimization tools for enhanced efficiency." },
    { point: "Tailored solutions to meet diverse business needs." },

]

export function Pricing() {
    return (
        <div className='pt-20 md:px-0'>
            <div className='pb-10 flex flex-col items-center mx-auto'>
                <h1 className='text-3xl lg:text-4xl font-myserif text-center' >Flexible plans for you</h1>
                <p className='pt-4 font-medium text-slate-800'>No hidden fees!</p>
            </div>

            <div className=" flex flex-col justify-center align-middle gap-y-7 mx-auto lg:flex-row lg:gap-x-6">

                <div className="bg-indigo-100 bg-opacity-30 text-slate-900 lg:w-1/3 p-6 rounded-md h-auto flex flex-col justify-between">
                    <div className='pb-9'>
                        <h3 className=' font-myserif text-2xl text-indigo-700 pb-2'>Free Trial</h3>
                        <h3 className='text-medium text-slate-800 pb-4'>Perfect for testing the waters</h3>
                        <h2 className='py-4 text-3xl font-bold text-slate-800'>$0<span className='text-xl font-medium'>/mo</span></h2>

                        {freeTrial.map((item, index) => (
                            <div className='flex flex-row items-start gap-x-3 pb-2' key={index}>
                                <Image src={ChecklistBlack} alt='check' className='min-h-4 pt-1' />
                                <p>{item.point}</p>
                            </div>
                        ))}
                    </div>
                    <button className="text-center text-indigo-700 bg-white rounded-md w-full font-semibold py-3">
                        Start Trial
                    </button>
                </div>

                <div className="bg-indigo-700 text-white lg:w-1/3 p-6 rounded-md h-auto flex flex-col justify-between">
                    <div className='pb-9'>
                        <h3 className='font-myserif text-2xl pb-2'>Business</h3>
                        <h3 className='text-medium pb-4'>Perfect for small business</h3>
                        <h2 className='py-4 text-3xl font-bold '>$500<span className='text-lg font-medium '>/mo</span></h2>
                        {Business.map((item, index) => (
                            <div className='flex flex-row items-start gap-x-2 pb-3' key={index}>
                                <Image src={Checklist} alt='check' className='min-h-4 pt-1' />
                                <p>{item.point}</p>
                            </div>
                        ))}
                    </div>
                    <button className="text-center text-indigo-700 bg-white rounded-md font-bold w-full py-3">
                        Get Started
                    </button>
                </div>

                <div className="bg-indigo-100 bg-opacity-50 text-slate-900 lg:w-1/3 p-6 rounded-md h-auto flex flex-col justify-between">
                    <div className='pb-6'>
                        <h3 className=' font-myserif text-2xl text-indigo-700 pb-2'>Enterprise</h3>
                        <h3 className='text-medium pb-4'>Perfect for big companies</h3>
                        <h2 className='py-4 text-3xl font-bold text-slate-800'>Custom</h2>
                        <p>
                            Scale's Enterprise offering is designed to cater to the unique requirements of large organizations and enterprises with complex monitoring needs.
                        </p>
                        <p className='pt-6'>
                            Benefit from custom integrations, dedicated account management, and personalized support to address your organization's most pressing challenges.
                        </p>
                        <p className='pt-6'>
                            Scale's Enterprise plan empowers you to adjust your monitoring strategy as your business evolves, ensuring seamless performance across all digital fronts.
                        </p>
                    </div>
                    <button className="text-center text-indigo-700 bg-white rounded-md w-full font-semibold py-3">
                        Contact Us
                    </button>
                </div>
            </div>
        </div >
    );
}