import { Project } from "../../../app/models/project";

interface Props {
	project: Project;
}

export default function Card3({ project }: Props) {
	return (

		<div>
			<p className="capitalize mb-4 text-gray-500 font-slim text-base">{project.category}</p>
			<a href="#">
				<img className="object-cover" src={project.pictureUrl} alt="" />
			</a>
			{/*<div className="p-5">*/}
			{/*	<a href="#">*/}
			{/*		<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>*/}
			{/*	</a>*/}
			{/*	<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>*/}
			{/*	<a href="#" className="inline-flex items-center px-2 py-1.5 text-sm font-medium text-center text-white bg-green-800 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
			{/*		Read more*/}
			{/*		<svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">*/}
			{/*			<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />*/}
			{/*		</svg>*/}
			{/*	</a>*/}
			{/*</div>*/}
		</div>
	);
}