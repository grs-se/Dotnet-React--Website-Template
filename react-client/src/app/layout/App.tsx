import { Outlet } from 'react-router-dom';
import ContactBar from '../common/navigation/ContactBar';
//import Navbar from '../common/navigation/navbar/Navbar';
//import Navbar2 from '../common/navigation/navbar/Navbar2';
import Navbar3 from '../common/navigation/navbar/Navbar3';
//import Navbar4 from '../common/navigation/navbar/Navbar4';
import Footer from '../common/navigation/Footer';
import { useStore } from '../stores/store';
import { useEffect } from 'react';
//import LoadingComponent from '../components/LoadingComponent';
import { observer } from 'mobx-react-lite';

export default observer(function App() {
	const { projectStore, serviceStore } = useStore();

	useEffect(() => {
		projectStore.loadProjects();
		serviceStore.loadServices();

	}, [projectStore, serviceStore])

	//if (projectStore.loadingInitial) return <LoadingComponent content='Loading app' />

	return (
		<>
			<ContactBar />
			<Navbar3/>
			<Outlet />
			<Footer/>
		</>
	);
})
