import react from "react";
import { motion } from "framer-motion"
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillYoutube,
    AiOutlineLink,
    AiOutlineMail
} from 'react-icons/ai'
import Image from 'next/image'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import web7 from '../public/web7.png'
import web8 from '../public/web8.png'
import web9 from '../public/web9.png'
import web10 from '../public/web10.png'

import Link from 'next/link'


export default function Portfolio(props) {
    return (
        <div className='lg:w-2/4 max-w-3xl relative'>
            <Image src={props.web}
                className='rounded-lg object-cover'
                width={"100%"}
                height={"100%"}
            />
            <div className='flex gap-4 absolute bottom-0 right-0 bg-slate-700 rounded-tl-lg w-100'>
                <a className=' text-5xl 
                  text-white p-1.5  
                  hover:text-teal-300 
                    transition duration-0 hover:duration-150
                    max-sm:text-5xl' target='_blank' href={props.github}>
                    <AiFillGithub className='' />
                </a>
                <a className=' text-5xl 
                  text-white p-1.5  
                  hover:text-teal-300 
                    transition duration-0 hover:duration-150
                    max-sm:text-5xl' target='_blank' href={props.link}>
                    <AiOutlineLink className='' />
                </a>
            </div>
        </div>
    )
}