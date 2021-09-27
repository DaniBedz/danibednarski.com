<script>
    import { onMount } from 'svelte';

    import { carouselDrag } from '$lib/carouselDrag';
    import { isNavOpen } from '$lib/core';

export let screenshotData;

let Carousel;

let showMenu;

isNavOpen.subscribe((value) => {
        showMenu = value;
});

onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
});
</script>

<div id="screenshots" class={ showMenu ? 'navOpen' : 'navClosed'}>
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
        max-width: 80rem;
        margin: auto;
        cursor: pointer;
        -webkit-user-drag: none;
    }

    .navOpen {
        height: clamp(14rem, -8rem + 49.5vw, 42rem);
        width: clamp(24rem, 10rem + 20vw, auto);
    }

    .navClosed {
        height: clamp(14rem, -1rem + 50vw, 42rem);
        width: clamp(24rem, 10rem + 20vw, auto);
    }
    img {
        height: 100%;
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
        border: solid var(--color-primary-light) !important;
        border-width: 0 var(--sc-arrow-size) var(--sc-arrow-size) 0 !important;
    }

    :global(.sc-carousel-dot__dot_active) {
        background-color: var(--color-primary-light) !important;

    }
    :global(*) {
        --sc-arrow-size: calc(0.4vw) !important;
    }
</style>
