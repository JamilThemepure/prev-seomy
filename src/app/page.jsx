'use client'
import BannerArea from '@/components/BannerArea';
import ElementorArea from '@/components/ElementorArea';
import FaqArea from '@/components/FaqArea';
import Footer from '@/components/Footer';
import GreyBgOverlay from '@/components/GreyBgOverlay';
import Header from '@/components/Header';
import InnerPagesArea from '@/components/InnerPagesArea';
import IntegrationToolsArea from '@/components/IntegrationToolsArea';
import ResponsiveArea from '@/components/ResponsiveArea'; 
import TestimonialArea from '@/components/TestimonialArea';
import UsefulFeatureArea from '@/components/UsefulFeatureArea';
import Wrapper from '@/components/Wrapper';

const MainHome = () => { 

	return (
		<Wrapper>
			<Header />
			<main>
				<BannerArea />
				<GreyBgOverlay />
				<IntegrationToolsArea />
				<InnerPagesArea />
				<ResponsiveArea />
				<UsefulFeatureArea />
				<TestimonialArea />
				{/* <ElementorArea /> */}
				<FaqArea />
			</main>
			<Footer />
		</Wrapper>  
	);
};

export default MainHome;