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

    const swatchData = [
        { backgroundColor: '--color-red', rotate: '0' },
        { backgroundColor: '--color-orange', rotate: '30' },
        { backgroundColor: '--color-peach', rotate: '60' },
        { backgroundColor: '--color-yellow', rotate: '90' },
        { backgroundColor: '--color-green', rotate: '120' },
        { backgroundColor: '--color-light-green', rotate: '150' },
        { backgroundColor: '--color-light-blue', rotate: '180' },
        { backgroundColor: '--color-blue', rotate: '210' },
        { backgroundColor: '--color-indigo', rotate: '240' },
        { backgroundColor: '--color-purple', rotate: '270' },
        { backgroundColor: '--color-pink', rotate: '300' },
        { backgroundColor: '--color-maroon', rotate: '330' },
    ];
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
    <overlay id="overlay" on:click={ toggleColorSwatch }>
        {#each swatchData as swatch}
            <ColorSwatchButton
                backgroundColor={ swatch.backgroundColor }
                rotate={ swatch.rotate }
                toggleColorSwatch
            />
        {/each}
    </overlay>
{/if}

<style>
    #colorSwatchIcon {
        display: flex;
        margin: 0.5rem auto 2rem;
        background-color: transparent;
    }

    img {
        max-height: 40px;
        max-width: 40px;
        min-height: 30px;
        min-width: 30px;
        height: calc(1rem + 3.5vw);
        width: calc(1rem + 3.5vw);
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

    overlay {
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1;
    }
</style>