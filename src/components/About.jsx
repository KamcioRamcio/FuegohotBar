import React from 'react'
import {motion} from 'framer-motion'
import shot from '../assets/MainPhotos/1kieliszek.png'
import Lokal1 from '../assets/Photos/S-Lokal1.jpg'
import Lokal2 from '../assets/Photos/S-Lokal2.jpg'
import Lokal3 from '../assets/Photos/S-Lokal3.jpg'
import Lokal4 from '../assets/Photos/S-Lokal4.jpg'
import Lokal5 from '../assets/Photos/S-Lokal5.jpg'
import Lokal6 from '../assets/Photos/S-Lokal6.jpg'
import Lokal7 from '../assets/Photos/S-Lokal7.jpg'
import Lokal8 from '../assets/Photos/S-Lokal8.jpg'
import Lokal9 from '../assets/Photos/S-Lokal9.jpg'
import Lokal10 from '../assets/Photos/S-Lokal10.jpg'
import Lokal11 from '../assets/Photos/S-Lokal11.jpg'
import Lokal12 from '../assets/Photos/S-Lokal12.jpg'
import Lokal13 from '../assets/Photos/S-Lokal13.jpg'
import Lokal14 from '../assets/Photos/S-Lokal14.jpg'
import Lokal15 from '../assets/Photos/S-Lokal15.jpg'
import Lokal16 from '../assets/Photos/S-Lokal16.jpg'
import Lokal17 from '../assets/Photos/S-Lokal17.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const About = () => {
  return (
    <div className='w-full flex flex-row text-white pt-20 space-x-14 justify-center items-center l-tablet:flex-col l-tablet:space-x-0 tablet:pt-0' id="about">
      <motion.div className='xl-tablet:hidden p-10'>
        <img src={shot} className='shot_about'></img>
      </motion.div>
      <motion.div className='w-1/3 overflow-hidden items-center justify-center l-tablet:w-9/12 '>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true, }}
        className='pb-20 pt-20 '
        >
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal1} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal2} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal3} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal4} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal5} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal6} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal7} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal8} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal9} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal10} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal11} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal12} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal13} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal14} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal15} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal16} className=''></img>
          </SwiperSlide>
          <SwiperSlide className='flex items-center justify-center'>
            <img src={Lokal17} className=''></img>
          </SwiperSlide>
         
          
        </Swiper>
      </motion.div>
      <motion.div className=' text-white pr-10 l-tablet:text-center l-tablet:pt-12 l-tablet:pr-8 l-tablet:pl-8 space-y-1 text-[18px]' id="about_text"
        >
          <p>Fuego nie jest standardowym grzecznym miejscem, </p>
          <p>które nie da się w żaden sposób zaszufladkować.</p>
          <p>To shot bar, który nie boi się eksperymentować i prowokować zmysłów.</p>
          <p>Tutaj nie ma miejsca na nudę i schematy</p>
          <p>FUEGO idzie za głosem serca i bawi się życiem według własnych zasad.</p>
          <p>Fuego nic nie musi...</p>
          <p>Fuego żyje według scenariusza, </p>
          <p>który napisały jego pragnienia.</p>
          <p>Fuego idzie za głosem serca, </p>
          <p>rozum gubiąc po drodze...</p>
          <p>Fuego uwielbia shot'y i eksperymenty...</p>
          <p>zatraca się muzyce i tańcu </p>
          <p>emocje rozpalając do czerwoności podczas każdej wizyty. </p>
          <p>Z Fuego nie ma miejsca na żale</p>
          <p>After all no regrest...</p>
          <p>Uwolnij emocje z FUEGO</p>
          <p>Take a shot</p>
          <p className='text-red-500 font-bold'>FUEGO</p>
        </motion.div>
    </div>
  )
}

export default About