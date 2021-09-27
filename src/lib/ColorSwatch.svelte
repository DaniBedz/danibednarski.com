<script>
    import colorSwatchIconSvg from '/static/ColorSwatchIcon.svg';

    import '/src/tooltip.css';
    import { isColorSwatchOpen } from '$lib/core';

    import ColorSwatchButton from './ColorSwatchButton.svelte';

    let showColorSwatch;

    isColorSwatchOpen.subscribe((value) => {
        showColorSwatch = value;
    });

    function toggleColorSwatch() {
        isColorSwatchOpen.set(!showColorSwatch);
    }
</script>

<button
    id="colorSwatchIcon"
    on:click={ toggleColorSwatch }
    tooltip="Choose Theme"
    draggable="false"
    flow="right"
>
    <img
        src={ colorSwatchIconSvg }
        alt="dani logo"
        height="40px"
        width="40px"
        draggable="false"
        onmousedown="return false"
    >
</button>

{#if showColorSwatch}
    <overlay on:click={ toggleColorSwatch } >
        <button id="close-overlay-button" class="close" on:click={ toggleColorSwatch } />
        <ColorSwatchButton backgroundColor={ '--color-red' } rotate={ '0deg' } />
        <ColorSwatchButton backgroundColor={ '--color-orange' } rotate={ '30deg' } />
        <ColorSwatchButton backgroundColor={ '--color-peach' } rotate={ '60deg' } />
        <ColorSwatchButton backgroundColor={ '--color-yellow' } rotate={ '90deg' } />
        <ColorSwatchButton backgroundColor={ '--color-green' } rotate={ '120deg' } />
        <ColorSwatchButton backgroundColor={ '--color-light-green' } rotate={ '150deg' } />
        <ColorSwatchButton backgroundColor={ '--color-light-blue' } rotate={ '180deg' } />
        <ColorSwatchButton backgroundColor={ '--color-blue' } rotate={ '210deg' } />
        <ColorSwatchButton backgroundColor={ '--color-indigo' } rotate={ '240deg' } />
        <ColorSwatchButton backgroundColor={ '--color-purple' } rotate={ '270deg' } />
        <ColorSwatchButton backgroundColor={ '--color-pink' } rotate={ '300deg' } />
        <ColorSwatchButton backgroundColor={ '--color-maroon' } rotate={ '330deg' } />
    </overlay>
{/if}

<style>
    #colorSwatchIcon {
        display: flex;
        margin: 0.5rem auto 2rem;
        background-color: transparent;
    }

    img {
        height: 40px;
        width: 40px;
    }

    button {
        display: flex;
        margin: 1rem auto;
        padding: 0;
        border: none;
        transition:transform .25s ease;
    }

    img:hover {
        transform:scale(1.2);
        transition:transform .25s ease;
    }

    #close-overlay-button {
        position: absolute;
        top: 50px;
        right: 50px;
        height: 40px;
        width: 40px;
        background-color: white;
        border-radius: 10px;
    }

    .close {
        position: relative;
        right: 0;
        top: 0;
        width: 0;
        height: 0;
        opacity: 1;
    }
    .close:hover {
        opacity: 1;
    }

    .close:before, .close:after {
        position: absolute;
        content: ' ';
        height: 33px;
        width: 5px;
        top: 4px;
        right: 17px;
        background-color: #333;
    }

    .close:before {
        transform: rotate(45deg);
    }

    .close:after {
        transform: rotate(-45deg);
    }

    overlay {
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 5;
    }
</style>