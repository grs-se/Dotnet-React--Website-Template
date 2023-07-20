import { Project } from "../../../app/models/project";

interface Props {
	project: Project;
}
export default function ProjectCard({ project }: Props) {
	return (
		<>
			<figure className="m-3 border rounded shadow-lg bg-white">
				<img src={project.pictureUrl}></img>
				<figcaption className="p-4">
					{/*<dt>Project title:</dt>*/}
					<dd className="font-bold"><em>{project.title}</em></dd>
					{/*<dt>Description: </dt>*/}
					{/*<dd>{project.description}</dd>*/}
					<dt>Date: </dt>
					<dd>{project.date}</dd>
					<dt>Category: </dt>
					<dd>{project.category}</dd>
				</figcaption>
			</figure>
		</>
	);
}