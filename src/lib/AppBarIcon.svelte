<script>
    import '/src/tooltip.css';

    export let alt;
    export let external = null;
    export let href;
    export let id;
    export let projectIconAvif;
    export let projectIconPng;
    export let tooltip;
</script>

{#if external}
    <a { id } { href } target="_blank" rel="noreferrer" draggable="false">
        <button { tooltip } aria-label={ tooltip } flow="right">
            <dot-wrapper>
                <div class="external-dot"/>
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
                        draggable="false"
                    >
                </picture>
            </dot-wrapper>
        </button>
    </a>

    {:else}
        <a { id } { href } sveltekit:prefetch draggable="false">
            <button { tooltip } aria-label={ tooltip } flow="right">
                <dot-wrapper>
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
                        draggable="false"
                    >
                </picture>
                </dot-wrapper>
            </button>
        </a>
{/if}

<style>
    img {
        height: 100%;
        width: 100%;
    }
    img, dot-wrapper > .external-dot {
        transition:transform .25s ease;
    }
    img:hover, dot-wrapper:hover > .external-dot {
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

    dot-wrapper {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: end;
        align-content: end;
        margin: auto;
        z-index: 1;
    }
    .external-dot {
        top: clamp(1.5rem, 1rem + 2vw, 1.85rem);
        position: absolute;
        display: flex;
        align-self: end;
        height: 35%;
        width: 35%;
        background-color: var(--color-go);
        border-radius: 50%;
        padding: 0;
        z-index: 1;
    }
</style>