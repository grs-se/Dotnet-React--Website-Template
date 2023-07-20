//import Navbar2 from '../common/navigation/Navbar2';
import { Outlet } from 'react-router-dom';
import ContactBar from '../common/navigation/ContactBar';
import Navbar3 from '../common/navigation/Navbar3';
import Footer from '../common/navigation/Footer';
function App() {
	return (
		<>
			<ContactBar />
			<Navbar3/>
			<Outlet />
			<Footer/>
		</>
	);
}

export default App;
