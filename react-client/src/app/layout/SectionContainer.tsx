import { ReactNode } from "react";
import SectionHeader from "../components/SectionHeader";

interface Props {
	sectionHeader?: string;
	content: ReactNode;
	width?: string;
	padding?: string;
}
export default function SectionContainer({ sectionHeader, content, width = 'w-2/3', padding = 'px-20' }: Props) {

	return (
		<div className={`w-full bg-[#ececea] ${padding}`}>
			<div className={`${width} mx-auto pt-16  mb-20 pb-16 px-8`}>
				{sectionHeader &&
					<SectionHeader>{sectionHeader}</SectionHeader>
				}
				{content}
			</div>
		</div>
	);
}