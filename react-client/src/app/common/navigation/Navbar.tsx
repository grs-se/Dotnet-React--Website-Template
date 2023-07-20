import { Button } from 'flowbite-react';
import { NavLink } from "react-router-dom";

export default function Navbar() {

	const siteTitle = {
		text: 'HRS Gardens', url: '/'
	};

	const links = [
		{ text: 'Gallery', url: '/gallery' },
		{ text: 'Services', url: '/services' },
		{ text: 'About', url: '/about' },
		{ text: 'Contact', url: '/contact' },
	];

	return (
		<>
			<header className="fixed h-16 bg-white w-full z-100 h-100 py-2 px-8 flex flex-row justify-between items-center shadow-sm">
				<NavLink to={siteTitle.url}><h1 className="text-4xl">{siteTitle.text}</h1></NavLink>
				<div>
					{links.map(link => (
						<NavLink key={link.text} to={link.url} className="mx-3">{link.text}</NavLink>
					))}
				</div>
				<Button className="primary"></Button>
			</header>
		</>
		//<>
		//	<header className="">
		//		<NavLink to={siteTitle.url}><h1 className="text-4xl">{siteTitle.text}</h1></NavLink>
		//		<div>
		//			{links.map(link => (
		//				<NavLink key={link.text} to={link.url} className="mx-3">{link.text}</NavLink>
		//			))}
		//		</div>
		//		<button className="primary"></button>
		//	</header>
		//</>
	);
}