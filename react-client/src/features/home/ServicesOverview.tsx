import GridCard from "../../app/components/GridCard";
import SectionContainer from "../../app/layout/SectionContainer";
import { useStore } from "../../app/stores/store";
import { Service } from "../../app/models/service";
import { observer } from "mobx-react-lite";
//import { Service } from "../../app/models/service";
//import { Service } from "../../app/models/service";

//interface Props {
//	service: Service;
//}

export default observer(function ServicesOverview() {
	const { serviceStore } = useStore();

	const { services } = serviceStore;

	return (
		<SectionContainer sectionHeader={'Services'} width={'w-full'} padding={'px-20'} content={
			<section className="grid grid-rows-1 grid-cols-3 w-full gap-8 max-h-max">
				{services.map((service: Service) => (
					<GridCard id={service.id} src={service.pictureUrl} category={service.name} url={`services/${service.id}`} />
				))
				}
			</section>
		} />
	);
})