import React, { useState } from 'react'
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';
import { useNavigate } from "react-router-dom";

function LandingPageHeader() {
    let navigate = useNavigate();
    const [toggle, setToggle] = useState(false)
    const menuList = [
        {
            id: 1,
            title: 'HOME',
            path: '/'
        },
        {
            id: 2,
            title: 'ABOUT',
            path: '/sampleapi'
        },
        {
            id: 3,
            title: 'SERVICE',
            path: '/sampleapi'
        },
        {
            id: 4,
            title: 'PORTFOLIO',
            path: '/contact'
        },
        {
            id: 5,
            title: 'CONTACT',
            path: '/contact'
        },
    ]

    return (
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='text-[26px] font-bold text-white'>BIJIN
                    <span className='text-red-500'> RAVEENDRAN</span></h2>
            </div>
            <div className='hidden md:flex gap-4'>
                {menuList.map((item) => (
                    <div onClick={() => navigate(item.path)}>
                        <h2 className='text-white 
                    hover:border-[1px] border-red-500 rounded-full
                    text-[15px] px-3 py-1 cursor-pointer'
                        >{item.title}
                        </h2>
                    </div>
                ))}
                <h2 className='text-white 
                    hover:border-[1px] border-red-500 rounded-full
                    text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800 '>HIRE  ME</h2>
            </div>
            <div className='md:hidden'>
                {!toggle ? <HiBars3BottomRight onClick={() => setToggle(!toggle)} className='text-white text-[22px] cursor-pointer' />
                    : <HiOutlineXMark onClick={() => setToggle(!toggle)} className='text-white text-[22px] cursor-pointer' />}
                {toggle ? <MenuOverlay menuList={menuList} /> : null}
            </div>
        </div>
    )
}

export default LandingPageHeader