<script>
    export let backgroundColor;
    export let rotate;
    export let toggleColorSwatch;

    import { fly } from 'svelte/transition';

    import { isColorSwatchOpen } from '$lib/core';

    function handleChooseColor() {
        localStorage.setItem('themeColor', backgroundColor);
        document.querySelector(':root').style.setProperty('--color-primary-light', `var(${ backgroundColor })`);
        toggleColorSwatch();
        isColorSwatchOpen.set(false);
    }

</script>

<swatch
    id="swatch"
    style={ `
        border-color: var(${ backgroundColor }) transparent transparent;
        transform: rotate(${ rotate }deg);
    ` }
    on:click={ handleChooseColor }
    in:fly={{ x: 300, y: 0, duration: 700 }}
    out:fly={{ x: 300, y: 0, duration: 200 }}
/>

<style>
    swatch {
        position: absolute;
        display: flex;
        margin: auto;
        top: -50%;
        right: 0;
        bottom: 0;
        left: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: calc(7rem + 5vw) calc(2rem + 2vw) calc(2rem + 3vw);
        transform-origin: center bottom 0;
        z-index: 10;
    }

    swatch:hover {
        filter: brightness(50%);
        cursor: pointer;
    }

</style>