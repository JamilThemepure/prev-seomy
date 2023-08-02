
import React, { useState } from "react";
const faq_data = [
	{
		id: "One",
		ques: "Why should I choose SEOMY?",
		ans: <>The SEOMY built with modern technology like React Next js, Bootstrap, SASS etc. You can use it to build your dream website. So, {"do not"} waste your valuable time. Just <a target="_blank" href="#">click here</a> and buy the template.</>,
	},
	{
		id: "Two",
		ques: "Can I get free support?",
		ans: <>Yes. You can get free support after purchase this template.</>,
	},
	{
		id: "Three",
		ques: "Can I get regular Updates?",
		ans: <>Yes. You can get lifetime free regular updates.</>,
	},
	{
		id: "Four",
		ques: "Is it cross browser compatibility?",
		ans: <>Yes. This template is fully responsive any cross browser compatibility.</>,
	},
	{
		id: "Five",
		ques: "Can I change content ?",
		ans: <>Yes. You can change any content as you like. You can modify and content or design.</>,
	},
]

const FaqArea = () => {
	const [active, setActive] = useState("Two")
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
										{faq_data.map((item, i) =>
											<div key={i} onClick={() => setActive(item.id)} className={`accordion-items ${active === item.id ? "tp-faq-active" : ""}`}>
												<h2 className="accordion-header" id={`heading${item.id}`}>
													<button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
														data-bs-target={`#collapse${item.id}`} aria-expanded={`${i === 1 ? "false" : "true"}`} aria-controls="collapseOne">
														{item.ques}
														<span className="accordion-btn"></span>
													</button>
												</h2>
												<div id={`collapse${item.id}`} className={`accordion-collapse collapse ${i === 1 ? "show" : ""}`} aria-labelledby={`heading${item.id}`}
													data-bs-parent="#accordionExample">
													<div className="accordion-body">
														{item.ans}
													</div>
												</div>
											</div>

										)} 
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