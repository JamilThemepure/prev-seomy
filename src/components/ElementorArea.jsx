import Image from 'next/image';

import React from 'react';

import elementot_img_1 from "../../public/assets/img/elementor/image.png";
import elementot_img_2 from "../../public/assets/img/elementor/elementor.png";

const ElementorArea = () => {
    return (
        <>
            <div className="elementor__area pt-120 d-none pb-105">
                <div className="container">
                    <div className="elementor__bg fix">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                <div className="elementor__left-img">
                                    <Image src={elementot_img_1} alt="" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                <div className="elementor__title-box">
                                    <div className="elementor__icon">
                                        <Image src={elementot_img_2} alt="" />
                                    </div>
                                    <h4 className="tp-section-title-sm"><span>Elementor</span> <br /> Website Builder</h4>
                                    <p>Many of our lovely customers, asked us to support Elementor, maybe the most advanced frontend drag & drop page builder. It works on the front end of your website, meaning it shows</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ElementorArea;