import { ReactNode } from "react";
import PageHeader from "../components/PageHeader";

interface Props {
	pageHeader: string;
	content: ReactNode;
	width: string;
}
export default function PageContainer({ pageHeader, content }: Props) {
	return (
		<div className="px-28 bg-[#ececea] pb-32">
			<div className="mx-auto w-1/2">
				<PageHeader header={pageHeader} />
				{content}
			</div>
		</div>
	);
}