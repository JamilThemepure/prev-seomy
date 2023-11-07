'use client'
import Link from 'next/link';
import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';

const setting = {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    a11y: false,
    breakpoints: {
        '1400': {
            slidesPerView: 7,
        },
        '1200': {
            slidesPerView: 4,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },    
}

const setting_2  = {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    a11y: false,
    breakpoints: {
        '1400': {
            slidesPerView: 6,
        },
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },

    
}

const InnerPagesArea = () => {
    return (
        <>
           <div className="inner-page__area grey-bg pt-110 pb-110 fix">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="inner-page__title-box text-center mb-60">
                        <h4 className="tp-section-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">Too Many <span>Page Template</span></h4>
                        <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">Unique creative inner pages, blog, posts and portfolios for multi-concept.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="inner-page__slider-wrapper">
               <Swiper {...setting} className="swiper-container inner-page__slider-active"> 
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/about" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-1.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/service" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-2.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/blog-grid" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-3.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/blog-masonry" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-4.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/blog-list" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-5.png)`}}></div>
                           </Link> 
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/blog-details" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-6.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/blog-details-2" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-7.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/pricing" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-8.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide> 
               </Swiper>
               <Swiper {...setting_2} className="swiper-container inner-page__slider-active-2"> 
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/keyword-search" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-9.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/social-services" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-10.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/marketing-analysis" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-11.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/media-markiting" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-12.png)`}}></div>
                           </Link>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                        <div className="home-page__thumb-wrap mb-40 text-center">
                           <Link href="https://seomy-nextjs.netlify.app/seo-audit" target="_blank">
                              <div className="home-page__thumb" style={{backgroundImage: `url(/assets/img/inner-page/inner-13.png)`}}></div>
                           </Link> 
                        </div>
                     </SwiperSlide> 
               </Swiper>
            </div>
         </div> 
        </>
    );
};

export default InnerPagesArea;