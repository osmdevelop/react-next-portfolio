import react from "react";
import { motion } from "framer-motion"
import Image from 'next/image'

export default function Certificates(props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <div className='transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300'>
                <a href={props.certificateLink} target='_blank' rel="noopener noreferrer">
                    <Image
                        src={props.certificateImg}
                        className='rounded-t-lg object-cover w-full'
                        width={400}
                        height={300}
                        alt={props.certificateTitle}
                    />
                </a>
            </div>
            <div className="p-4">
                <p className='text-base font-semibold py-1 text-teal-600 dark:text-teal-400'>{props.certificateTitle}</p>
                {props.certificateDate && (
                    <p className='text-sm text-gray-600 dark:text-gray-400'>{props.certificateDate}</p>
                )}
            </div>
        </motion.div>
    )
}