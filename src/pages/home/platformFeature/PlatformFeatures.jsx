import React from 'react'
import Container from '../../../Components/Shared/Container'
import SectionHeader from '../../../Components/Shared/SectionHeader'
import { MdPayment } from "react-icons/md";
import Feature from './Feature';
import { MdOutlineSendToMobile } from "react-icons/md";
import { BsSendCheckFill } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
const PlatformFeatures = () => {
    const info=[
        {
            icon: MdPayment,
            title:'Payment',
            text:'Making Payment is now much easier through the bKash App',
            link: '#'
        },
        {
            icon: BsSendCheckFill,
            title:'Mobile Recharge',
            text:'Recharge any number and get the best offer',
            link: '#'
        },
        {
            icon: MdOutlineSendToMobile,
            title:'Send Money',
            text:'Send money from bKash to any number instantly',
            link: '#'
        },
        {
            icon: IoCashOutline,
            title:'Cash Out',
            text:'Withdraw cash anytime from the largest Agent and ATM network',
            link: '#'
        },
    ]
  return (
 <Container>
    <SectionHeader lable='One Platform for all Financial Solutions'/>
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-3'>
        {
            info.map((item, index)=> <Feature item={item} key={index}> </Feature> )
        }
    </div>
 </Container>
  )
}

export default PlatformFeatures