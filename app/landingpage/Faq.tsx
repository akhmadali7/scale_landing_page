import * as Accordion from '@radix-ui/react-accordion';
const items = [
    {
        question: 'shdkjasdhkshdjka',
        answer: 'shdkajdhkn mnmms,dms,ad'
    },
    {
        question: 'mbnmbmbmnbb',
        answer: 'sdbmuopupoipo'
    }
]


export function FAQ() {
    return (
        <div className="py-16 flex flex-col w-full">
            <div>
                <h3 className="font-medium text-pink-500 lg:text-[18px]">Frequently Asked Questions</h3>
                <h1 className="font-myserif py-3 text-2xl font-medium text-slate-900 lg:text-3xl lg:leading-7">Lets clarify some of your questions</h1>
                <p className='pt-2 text-slate-700  lg:text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt incidunt temporibus totam provident cumque nostrum blanditiis libero assumenda, facilis  illum eius ipsum optio amet soluta pariatur beatae corrupti!</p>

            </div>
        </div>
    )
}