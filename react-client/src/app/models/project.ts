import { Photo } from "./photo";

export interface Project {
	id: string;
	name: string;
	description: string;
	date: string;
	location: string;
	category: string;
	pictureUrl: string;
	photos: Photo[];
}