import { ReactNode } from "react";

interface Props {
	children: string | ReactNode;
}

export default function SectionHeader({ children }: Props) {
	return (
		<>
			<header className="font-base pt-10 pb-4 px-20 mx-auto text-center">
				<h1 className="text-5xl">{children}</h1>
			</header>
		</>
	);
}