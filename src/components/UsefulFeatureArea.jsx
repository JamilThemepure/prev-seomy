import Image from 'next/image';


import useful_img_1 from "../../public/assets/img/svg-2/1.svg";
import useful_img_2 from "../../public/assets/img/svg-2/2.svg";
import useful_img_3 from "../../public/assets/img/svg-2/3.svg";
import useful_img_4 from "../../public/assets/img/svg-2/4.svg";
import useful_img_5 from "../../public/assets/img/svg/fea-7.svg";
import useful_img_6 from "../../public/assets/img/svg-2/5.svg";
import useful_img_7 from "../../public/assets/img/svg-2/6.svg";
import useful_img_8 from "../../public/assets/img/svg-2/7.svg";
import useful_img_9 from "../../public/assets/img/svg-2/8.svg";
import useful_img_10 from "../../public/assets/img/svg-2/9.svg";

const UsefulFeatureArea = () => {
    return (
        <>
            <div className="useful-feature__area pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="useful-feature__title-box text-center mb-60">
                        <h4 className="tp-section-title wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">Useful <span>Features</span></h4>
                        <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">Designed for showcasing all manner of creative work in a truly modern, art-inspired & <br />
                           animation-driven environment.</p>
                     </div>
                  </div>
               </div>
               <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-3 gx-20">
                  <div className="col">
                     <div className="useful-feature__item mb-20">
                        <div className="useful-feature__icon">
                           <Image src={useful_img_1} alt="" />
                        </div> 
                        <div className="useful-feature__content">
                           <h4 className="useful-feature__title" >Unlimited <br />
                              Options</h4>
                        </div> 
                     </div>
                  </div>
                  <div className="col">
                     <div className="useful-feature__item mb-20">
                        <div className="useful-feature__icon">
                           <Image src={useful_img_1} alt="" />
                        </div> 
                        <div className="useful-feature__content">
                           <h4 className="useful-feature__title" >Creative <br />
                              Design</h4>
                        </div> 
                     </div>
                  </div>
                  
                  <div className="col">
                     <div className="useful-feature__item mb-20">
                        <div className="useful-feature__icon">
                           <Image src={useful_img_1} alt="" />
                        </div> 
                        <div className="useful-feature__content">
                           <h4 className="useful-feature__title" >Color <br />
                              Options</h4>
                        </div> 
                     </div>
                  </div>
                  <div className="col">
                     <div className="useful-feature__item mb-20">
                        <div className="useful-feature__icon">
                           <Image src={useful_img_1} alt="" />
                        </div> 
                        <div className="useful-feature__content">
                           <h4 className="useful-feature__title" >Perfectly <br /> Aligned Code</h4>
                        </div> 
                     </div>
                  </div>
                  <div className="col">
                     <div className="useful-feature__item mb-20">
                        <div className="useful-feature__icon">
                           <Image src={useful_img_1} alt="" />
                        </div> 
                        <div className="useful-feature__content">
                           <h4 className="useful-feature__title" >Amazing <br /> Support</h4>
                        </div> 
                     </div>
                  </div>
                  <div className="col">
                     <div className="useful-feature__item mb-20">
                        <div className="useful-feature__icon">
                           <Image src={useful_img_1} alt="" />
                        </div> 
                        <div className="useful-feature__content">
                           <h4 className="useful-feature__title" >Creative <br />
                              sliders</h4>
                        </div> 
                     </div>
                  </div>
                  <div className="col">
                     <div className="useful-feature__item mb-20">
                        <div className="useful-feature__icon">
                           <Image src={useful_img_1} alt="" />
                        </div> 
                        <div className="useful-feature__content">
                           <h4 className="useful-feature__title" >Advanced <br /> Typography</h4>
                        </div> 
                     </div>
                  </div>
                  <div className="col">
                     <div className="useful-feature__item mb-20">
                        <div className="useful-feature__icon">
                           <Image src={useful_img_1} alt="" />
                        </div> 
                        <div className="useful-feature__content">
                           <h4 className="useful-feature__title" >Lifetime <br /> Updates</h4>
                        </div> 
                     </div>
                  </div>
                  <div className="col">
                     <div className="useful-feature__item mb-20">
                        <div className="useful-feature__icon">
                           <Image src={useful_img_1} alt="" />
                        </div> 
                        <div className="useful-feature__content">
                           <h4 className="useful-feature__title" >Browser Friendly Code</h4>
                        </div> 
                     </div>
                  </div>
                  <div className="col">
                     <div className="useful-feature__item mb-20">
                        <div className="useful-feature__icon">
                           <Image src={useful_img_1} alt="" />
                        </div> 
                        <div className="useful-feature__content">
                           <h4 className="useful-feature__title" >Standard <br /> Colors</h4>
                        </div> 
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default UsefulFeatureArea;