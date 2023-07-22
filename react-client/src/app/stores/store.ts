import { createContext, useContext } from "react";
import ProjectStore from "./projectStore";
import ServiceStore from "./serviceStore";

interface Store {
	projectStore: ProjectStore,
	serviceStore: ServiceStore
}

export const store: Store = {
	projectStore: new ProjectStore(),
	serviceStore: new ServiceStore()
};

export const StoreContext = createContext(store);

export function useStore() {
	return useContext(StoreContext);
}