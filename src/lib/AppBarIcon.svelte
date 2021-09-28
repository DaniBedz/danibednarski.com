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
            <dot-wrapper>
                <div class="external-dot"/>
            </dot-wrapper>
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
                        height="100%"
                        width="100%"
                        draggable="false"
                    >
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
                        height="100%"
                        width="100%"
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
        max-height: 40px;
        max-width: 40px;
        min-height: 30px;
        min-width: 30px;
        height: calc(1rem + 3.5vw);
        width: calc(1rem + 3.5vw);
        background: transparent;
        padding: 0;
    }
    .external-dot {
        position: absolute;
        display: flex;
        align-self: end;
        height: 30%;
        width: 30%;
        background-color: var(--color-go);
        border-radius: 50%;
        padding: 0;
    }

    dot-wrapper {
        display: flex;
        position: absolute;
        height: 100%;
        width: 100%;
        justify-content: end;
        align-content: end;
        margin: auto;
    }
</style>