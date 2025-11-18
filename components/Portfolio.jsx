import react from "react";
import { motion } from "framer-motion"
import {
    AiFillGithub,
    AiOutlineLink
} from 'react-icons/ai'
import Image from 'next/image'

export default function Portfolio(props) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='lg:w-2/4 max-w-3xl relative group'
        >
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                    src={props.web}
                    className='rounded-lg object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105'
                    width={600}
                    height={400}
                    alt="Portfolio project"
                />
                <div className='flex gap-2 absolute bottom-0 right-0 bg-slate-800/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-tl-lg p-2'>
                    <a
                        className='text-4xl text-white p-2 hover:text-teal-400 transition-colors duration-200'
                        target='_blank'
                        rel="noopener noreferrer"
                        href={props.github}
                        aria-label="View on GitHub"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        className='text-4xl text-white p-2 hover:text-teal-400 transition-colors duration-200'
                        target='_blank'
                        rel="noopener noreferrer"
                        href={props.link}
                        aria-label="View live site"
                    >
                        <AiOutlineLink />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}