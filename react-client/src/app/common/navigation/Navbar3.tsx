import { useState } from "react";
import { NavLink } from "react-router-dom";

//interface Props {
//	isOpen: false;
//}

export default function Navbar3() {
	const links = [
		//{ text: 'Home', url: '/' },
		{ text: 'Gallery', url: '/gallery' },
		{ text: 'Services', url: '/services', children: [{ text: 'Conservation', url: '/services' }] },
		{ text: 'About', url: '/about' },
		{ text: 'Contact', url: '/contact' },
	];

	const [isOpen, setOpen] = useState(false);

	const handleDropDown = () => {
		setOpen(!isOpen);
	};

	return (
		<nav className="bg-gray-100 border-gray-200 dark:bg-gray-900 dark:border-gray-700 border-b">
			<div className="flex flex-wrap items-end justify-between mx-auto py-4 px-32 h-32">

				<a href="#" className="flex items-center h-full">
					{/*<img src="" className="h-8 mr-3" alt="Flowbite Logo" />*/}
					{/*<img className="h-full" src="/images/logo-cropped.jpg" alt="company logo" />*/}
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HRS Gardens</span>
				</a>
				<button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
					</svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<a href="/" className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent" aria-current="page">Home</a>
						</li>

						{links.map(link => (
							link.children ? (
								<li onClick={handleDropDown} className="relative">
									<button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-green-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{link.text} <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
									</svg>
										{/*<!-- Dropdown menu -->*/}
									</button>
									<li>
										<div id="dropdown"
											className={`${isOpen ? "block" : "hidden"} absolute z-10 font-normal bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
											<ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
												{link.children.map(childLink => (
													<li>
														<NavLink to={childLink.url} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{childLink.text}</NavLink>
													</li>
												))}
											</ul>
										</div>
									</li>
								</li>
							) :
								<li>
									<NavLink to={link.url} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{link.text}</NavLink>
								</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}