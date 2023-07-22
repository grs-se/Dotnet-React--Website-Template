import AboutSection from "./AboutSection";
import BannerImage from "./BannerImage";
//import DefaultCarousel from "./DefaultCarousel";
import Hero from "./Hero";
//import Hero2 from "./Hero2";
import ServicesOverview from "./ServicesOverview";

export default function HomePage() {
	return (
		<main className="h-full w-full">
			<BannerImage />
			<Hero />
			{/*<AboutSection/>*/}
			<ServicesOverview />
			{/*<DefaultCarousel />*/}
		</main>
	);
}
