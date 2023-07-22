import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from '../../../stores/store';
import { Service } from '../../../models/service';
//import { observer } from 'mobx-react-lite';

export default function NavLinks(){

	const { serviceStore } = useStore();

	const { services } = serviceStore;

	const [isOpen, setOpen] = useState(false);

	const handleDropDown = () => {
		setOpen(!isOpen);
	};

	const links = [
		//{ text: 'Home', url: '/' },
		{ text: 'Gallery', url: '/gallery' },
		{ text: 'Services', url: '/services', children: [services.map((service: Service) => { return { text: service.name, url: service.id }; })] },
		//{ text: 'Services', url: '/services', children: [...services.map(service => { text: service.name})]},
		{ text: 'About', url: '/about' },
		{ text: 'Contact', url: '/contact' },
	];

	return (
		links.map(link => (
			!link.children ?
				<li>
					<NavLink to={link.url} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{link.text}</NavLink>
				</li>
				: (
					<li onClick={handleDropDown} className="relative">
						<button id="dropdownNavbarLink" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-green-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{link.text} <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
						</svg>
						</button>
						{/*<!-- Dropdown menu -->*/}
						<li>
							<div id="dropdown"
								className={`${isOpen ? "block" : "hidden"} absolute z-10 font-normal bg-white divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
								<ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
									{link.children.map(childLink => (
										childLink.map(c => (
											<li>
												<NavLink to={`services/${c.url}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{c.text}</NavLink>
											</li>
										)
										)))}
								</ul>
							</div>
						</li>
					</li>
				)
		))
	);
}