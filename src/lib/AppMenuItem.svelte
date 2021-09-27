<script>
    export let internal;
    export let href;
    export let target;
    export let text;
    export let rel;

    import InlineSVG from 'svelte-inline-svg';
    import { fly } from 'svelte/transition';

    import externalIcon from '/static/externalIcon.svg';


    function highlightElement(elementId) {
        const element = document.querySelector(elementId);
        const currentStyles = element.style;
        const highlightStyles = {
            borderRadius: '10px',
        };

        if (elementId === '#screenshots') {
            highlightStyles.boxShadow = '0 0 3pt 2pt var(--color-text)';
        } else {
            highlightStyles.boxShadow = '0 0 3pt 2pt var(--color-primary-light)';
        }
        Object.assign(element.style, highlightStyles);

        setTimeout(() => {
            element.style = currentStyles;
        }, 3000);
    }

    const svgAttributes = {
        height: '20px',
        width: '20px',
    };
</script>

{#if href}
    <div transition:fly|local={{ x: -200 }} >
        <a on:click={ target || internal ? null : highlightElement(href)} { href } { target } { rel }>
            <button >
                { text }
                {#if target}
                    <InlineSVG src={ externalIcon } { ...svgAttributes } />
                {/if}
            </button>
        </a>
    </div>
{/if}

<style>
    button {
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: var(--color-text);
        background-color: transparent;
        text-align: left;
        border: none;
        border-radius: 0.375rem;
        margin: 5%;
        padding: 1rem;
    }

    button:hover {
        background: var(--color-text);
        color: var(--color-primary-dark);
    }
</style>