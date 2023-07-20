import { ReactNode } from "react";

interface Props {
	header: string | ReactNode;
	blurb?: string;
}

export default function PageHeader({ header, blurb }: Props) {
	return (
		<header className="py-10">
			<h1 className="text-3xl py-2">{header}</h1>
			<p className="text-gray-500 text-sm py-2">{blurb}</p>
		</header>
	);
}