import { get, writable } from 'svelte/store';

export const isNavOpen = writable(false);

export const navContents = writable([]);

export function toggleIsNavOpen() {
    isNavOpen.set(!get(isNavOpen));
}

export function handleResize(windowWidth) {
    if (windowWidth < 700) {
        isNavOpen.set(false);
    }
    if (windowWidth >= 700) {
        isNavOpen.set(true);
    }
}
