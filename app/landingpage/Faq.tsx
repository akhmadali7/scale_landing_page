"use client"
import * as Accordion from '@radix-ui/react-accordion';
const items = [
    {
        question: "What makes Scale's website monitoring solutions different from others?",
        answer: "Scale offers advanced website monitoring solutions that provide real-time insights into your website's performance. Our cutting-edge technology allows you to optimize performance, identify issues, and exceed your digital goals effortlessly. With Scale, you can elevate your online presence and stay ahead of the curve with confidence and ease.",
    },
    {
        question: 'How can website monitoring help me enhance user experiences?',
        answer: "Website monitoring plays a crucial role in enhancing user experiences by ensuring your website is always available, responsive, and functioning optimally. With Scale's monitoring solutions, you can detect issues such as downtime, slow page load times, and broken links promptly, allowing you to take proactive steps to improve user experiences and satisfaction.",
    },
    {
        question: 'Is website monitoring essential for my online strategy, even if my website seems to be running smoothly?',
        answer: "Absolutely! Even if your website appears to be running smoothly, unexpected issues can arise at any time, impacting your users and business. Website monitoring with Scale provides peace of mind by continuously monitoring your website's performance and alerting you to any issues before they escalate. By staying proactive, you can ensure your online strategy remains on track and your digital goals are consistently met.",
    },
    {
        question: 'How can Scale`s website monitoring solutions help me stay ahead of the competition?',
        answer: "Scale's website monitoring solutions empower you to stay ahead of the competition by providing you with real-time insights into your website's performance. By harnessing the power of these insights, you can identify areas for improvement, optimize performance, and enhance user experiences. With Scale, you can proactively address issues, adapt to changing trends, and continuously improve your online presence. By leveraging our advanced monitoring tools, you'll be well-equipped to outperform your competitors and exceed your digital goals with confidence.",
    }
]


export function FAQ() {
    return (
        <div className="pt-16 flex flex-col w-full lg:flex-row lg:gap-x-7 md:px-32 lg:px-0">
            <div className='lg:w-5/12 lg:pr-3'>
                <h3 className="font-medium text-indigo-500 lg:text-[18px]">Frequently Asked Questions</h3>
                <h1 className="font-myserif py-3 text-2xl font-medium text-slate-900 lg:text-4xl lg:leading-10">Lets clarify some of your questions</h1>
                <p className='pt-2 text-slate-700  lg:text-[18px]'>Lets address some of your common inquiries about Scale, our monitoring website. Understanding these aspects can help you make informed decisions and maximize the benefits of our services.</p>

            </div>
            <div className='pt-6 lg:pt-0 lg:w-7/12'>
                <Accordion.Root
                    type='single'
                    defaultValue='item-1' //default 1 accordion open
                    collapsible
                    className='flex flex-col gap-y-4 '>
                    {items.map((item, index) => (
                        <div key={index}>
                            <Accordion.Item value={`item-${index + 1}`} className=' bg-neutral-50  p-4 rounded-[8px]'>
                                <Accordion.Header>
                                    <Accordion.Trigger className='text-left text-slate-900 font-medium'>
                                        <p className=''>{item.question}</p>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className='text-slate-900'>
                                    <p className='pt-2'></p>
                                    <p className='border-t-2'></p>
                                    <p className='pb-2'></p>
                                    <p>{item.answer}</p>
                                </Accordion.Content>
                            </Accordion.Item>

                        </div>
                    ))}
                </Accordion.Root>
            </div>
        </div>
    )
}