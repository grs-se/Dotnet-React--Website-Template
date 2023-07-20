import axios, { AxiosResponse } from 'axios';
import { Project } from '../models/project';
import { Service } from '../models/service';

//axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody)
};

const Projects = {
	list: () => requests.get<Project[]>('/projects')
};

const Services = {
	list: () => requests.get<Service[]>('/services')

}

const agent = {
	Projects,
	Services
};

export default agent;