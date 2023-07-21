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
			{sectionHeader &&
				<SectionHeader>{sectionHeader}</SectionHeader>
			}
			<div className={`${width} mx-auto py-10 mb-20 px-8`}>
				{content}
			</div>
		</div>
	);
}