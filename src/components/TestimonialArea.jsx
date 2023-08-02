'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';

import testimonial_img_1 from "../../public/assets/img/testimonial/testimonial-icon.png" ;
import ratting_img from "../../public/assets/img/testimonial/rating-img.png" ;


const setting = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    a11y: false,


    // scrollbar
    scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
    },


}
const TestimonialArea = () => {
    return (
        <>
            <div className="testimonial__area grey-bg-2 pt-120 pb-80 fix">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <div className="testimonial__rating-logo mb-25 d-flex align-items-center justify-content-center">
                     <Image className="mr-30" src={ratting_img} alt="" />
                     <h4 className="tp-section-title">12k+ <br />
                        Clients <span>Reviews</span></h4>
                  </div>
                  </div>
                  <div className="testimonial__wrapper">
                     <Swiper {...setting} modules={[Scrollbar]} className="swiper-container testimonial-slider-active"> 
                           <SwiperSlide className="swiper-slide">
                              <div className="testimonial__item d-flex align-items-center">
                                 <div className="testimonial__icon d-none d-sm-block">
                                    <Image src={testimonial_img_1} alt="" />
                                 </div>
                                 <div className="testimonial__content">
                                    <div className="testimonial__quote">
                                       <span>
                                          <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="#03041C" fillOpacity="0.1"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__ratting">
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__text">
                                       <p>Great theme with easy customization and quality coding. Support works flawlessly, with fast assistance and willing to help in every detail. After working with many authors, this is one of the best experiences to date. Totally recommended. </p>
                                    </div>
                                    <div className="testimonial__author-info">
                                       <h4>investflower</h4>
                                       <span>Envato Customer</span>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide>
                           <SwiperSlide className="swiper-slide">
                              <div className="testimonial__item d-flex align-items-center">
                                 <div className="testimonial__icon d-none d-sm-block">
                                    <Image src={testimonial_img_1} alt="" />
                                 </div>
                                 <div className="testimonial__content">
                                    <div className="testimonial__quote">
                                       <span>
                                          <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="#03041C" fillOpacity="0.1"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__ratting">
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__text">
                                       <p>The support staff answered my questions and helped me work through issues. They tended to answer very consistently within 24 hours. They gave suggestions and when suggestions didn't work they asked for logins and detected my mistake. Great support. Thanks guys. </p>
                                    </div>
                                    <div className="testimonial__author-info">
                                       <h4>jmg5041</h4>
                                       <span>Envato Customer</span>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide>
                           <SwiperSlide className="swiper-slide">
                              <div className="testimonial__item d-flex align-items-center">
                                 <div className="testimonial__icon d-none d-sm-block">
                                    <Image src={testimonial_img_1} alt="" />
                                 </div>
                                 <div className="testimonial__content">
                                    <div className="testimonial__quote">
                                       <span>
                                          <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="#03041C" fillOpacity="0.1"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__ratting">
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__text">
                                       <p>Great theme. Had an issue with an icon thar was missing, got the updated download from support in less the 24 hours. Very fast :)</p>
                                    </div>
                                    <div className="testimonial__author-info">
                                       <h4>mabidoli</h4>
                                       <span>Envato Customer</span>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide>
                           <SwiperSlide className="swiper-slide">
                              <div className="testimonial__item d-flex align-items-center">
                                 <div className="testimonial__icon d-none d-sm-block">
                                    <Image src={testimonial_img_1} alt="" />
                                 </div>
                                 <div className="testimonial__content">
                                    <div className="testimonial__quote">
                                       <span>
                                          <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="#03041C" fillOpacity="0.1"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__ratting">
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__text">
                                       <p>It was great to support them also they resolved my complete issue when I made a complaint issue.Thank you Zibber them for your support.</p>
                                    </div>
                                    <div className="testimonial__author-info">
                                       <h4>onlineplanetpro</h4>
                                       <span>Envato Customer</span>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide> 

                           {/* for update  */}
                           <SwiperSlide className="swiper-slide">
                              <div className="testimonial__item d-flex align-items-center">
                                 <div className="testimonial__icon d-none d-sm-block">
                                    <Image src={testimonial_img_1} alt="" />
                                 </div>
                                 <div className="testimonial__content">
                                    <div className="testimonial__quote">
                                       <span>
                                          <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="#03041C" fillOpacity="0.1"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__ratting">
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__text">
                                       <p>Great theme with easy customization and quality coding. Support works flawlessly, with fast assistance and willing to help in every detail. After working with many authors, this is one of the best experiences to date. Totally recommended. </p>
                                    </div>
                                    <div className="testimonial__author-info">
                                       <h4>investflower</h4>
                                       <span>Envato Customer</span>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide>
                           <SwiperSlide className="swiper-slide">
                              <div className="testimonial__item d-flex align-items-center">
                                 <div className="testimonial__icon d-none d-sm-block">
                                    <Image src={testimonial_img_1} alt="" />
                                 </div>
                                 <div className="testimonial__content">
                                    <div className="testimonial__quote">
                                       <span>
                                          <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="#03041C" fillOpacity="0.1"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__ratting">
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__text">
                                       <p>The support staff answered my questions and helped me work through issues. They tended to answer very consistently within 24 hours. They gave suggestions and when suggestions didn't work they asked for logins and detected my mistake. Great support. Thanks guys. </p>
                                    </div>
                                    <div className="testimonial__author-info">
                                       <h4>jmg5041</h4>
                                       <span>Envato Customer</span>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide>
                           <SwiperSlide className="swiper-slide">
                              <div className="testimonial__item d-flex align-items-center">
                                 <div className="testimonial__icon d-none d-sm-block">
                                    <Image src={testimonial_img_1} alt="" />
                                 </div>
                                 <div className="testimonial__content">
                                    <div className="testimonial__quote">
                                       <span>
                                          <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="#03041C" fillOpacity="0.1"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__ratting">
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__text">
                                       <p>Great theme. Had an issue with an icon thar was missing, got the updated download from support in less the 24 hours. Very fast :)</p>
                                    </div>
                                    <div className="testimonial__author-info">
                                       <h4>mabidoli</h4>
                                       <span>Envato Customer</span>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide>
                           <SwiperSlide className="swiper-slide">
                              <div className="testimonial__item d-flex align-items-center">
                                 <div className="testimonial__icon d-none d-sm-block">
                                    <Image src={testimonial_img_1} alt="" />
                                 </div>
                                 <div className="testimonial__content">
                                    <div className="testimonial__quote">
                                       <span>
                                          <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M18.5409 19.2088V38H0V33.1282C0 25.5189 0.553459 19.8584 1.66038 16.1465C2.85954 12.3419 5.94968 6.95971 10.9308 0L18.8176 4.45421C14.6667 11.5995 12.2683 16.5177 11.6226 19.2088H18.5409ZM43.7233 19.2088V38H25.1824V33.1282C25.1824 25.5189 25.7358 19.8584 26.8428 16.1465C28.0419 12.3419 31.1321 6.95971 36.1132 0L44 4.45421C39.8491 11.5995 37.4507 16.5177 36.805 19.2088H43.7233Z" fill="#03041C" fillOpacity="0.1"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__ratting">
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M8.4122 0L11.0116 5.26604L16.8244 6.11567L12.6183 10.2124L13.6109 16L8.4122 13.266L3.21346 16L4.2061 10.2124L0 6.11567L5.81283 5.26604L8.4122 0Z" fill="#FFB422"/>
                                          </svg>
                                       </span>
                                    </div>
                                    <div className="testimonial__text">
                                       <p>It was great to support them also they resolved my complete issue when I made a complaint issue.Thank you Zibber them for your support.</p>
                                    </div>
                                    <div className="testimonial__author-info">
                                       <h4>onlineplanetpro</h4>
                                       <span>Envato Customer</span>
                                    </div>
                                 </div>
                              </div>
                           </SwiperSlide> 
                        <div className="tp-scrollbar"></div>
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default TestimonialArea;