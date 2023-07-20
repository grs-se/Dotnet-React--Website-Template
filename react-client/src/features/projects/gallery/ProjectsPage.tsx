import { useEffect, useState } from "react";
import agent from "../../../app/api/agent";
import PageHeader from "../../../app/components/PageHeader";
import { Project } from "../../../app/models/project";
import ProjectsGallery from "./ProjectsGallery";

export default function ProjectsPage() {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		agent.Projects.list().then(response => {
			const projects: Project[] = [];
			response.forEach(project => {
				projects.push(project);
			});
			setProjects(projects);
		});
	}, []);

	return (
		<div className="px-28 bg-[#ececea] pb-32">
			<div className="mx-auto w-1/2">
				<PageHeader header='Gallery' blurb='Lorem ipsum dolor sit amet, hic donec vitae orci quam lacus arcu, aenean nibh. Et bibendum etiam mauris suspendisse lorem. Placerat ut molestie leo in.' />
				<ProjectsGallery projects={projects} />
			</div>
		</div>
	);
}

	//return (
	//	<PageContainer pageHeader={"Gallery"} content={<ProjectsGallery projects={projects} />}/>
	//	//<PageContainer pageHeader={"Gallery"} content={<ProjectsGallery projects={projects} />}/>
	//);