import react from "react";
import { motion } from "framer-motion"
import Image from 'next/image'

export default function Services(props) {
    return (
        <div className='flex-1'>
            <motion.div
                initial={{ opacity: 0, x: props.inView[0] }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                }}
            >
                <div className="text-center shadow-lg p-8 rounded-xl my-10 bg-white dark:bg-gray-800 dark:text-gray-200 flex flex-col justify-center items-center hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="mb-6">
                        <Image src={props.img} width={80} height={80} alt={props.title} className="opacity-90" />
                    </div>
                    <h3 className='text-xl font-bold pt-4 pb-3 text-gray-800 dark:text-white'>{props.title}</h3>
                    <p className='py-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>{props.description}</p>
                    <h4 className='text-lg font-semibold py-3 text-teal-600 dark:text-teal-400'>Technologies & Tools</h4>
                    <div className="space-y-2 w-full">
                        <p className='text-base text-gray-700 py-1 dark:text-gray-300'>{props.tool1}</p>
                        <p className='text-base text-gray-700 py-1 dark:text-gray-300'>{props.tool2}</p>
                        <p className='text-base text-gray-700 py-1 dark:text-gray-300'>{props.tool3}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}