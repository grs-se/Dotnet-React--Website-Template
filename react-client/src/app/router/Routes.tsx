import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProjectsPage from "../../features/projects/gallery/ProjectsPage";
import ServicePage from "../../features/projects/services/ServicePage";
import App from "../layout/App";

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '', element: <HomePage /> },
			{ path: 'gallery', element: <ProjectsPage /> },
			{
				path: 'services', children: [
					{ path: 'services/:id', element: <ServicePage /> }
				]
			},
			//{path: 'about', element: <AboutPage/>},
			//{path: 'contact', element: <ContactPage/>},
		]
	}
];

export const router = createBrowserRouter(routes);