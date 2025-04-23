import { writable } from 'svelte/store';
import { localStorageStore } from './localStorageStore';

// Load progress from localStorage if available
const saved = localStorage.getItem('currentScene');
const initial = saved ?? 'chapter-1';

export const currentScene = localStorageStore<string>('currentScene', initial)