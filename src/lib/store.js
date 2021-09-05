import { get, writable } from 'svelte/store';

export const isNavOpen = writable(true);

export const navContents = writable([]);

export function toggleIsNavOpen() {
    isNavOpen.set(!get(isNavOpen));
}
