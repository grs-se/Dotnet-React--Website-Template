import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Project } from "../../app/models/project";
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
		<section className="grid grid-rows-2 grid-cols-3 w-full gap-8 h-[80vh]">
			{services.map(service => (
				<div key={service.id} className="relative">
					<img className="object-cover h-full w-full filter brightness-100 hover:brightness-100" src={service.pictureUrl} />
					<span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/[.85] p-6 font-base text-xl capitalize text-center cursor-pointer">{service.category}</span>
				</div>
			))}
		</section>
	);
}