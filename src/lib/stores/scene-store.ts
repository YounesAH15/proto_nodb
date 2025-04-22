import { writable } from 'svelte/store';

// Load progress from localStorage if available
const saved = localStorage.getItem('currentScene');
const initial = saved ?? 'chapter-1';

export const currentScene = writable(initial);

// Sync to localStorage
currentScene.subscribe((value) => {
  localStorage.setItem('currentScene', value);
});
