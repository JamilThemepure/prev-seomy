import Image from 'next/image';

import integration_img_1 from "../../public/assets/img/intigration/shape-1.png";
import integration_img_2 from "../../public/assets/img/intigration/react.png";
import integration_img_3 from "../../public/assets/img/intigration/icon-2.png";
import integration_img_4 from "../../public/assets/img/intigration/icon-3.png";
import integration_img_5 from "../../public/assets/img/intigration/icon-4.png";
import integration_img_6 from "../../public/assets/img/intigration/icon-5.jpg";
import integration_img_7 from "../../public/assets/img/intigration/icon-6.png";
import integration_img_8 from "../../public/assets/img/intigration/icon-7.jpg";

const IntegrationToolsArea = () => {
    return (
        <>
            <div id="featuresDemo" className="integration__area pt-120 p-relative pb-90 integration-counter fix">
                <div className="integration__left-shape">
                    <Image src={integration_img_1} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="integration__section-box text-center mb-60">
                                <h3 className="tp-section-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">Awesome <br /> <span>Integration Tools</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="integration__item mb-30 p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                                <div className="integration__icon">
                                    <Image src={integration_img_2} alt="" />
                                </div>
                                <div className="integration__content">
                                    <h4>React js</h4>
                                    <p>The library for web and native user interfaces</p>
                                </div>
                                <div className="integration__counter-wrap">
                                    <div className="integration__counter-count"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="integration__item mb-30 p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                <div className="integration__icon">
                                    <Image src={integration_img_3} alt="" />
                                </div>
                                <div className="integration__content">
                                    <h4>Bootstrap</h4>
                                    <p>Bootstrap, the {"world's"} most popular css framework.</p>
                                </div>
                                <div className="integration__counter-wrap">
                                    <div className="integration__counter-count"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="integration__item mb-30 p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                <div className="integration__icon">
                                    <Image src={integration_img_4} alt="" />
                                </div>
                                <div className="integration__content">
                                    <h4>Built With SASS</h4>
                                    <p>SASS you to use variables, <br /> nested, functions, and more.</p>
                                </div>
                                <div className="integration__counter-wrap">
                                    <div className="integration__counter-count"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="integration__item mb-30 p-relative wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                                <div className="integration__icon">
                                    <Image src={integration_img_5} alt="" />
                                </div>
                                <div className="integration__content">
                                    <h4>Fully Responsive</h4>
                                    <p>Fully responsive so it will be work under all devices. </p>
                                </div>
                                <div className="integration__counter-wrap">
                                    <div className="integration__counter-count"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="integration__mlr">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                                <div className="integration__item mb-30 p-relative">
                                    <div className="integration__icon">
                                        <Image src={integration_img_6} alt="" />
                                    </div>
                                    <div className="integration__content">
                                        <h4>Cross Browser</h4>
                                        <p>seomy work under all modern browser with perfectly.</p>
                                    </div>
                                    <div className="integration__counter-wrap">
                                        <div className="integration__counter-count"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.1s">
                                <div className="integration__item mb-30 p-relative">
                                    <div className="integration__icon">
                                        <Image src={integration_img_7} alt="" />
                                    </div>
                                    <div className="integration__content">
                                        <h4>Clean Code</h4>
                                        <p>Well commented clean HTML and CSS and Js code.</p>
                                    </div>
                                    <div className="integration__counter-wrap">
                                        <div className="integration__counter-count"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.2s">
                                <div className="integration__item mb-30 p-relative">
                                    <div className="integration__icon">
                                        <Image src={integration_img_8} alt="" />
                                    </div>
                                    <div className="integration__content">
                                        <h4>Google Fonts</h4>
                                        <p>It is the leading host of open-source fonts for use on the web</p>
                                    </div>
                                    <div className="integration__counter-wrap">
                                        <div className="integration__counter-count"></div>
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

export default IntegrationToolsArea;