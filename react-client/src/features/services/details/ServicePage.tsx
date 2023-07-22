import { observer } from "mobx-react-lite";
import SectionContainer from "../../../app/layout/SectionContainer";
import { useStore } from "../../../app/stores/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingComponent from "../../../app/components/LoadingComponent";

export default observer(function ServiceDetails() {
	const { serviceStore } = useStore();
	const { selectedService: service, loadService, loadingInitial, clearSelectedService } = serviceStore;
	const { id } = useParams();

	useEffect(() => {
		if (id) loadService(id);
		return () => clearSelectedService();
	}, [id, loadService, clearSelectedService]);

	if (loadingInitial || !service) return <LoadingComponent />;

	return (
		<SectionContainer sectionHeader={service.name} content={
			<div className="grid">
				<h1>{service.description}</h1>
			</div>
		} />);
})