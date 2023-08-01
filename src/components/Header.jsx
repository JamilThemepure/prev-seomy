
import useSticky from '@/hooks/use-sticky';
import Link from 'next/link';
import React from 'react';

const Header = () => {
	const { sticky } = useSticky()
	return (
		<>
			<header>
				<div id="header-sticky" className={`tp-header__area header-transparent tp-header__mob-space z-index-5 
				${sticky ? "header-sticky" : ""}`}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xxl-3 col-xl-3 col-lg-6 col-md-4 col-6">
								<div className="tp-heade__logo-box">
									<Link href="/"><img src="assets/img/logo/logo.svg" alt="" /></Link>
								</div>
							</div>
							<div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-xl-block">
								<div className="tp-header__menu smoothSctoll">
									<nav id="mobile-menu">
										<ul>
											<li>
												<a href="#homeDemos">Demos</a>
											</li>
											<li>
												<a href="#featuresDemo">Features</a>
											</li>
											<li>
												<a href="#" target="_blank">Documentation</a>
											</li>
											<li><a href="https://help.themepure.net/login" target="_blank">Support</a></li>
										</ul>
									</nav>
								</div>
							</div>

							<div className="col-xxl-3 col-xl-3 col-lg-6 col-md-8 col-6">
								<div className="tp-header__action d-flex align-items-center justify-content-end">
									<a className="tp-btn ml-30 d-none d-md-block" href="#" target="_blank">
										<span>
											<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M11.5411 0.816523C9.67248 -1.37554 3.62523 2.87014 3.67424 8.34328C3.67379 8.37671 3.66679 8.40945 3.65369 8.44017C3.64077 8.47072 3.62205 8.49848 3.59858 8.52192C3.57517 8.54559 3.54731 8.56439 3.5166 8.57726C3.48611 8.59036 3.45337 8.59736 3.42017 8.59781C3.39803 8.59758 3.37635 8.59465 3.35512 8.58877C3.33389 8.58313 3.31357 8.57455 3.2946 8.56371C3.27563 8.55287 3.25801 8.53954 3.2422 8.52418C3.22662 8.50883 3.21284 8.49166 3.20155 8.47292C3.04797 8.13799 2.92602 7.78951 2.83771 7.43177C2.74941 7.07403 2.69498 6.70884 2.67533 6.34093C2.65545 5.97303 2.67036 5.604 2.71982 5.23881C2.76905 4.87384 2.85284 4.51407 2.9696 4.16468C2.98722 4.11297 2.98632 4.05673 2.96689 4.00546C2.94774 3.95424 2.91139 3.91126 2.86406 3.88387C2.81673 3.85648 2.76135 3.84637 2.7074 3.85528C2.65365 3.86431 2.60441 3.89141 2.56828 3.93251C2.31917 4.19834 2.09558 4.48719 1.90045 4.79502C1.70532 5.10285 1.53978 5.42829 1.40562 5.76728C1.2717 6.10624 1.16985 6.45701 1.10141 6.81498C1.03317 7.17307 0.998693 7.53677 0.998424 7.9013C0.989616 8.67482 1.13506 9.44225 1.42663 10.1586C1.71809 10.8748 2.1497 11.5254 2.69611 12.0724C3.24238 12.6193 3.89245 13.0515 4.60811 13.3435C5.32363 13.6353 6.09029 13.781 6.86296 13.7719C15.1131 13.5845 13.209 2.77189 11.5411 0.816523Z" fill="white" />
											</svg>
										</span>
										Buy now
									</a>
									<div className="tp-header__bar d-xl-none">
										<button className="tp-menu-bar"><i className="far fa-bars"></i></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;