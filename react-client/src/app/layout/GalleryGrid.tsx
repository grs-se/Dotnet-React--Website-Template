import { Project } from "../models/project";
import { Service } from "../models/service";

interface Props {
	data: Project[] | Service[];
	image: string;
	text: string;
}

export default function GalleryGrid({ data, image, text }: Props) {
	return (
		<section className="grid grid-rows-1 grid-cols-3 w-full gap-8 h-[80vh]">
			{data.map(item => (
				<div key={item.id} className="relative">
					<img className="object-cover h-full w-full filter brightness-100 hover:brightness-100" src={image} />
					<span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/[.85] p-6 font-base text-xl capitalize text-center cursor-pointer">{text}</span>
				</div>
			))}
		</section>
	);
}