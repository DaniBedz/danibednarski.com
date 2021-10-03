import { get, writable } from 'svelte/store';

import { browser } from '$app/env';
import '/src/global.css';

export const isNavOpen = writable(true);

export const isColorSwatchOpen = writable(false);

export function toggleIsNavOpen() {
    isNavOpen.set(!get(isNavOpen));
}

export function handleResize(windowWidth) {
    if (windowWidth < 750) {
        isNavOpen.set(false);
    } else {
        isNavOpen.set(true);
    }
}

export function toggleColorSwatch() {
    isColorSwatchOpen.set(!get(isColorSwatchOpen));
}

(function setThemeColor() {
    const themeColor = localStorage.getItem('themeColor') || '--color-blue';
    if (browser && themeColor) {
        document.querySelector(':root').style.setProperty('--color-primary-light', `var(${ themeColor })`);
    }
})();
