import SectionContainer from "../../app/layout/SectionContainer";
import BannerImage from "./BannerImage";
//import DefaultCarousel from "./DefaultCarousel";
import Hero from "./Hero";
import ServicesOverview from "../services/ServicesOverview";




export default function HomePage() {
	return (
		<main className="h-full w-full">
			<BannerImage />
			<Hero />
			<SectionContainer sectionHeader="Services Overview" content={
				<ServicesOverview />
			} />
			{/*<DefaultCarousel />*/}
		</main>
	);
}
