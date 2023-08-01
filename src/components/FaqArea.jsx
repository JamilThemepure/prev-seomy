
import React from 'react';

const FaqArea = () => {
    return (
        <>
            <div className="faq__area pt-100 pb-110">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-12">
                     <div className="faq__title-box pb-10 text-center">
                        <h4 className="tp-section-title">Faq & <span>Answers</span></h4>
                     </div>
                  </div>
                  <div className="col-xl-9">
                     <div className="faq__wrapper">
                        <div className="tp-custom-accordion">
                           <div className="accordion" id="accordionExample">
                              <div className="accordion-items">
                                 <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       Why should I choose SEOMY?
                                       <span className="accordion-btn"></span>
                                    </button>
                                 </h2>
                                 <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       The SEOMY built with modern technology like HTML5, Bootstrap, SASS etc. You can use it to build your dream website. So, don't waste your valuable time. Just <a target="_blank" href="#">click here</a> and buy the template.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-items tp-faq-active">
                                 <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                       Can I get free support?
                                       <span className="accordion-btn"></span>
                                    </button>
                                 </h2>
                                 <div id="collapseTwo" className="accordion-collapse collapse show"
                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       Yes. You can get free support after purchase this template.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-items">
                                 <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseThree" aria-expanded="false"
                                       aria-controls="collapseThree">
                                       Can I get regular Updates?
                                       <span className="accordion-btn"></span>
                                    </button>
                                 </h2>
                                 <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       Yes. You can get lifetime free regular updates.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-items">
                                 <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFour" aria-expanded="false"
                                       aria-controls="collapseFour">
                                       Is it cross browser compatibility?
                                       <span className="accordion-btn"></span>
                                    </button>
                                 </h2>
                                 <div id="collapseFour" className="accordion-collapse collapse"
                                    aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       Yes. This template is fully responsive any cross browser compatibility.
                                    </div>
                                 </div>
                              </div>
                              <div className="accordion-items">
                                 <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                       data-bs-target="#collapseFive" aria-expanded="false"
                                       aria-controls="collapseFive">
                                       Can I change content ?
                                       <span className="accordion-btn"></span>
                                    </button>
                                 </h2>
                                 <div id="collapseFive" className="accordion-collapse collapse"
                                    aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                       Yes. You can change any content as you like. You can modify and content or design.
                                    </div>
                                 </div>
                              </div>
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

export default FaqArea;