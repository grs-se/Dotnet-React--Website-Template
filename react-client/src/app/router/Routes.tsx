import { createBrowserRouter, RouteObject } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import HomePage from "../../features/home/HomePage";
import ProjectsPage from "../../features/projects/gallery/ProjectsPage";
import ServicePage from "../../features/services/details/ServicePage";
import App from "../layout/App";

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '', element: <HomePage /> },
			{ path: 'gallery', element: <ProjectsPage /> },
			{ path: 'services/:id', element: <ServicePage /> },
			//{
			//	path: 'services', element: <ServicePage />, children: [
			//		{ path: 'services/:id', element: <ServicePage /> }
			//	]
			//},
			{ path: 'about', element: <AboutPage /> },
			//{path: 'contact', element: <ContactPage/>},
		]
	}
];

export const router = createBrowserRouter(routes);