<script>
    export let internal;
    export let href;
    export let target;
    export let text;
    export let rel;

    import { fly } from 'svelte/transition';

    import ExternalIcon from '$lib/externalIcon.svelte';


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

    let iconColor = 'var(--color-primary-light)';
</script>

{#if href}
    <div transition:fly|local={{ x: -200 }} >
        <a on:click={ target || internal ? null : highlightElement(href)} { href } { target } { rel }>
            <button
                on:mouseover={ () => iconColor = 'var(--color-primary-dark)' }
                on:focus={ () => iconColor = 'var(--color-primary-dark)' }
                on:mouseout={ () => iconColor = 'var(--color-primary-light)' }
                on:blur={ () => iconColor = 'var(--color-primary-light)' }
            >
                { text }
                {#if target}
                    <ExternalIcon { iconColor }/>
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
        background: var(--color-primary-light);
        color: var(--color-primary-dark);
    }
</style>