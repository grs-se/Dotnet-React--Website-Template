/* eslint-disable react-refresh/only-export-components */
import { observer } from 'mobx-react-lite';
import PageHeader from "../../../app/components/PageHeader";
import { useStore } from '../../../app/stores/store';
import ProjectsGallery from "./ProjectsGallery";

export default observer(function ProjectsPage() {
	const { projectStore } = useStore();
	const { projectsByDate } = projectStore;

	return (
		<div className="px-28 bg-[#ececea] pb-32">
			<div className="mx-auto w-1/2">
				<PageHeader header='Gallery' blurb='Lorem ipsum dolor sit amet, hic donec vitae orci quam lacus arcu, aenean nibh. Et bibendum etiam mauris suspendisse lorem. Placerat ut molestie leo in.' />
				<ProjectsGallery projects={projectsByDate} />
			</div>
		</div>
	);
})