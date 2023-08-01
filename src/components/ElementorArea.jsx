
import React from 'react';

const ElementorArea = () => {
    return (
        <>
            <div className="elementor__area pt-120 d-none pb-105">
                <div className="container">
                    <div className="elementor__bg fix">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                <div className="elementor__left-img">
                                    <img src="assets/img/elementor/image.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                <div className="elementor__title-box">
                                    <div className="elementor__icon">
                                        <img src="assets/img/elementor/elementor.png" alt="" />
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