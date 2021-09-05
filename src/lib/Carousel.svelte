<script>
    import { onMount } from 'svelte';

    export let screenshotData;

    let Carousel;

    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });
</script>

<div id="screenshots">
    {#key screenshotData}
        <svelte:component
            this={ Carousel }
            autoplay
            autoplayDuration={ 5000 }
            autoplayProgressVisible
            pauseOnFocus
        >
            {#each screenshotData as screenshot}
                <picture>
                    <source
                        type="image/avif"
                        srcset={ screenshot.avifSrc }
                        alt="project screenshot"
                        width="100%"
                    >
                    <img
                        type="image/png"
                        src={ screenshot.pngSrc }
                        alt="project screenshot"
                        on:click={ () => { window.open(screenshot.pngSrc); } }
                    >
                </picture>
            {/each}
        </svelte:component>
    {/key}
</div>

<style>
    #screenshots {
        min-height: calc((60vw / 16) * 9);
        width: 59vw;
        -webkit-user-drag: none;
        cursor: pointer;
        margin: 2rem auto 1rem auto;

        padding-top: 1.5rem;
        padding-bottom: 0.25rem;
    }

    img {
        width: 100%;
    }

    :global(.sc-carousel-progress__indicator) {
        background-color: var(--color-primary-light) !important;
    }

    :global(.sc-carousel__pages-window) {
        border-radius: 0.5rem !important;
    }

    :global(.sc-carousel-arrow__circle) {
        height: calc(2vw + 2rem) !important;
        width: calc(2vw + 2rem) !important;
    }
    :global(.sc-carousel-arrow__arrow) {
        border: solid var(--color-text) !important;
        border-width: 0 var(--sc-arrow-size) var(--sc-arrow-size) 0 !important;
    }
    :global(*) {
        --sc-arrow-size: calc(0.4vw) !important;
    }
</style>