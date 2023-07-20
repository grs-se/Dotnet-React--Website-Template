import { ReactNode } from "react";
import SectionHeader from "../components/SectionHeader";

interface Props {
	sectionHeader: string;
	content: ReactNode;
}
export default function SectionContainer({ sectionHeader, content }: Props) {
	return (
		<div className="pt-16 bg-gray-100 w-2/3 mx-auto mb-20 pb-16 px-8">
			<SectionHeader>{sectionHeader}</SectionHeader>
			{content}
		</div>
	);
}