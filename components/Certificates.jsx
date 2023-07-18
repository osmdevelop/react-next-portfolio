import react from "react";

import gfrontend from '../public/gfrontend.png'
import gcss from '../public/gcss.png'
import gjs from '../public/gjs.png'
import greact from '../public/greact.png'
import Image from 'next/image'


export default function Certificates(props) {
    return (
        <div>
            <div className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-225'>
                <a href={props.certificateLink} target='_blank'>
                    <Image src={props.certificateImg}
                        className='rounded-lg object-cover'
                        width={"100%"}
                        height={"100%"} />
                </a>
            </div>
            <p className='text-base py-1 text-teal-600'>{props.certificateTitle}</p>
        </div>
    )
}