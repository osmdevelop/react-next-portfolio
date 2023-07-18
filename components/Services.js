import react from "react";
import { motion } from "framer-motion"
import { BsSun } from 'react-icons/bs'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillYoutube,
    AiOutlineLink,
    AiOutlineMail
} from 'react-icons/ai'
import Image from 'next/image'
import design from '../public/design.png'
import code from '../public/code.png'

import Link from 'next/link'

export default function Services(props) {
    return (
        <div className='flex-1'>
            <motion.div
                initial="offscreen"
                whileInView={{ x: props.inView, y: 0, scale: 1 }}
                viewport={{ once: true }}

                transition={{
                    duration: 0.8,
                }}
            >
                <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-sky-900 dark:text-gray-200 flex flex-col justify-center items-center">
                    <Image src={props.img} width={100} height={100} />
                    <h3 className='text-lg font-medium pt-8 pb-2'>{props.title}</h3>
                    <p className='py-2'>{props.description}</p>
                    <h4 className='text-xl py-4 text-teal-400'>Tools I use</h4>
                    <p className='text-lg text-gray-800 py-1 dark:text-sky-200'>{props.tool1}</p>
                    <p className='text-lg text-gray-800 py-1 dark:text-sky-200'>{props.tool2}</p>
                    <p className='text-xl text-gray-800 py-1 dark:text-sky-200'>{props.tool3}</p>
                </div>
            </motion.div>
        </div>
    )
}