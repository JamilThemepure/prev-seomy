
import React from 'react';
import Image from 'next/image';


const ResponsiveArea = () => {
    return (
        <>
            <div className="responsive__area pt-120 pb-90">
                <div className="container">
                    <div className="responsive__bg grey-bg-2">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                <div className="responsive__title-box">
                                    <span className="tp-section-subtitle">Responsive Design</span>
                                    <h4 className="tp-section-title-sm"><span>Responsive</span> <br /> & Retina Ready</h4>
                                    <p>The layout is responsive and looks gorgeous and
                                        professional on any major devices and this template
                                        comes with custom page templates.</p>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                <div className="responsive__mockup-wrap p-relative">
                                    <div className="responsive__mockup-shape-1">
                                        <img src="assets/img/mockup/image-2.png" alt="" />
                                    </div>
                                    <div className="responsive__mockup-shape-2">
                                        <img src="assets/img/mockup/image-3.png" alt="" />
                                    </div>
                                    <div className="responsive__mockup-thumb z-index-1 text-center text-lg-end">
                                        <img src="assets/img/mockup/mockup-image-2.png" alt="" />
                                    </div>
                                    <div className="responsive__mockup-shape-3 z-index-1 text-center text-lg-end" data-parallax='{"y": 50, "smoothness": 15}'>
                                        <img src="assets/img/mockup/image-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResponsiveArea;