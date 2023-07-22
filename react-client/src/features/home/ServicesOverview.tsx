import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import GridCard from "../../app/components/GridCard";
import SectionContainer from "../../app/layout/SectionContainer";
import { Project } from "../../app/models/project";
//import { Service } from "../../app/models/service";
//import { Service } from "../../app/models/service";

//interface Props {
//	service: Service;
//}

export default function ServicesOverview() {
	const [services, setServices] = useState<Project[]>([]);

	useEffect(() => {
		agent.Projects.list().then(response => {
			const services: Project[] = [];
			response.forEach(service => {
				services.push(service);
			});
			setServices(services);
		});
	}, []);

	return (
		<SectionContainer sectionHeader={'Services'} width={'w-full'} padding={'px-20'} content={
			<section className="grid grid-rows-2 grid-cols-3 w-full gap-8 h-[660px]">
				{services.map(service => (
					<GridCard id={service.id} src={service.pictureUrl} category={service.category} />
				))
				}
			</section>
		} />
	);
}