<script>
    export let icon = null;
    export let internal = null;
    export let href;
    export let target = null;
    export let text;
    export let rel = null;

    import Fa from 'svelte-fa/src/fa.svelte';

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
</script>

<!-- If AppMenuItem does not have front matter for item, (e.g. private repo, no github),
    don't render element -->
{#if href}
        <a on:click={ target || internal ? null : highlightElement(href)} { href } { target } { rel } >
            <button>
                { text }
                <Fa icon={ icon } size="1.2x" />
            </button>
        </a>
{/if}

<style>
        button {
            display: flex;
            justify-content: space-between;
            width: 90%;
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