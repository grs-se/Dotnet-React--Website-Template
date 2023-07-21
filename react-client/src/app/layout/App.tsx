import Navbar2 from '../common/navigation/Navbar2';
import { Outlet } from 'react-router-dom';
import ContactBar from '../common/navigation/ContactBar';
import Navbar3 from '../common/navigation/Navbar3';
import Footer from '../common/navigation/Footer';
import Navbar from '../common/navigation/Navbar';
import Navbar4 from '../common/navigation/Navbar4';
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
