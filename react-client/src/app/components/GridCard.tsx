interface Props {
	id: string;
	src: string;
	category: string;
}

export default function GridCard ({ id, src, category }: Props) {
	return (
		<div key={id} className="relative">
			<img className="object-cover h-full w-full filter brightness-100 hover:brightness-100" src={src} />
			<span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/[.85] p-6 font-base text-xl capitalize text-center cursor-pointer">{category}</span>
		</div>
	);
};