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
    if (browser) {
        let savedColor = localStorage.getItem('themeColor');
        if (!savedColor) {
            localStorage.setItem('themeColor', '--color-blue');
            savedColor = '--color-blue';
        }
        document.querySelector(':root').style.setProperty('--color-primary-light', `var(${ savedColor })`);
    }
})();
