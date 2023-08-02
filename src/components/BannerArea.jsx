import React from 'react';
import Image from 'next/image';
import banner_img_1 from "../../public/assets/img/banner/banner-fea.png";
import banner_img_2 from "../../public/assets/img/banner/banner-main-1.png";
import banner_img_3 from "../../public/assets/img/banner/banner-main-2.png";
import banner_img_4 from "../../public/assets/img/banner/banner-main-3.png";
import banner_img_5 from "../../public/assets/img/banner/banner-shape-1.png";
import banner_img_6 from "../../public/assets/img/banner/banner-shape-2.png";
import banner_img_7 from "../../public/assets/img/banner/banner-shape-3.png";
const BannerArea = () => {
	return (
		<>
			<div className="tp-banner__area tp-banner__plr p-relative z-index-5 theme-bg fix">
				<div className="tp-banner__space p-relative">
					<div className="container">
						<div className="row z-index-1">
							<div className="col-xl-12 ">
								<div className="tp-banner__content-box text-center">
									<div className="tp-banner__title-box mb-50">
										<h2 className="tp-banner-title mb-15">SEO & Marketing Agency <br /> Next js Template</h2>
										<p className="tp-title-anim">Flexible, modern, powerful unique sections.</p>
									</div>
									<div className="tp-banner__profile-feature wow tpfadeUp mb-55" style={{ marginBottom: '55px' }} data-wow-duration=".9s" data-wow-delay=".7s">
										<Image src={banner_img_1} alt="" />
									</div>
									<div className="tp-banner__main-thumb text-center">
										<div className="tp-banner__main-thumb-one">
											<Image src={banner_img_2} alt="" />
										</div>
										<div className="tp-banner__main-thumb-two" data-parallax='{"y": 100, "smoothness": 10}'>
											<Image src={banner_img_3} alt="" />
										</div>
										<div className="tp-banner__main-thumb-three" data-parallax='{"y": 250, "smoothness": 50}'>
											<Image src={banner_img_4} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tp-banner__shape">
						<div className="tp-banner__shape-one" data-parallax='{"y": 300, "smoothness": 20}'>
							<Image src={banner_img_5} alt="" />
						</div>
						<div className="tp-banner__shape-two" data-parallax='{"y": 400, "smoothness": 100}'>
							<Image src={banner_img_6} alt="" />
						</div>
						<div className="tp-banner__shape-three">
							<Image src={banner_img_7} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BannerArea;