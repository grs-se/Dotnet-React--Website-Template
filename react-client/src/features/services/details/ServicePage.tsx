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
			<div className="grid grid-cols-6 gap-16">
				<img className="col-span-3" src={service.pictureUrl} />
				<h1 className="col-span-3 text-justify">{service.description}</h1>
			</div>
		} />);
});