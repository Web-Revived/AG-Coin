import { writable } from "svelte/store";

export const sidebarOpen = writable(true);
export const overlay = writable();