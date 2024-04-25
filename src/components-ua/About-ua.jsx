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

const AboutUA = () => {
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
          <p>Фуего не є типовим ввічливим місцем </p>
          <p>яке не можна ніяк віднести до певної категорії. </p>
          <p>Це шот-бар, який не боїться експериментувати й провокувати почуття.  </p>
          <p>Тут немає місця для нудьги та схем.  </p>
          <p>Фуего йде за голосом серця й розважається у житті за своїми правилами </p>
          <p>Фуего нічого не має обов'язку...  </p>
          <p>Фуего живе за сценарієм,</p>
          <p>що написали його бажання.</p>
          <p>Фуего йде за голосом серця,  </p>
          <p>заблукуючи розумом по дорозі... </p>
          <p>Фуего обожнює шоти й експерименти, </p>
          <p>втрачаючись у музиці й танцях,  </p>
          <p>розпалюючи емоції до червоністю під час кожного візиту</p>
          <p>З Фуего немає місця для жалю.</p>
          <p>Після усього без жалю... </p>
          <p>Вільте емоції з Фуего </p>
          <p>Пей шот </p>
          <p className='text-red-500 font-bold'>Фуего </p>
        </motion.div>
    </div>
  )
}

export default AboutUA