// src/stores/localStorageStore.js
import { writable, type Unsubscriber, type Writable } from 'svelte/store';
import { browser } from '$app/environment';




export function localStorageStore<T>(key: string, initialValue: T): Writable<T> {
    const store: Writable<T> = writable<T>(initialValue, (set) => {
        if (!browser) return;

        try {
        const json = localStorage.getItem(key);
        if (json) set(JSON.parse(json));
        } catch (e) {
            console.error(`Error parsing localStorage key "${key}":`, e);
        }

        const unsubscribe: Unsubscriber = store.subscribe((value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(`Error setting localStorage key "${key}":`, e);
        }
        });

        return unsubscribe;
    });

    return store;
}
