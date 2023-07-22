import Navbar2 from '../common/navigation/Navbar2';
import { Outlet } from 'react-router-dom';
import ContactBar from '../common/navigation/ContactBar';
import Navbar3 from '../common/navigation/Navbar3';
import Footer from '../common/navigation/Footer';
//import Navbar from '../common/navigation/Navbar';
//import Navbar4 from '../common/navigation/Navbar4';
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
