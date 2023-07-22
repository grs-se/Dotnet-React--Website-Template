import { Link } from "react-router-dom";

interface Props {
	id: string;
	src: string;
	category: string;
	url: string;
}

export default function GridCard ({ id, src, category, url }: Props) {
	return (
		<div key={id} className="relative">
			<img className="object-cover h-full w-full filter brightness-100 hover:brightness-100" src={src} />
			<Link to={url} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/[.85] p-6 font-base text-xl capitalize text-center cursor-pointer">{category}</Link>
		</div>
	);
};