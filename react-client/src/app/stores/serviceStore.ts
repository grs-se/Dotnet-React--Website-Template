import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Service } from "../models/service";

export default class ServiceStore {
	services: Service[] = [];
	serviceRegistry = new Map<string, Service>();
	selectedService: Service | undefined = undefined;
	loading = false;
	loadingInitial = true;

	constructor() {
		makeAutoObservable(this);
	}

	loadServices = async () => {
		try {
			this.services = await agent.Services.list();
			this.setLoadingInitial(false);
		} catch (error) {
			console.log(error);
			this.setLoadingInitial(false);
		}
	};

	loadService = async (id: string) => {
		let service = this.getService(id);
		if (service) {
			this.selectedService = service;
			return service;
		}
		else {
			this.setLoadingInitial(true);
			try {
				service = await agent.Services.details(id);
				this.setService(service);
				runInAction(() => this.selectedService = service);
				this.setLoadingInitial(false);
			} catch (error) {
				console.log(error);
				this.setLoadingInitial(false);
			}
		}
	}

	private getService = (id: string) => {
		return this.serviceRegistry.get(id);
	}

	private setService(service: Service) {
		this.serviceRegistry.set(service.id, service);
	}

	setLoadingInitial = (state: boolean) => {
		this.loadingInitial = state;
	};

	clearSelectedService = () => {
		this.selectedService = undefined;
	};
}