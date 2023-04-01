import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import ftProduct from '../image/lipStickc.svg';
import arrow from '../image/arroow.svg';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css'


export default function Home(){ 
    const seasons = [ftProduct, ftProduct, ftProduct];

    return(

        <>
        <div className='homePage'>
            <div className='cont'>
                <div className='tagLine'>
                    <h1>NEW AND DARK</h1>
                    <h1>LAKME YORK</h1>
                    <button type="submit" className='btn'>ORDER NOW</button>
                </div>
                <div className='image'>
                <object type="image/svg+xml" aria-label="pcImage" data={ftProduct}></object>
                </div>
                <div className='slider'>
                <Swiper className='swiper_container'
                    style={{
                        "--swiper-pagination-color": "#582932",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "12px",
                        "--swiper-pagination-bullet-horizontal-gap": "4px",
                        "--swiper-pagination-bottom": "170px"
                    }}
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {seasons.map((season)=>{
                        return(
                            <SwiperSlide>
                            <div className='imgSlider'>
                                <object type="image/svg+xml" aria-label="pcImage" data={season} height={200} width={100}></object>
                            </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                </div>
               
            </div>
        </div>

        </>
    )
}