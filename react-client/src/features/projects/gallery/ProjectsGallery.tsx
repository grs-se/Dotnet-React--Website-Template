import { Project } from "../../../app/models/project";
import Card3 from "./Card3";
//import Card2 from "./Card2";
//import ProjectCard from "./ProjectsCard";

interface Props {
	projects: Project[];
}
export default function ProjectsGallery({ projects }: Props) {
	return (
		<div className="grid grid-cols-3 gap-8 my-6">
			{projects.map(project => (
				<div key={project.id}>
					<Card3 project={project} />
					{/*<ProjectCard project={project} />*/}
					{/*<Card2 project={project} />*/}
				</div>
			))}
		</div>
	);
}