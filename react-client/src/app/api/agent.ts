import axios, { AxiosResponse } from 'axios';
import { Project } from '../models/project';
import { Service } from '../models/service';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody)
};

const Projects = {
	list: () => requests.get<Project[]>('/projects'),
	details: (id: string) => requests.get<Project>(`/projects/${id}`),
};

const Services = {
	list: () => requests.get<Service[]>('/services'),
	details: (id: string) => requests.get<Service>(`/services/${id}`),
}

const agent = {
	Projects,
	Services
};

export default agent;