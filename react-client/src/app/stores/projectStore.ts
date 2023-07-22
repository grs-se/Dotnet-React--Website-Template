import { makeAutoObservable } from 'mobx'; 
import agent from '../api/agent';
import { Project } from "../models/project";

export default class ProjectStore {
	projectRegistry = new Map<string, Project>();
	loading = false;
	loadingInitial = true;

	constructor() {
		makeAutoObservable(this)
	}

	get projectsByDate() {
		return Array.from(this.projectRegistry.values()).sort((a, b) =>
			Date.parse(a.date) - Date.parse(b.date));
	}

	loadProjects = async () => {
		try {
			const projects = await agent.Projects.list();
			projects.forEach(project => {
				this.projectRegistry.set(project.id, project);
			})
			this.setLoadingInitial(false);
		} catch (error) {
			console.log(error);
			this.setLoadingInitial(false);
		}
	}

	setLoadingInitial = (state: boolean) => {
		this.loadingInitial = state;
	};
}