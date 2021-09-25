<script>
    import { onMount } from 'svelte';

    import { carouselDrag } from '$lib/carouselDrag';

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
                        draggable="false"
                    >
                    <img
                        type="image/png"
                        src={ screenshot.pngSrc }
                        alt="project screenshot"
                        use:carouselDrag={ { href: screenshot.pngSrc } }
                        draggable="false"
                    >
                </picture>
            {/each}
        </svelte:component>
    {/key}
</div>

<style>
    #screenshots {
        display: flex;
        height: auto;
        margin: auto;
        padding: 1rem 0 0;
        -webkit-user-drag: none;
        max-width: 80rem;
    }

    img {
        height: auto;
        width: 100%;
        object-fit: cover;
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