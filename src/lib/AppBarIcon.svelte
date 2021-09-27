<script>
    import { drag } from '$lib/drag';
    import '/src/tooltip.css';

    export let alt;
    export let external;
    export let href;
    export let projectIconAvif;
    export let projectIconPng;
    export let tooltip;
</script>

{#if external}
    <a { href } on:click|preventDefault target="_blank" rel="noreferrer" draggable="false">
        <button use:drag={'appBarIconExternal'} { tooltip } aria-label={ tooltip } flow="right">

            <picture>
                    <source
                        type="image/avif"
                        srcset={ projectIconAvif }
                        { alt }
                        draggable="false"
                    >
                    <img
                        type="image/png"
                        { alt }
                        src={ projectIconPng }
                        height="40px"
                        width="40px"
                        draggable="false"
                    >
                    <div class="external-dot"/>
                </picture>
        </button>
    </a>

    {:else}
        <a {href} on:click|preventDefault sveltekit:prefetch draggable="false">
            <button use:drag={'appBarIcon'} { tooltip } aria-label={ tooltip } flow="right">
                <picture>
                    <source
                        type="image/avif"
                        srcset={ projectIconAvif }
                        { alt }
                        draggable="false"
                    >
                    <img
                        type="image/png"
                        src={ projectIconPng }
                        { alt }
                        height="40px"
                        width="40px"
                        draggable="false"
                    >
                </picture>
            </button>
        </a>
{/if}

<style>
    img, img + div {
        transition:transform .25s ease;
    }
    img:hover, img:hover + div {
        transform:scale(1.2);
    }

    button {
        display: block;
        position: relative;
        margin: 0.75rem auto;
        color: var(--color-primary-grey);
        border: none;
        height: 40px;
        width: 40px;
        background: transparent;
        padding: 0;
    }
    .external-dot {
        position: absolute;
        top: 2rem;
        left: 1.75rem;
        height: 1rem;
        width: 1rem;
        background-color: var(--color-go);
        border-radius: 50%;
        padding: 0;
    }
</style>