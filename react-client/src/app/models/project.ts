import { Photo } from "./photo";

export interface Project {
	id: string;
	title: string;
	description: string;
	date: string;
	location: string;
	category: string;
	pictureUrl: string;
	photos: Photo[];
}