<script>
    import Fa from 'svelte-fa/src/fa.svelte';

    export let href;
    export let tooltip = false;
    export let projectIcon;
</script>

    <a { href } sveltekit:prefetch draggable="false">
        <button { tooltip } aria-label={ tooltip } flow="right">
            <Fa icon={ projectIcon } size='2.3x' />
        </button>
    </a>

<style>
    button {
        transition:transform .25s ease;
    }

    button:hover {
        transform:scale(1.1);
    }

    button {
        display: flex;
        margin: 1rem auto;
        color: var(--color-primary-dark);
        border: none;
        background: transparent;
        padding: 0;
    }

    /* START TOOLTIP STYLES */
    [tooltip] {
        position: relative;
    }

    /* Applies to all tooltips */
    [tooltip]::before,
    [tooltip]::after {
        text-transform: none;
        line-height: 1;
        user-select: none;
        pointer-events: none;
        position: absolute;
        display: none;
        opacity: 0;
    }
    [tooltip]::before {
        content: '';
        border: 5px solid;
        z-index: 1001;
    }
    [tooltip]::after {
        content: attr(tooltip);
        text-align: center;
        min-width: 3em;
        max-width: 21em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 1ch 1.5ch;
        border-radius: .3ch;
        box-shadow: 0 1em 2em -.5em var(--color-primary-dark);
        background: var(--color-text);
        color: var(--color-primary-dark);
        z-index: 1000;
    }

    /* Make the tooltips respond to hover */
    [tooltip]:hover::before,
    [tooltip]:hover::after {
        display: block;
    }

    /* don't show empty tooltips */
    [tooltip='']::before,
    [tooltip='']::after {
        display: none !important;
    }

    [tooltip][flow^="right"]::before {
        top: 50%;
        border-left-width: 0;
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-right-color: var(--color-text);
        right: calc(0em - 5px);
        transform: translate(.5em, -50%);
    }
    [tooltip][flow^="right"]::after {
        top: 50%;
        left: calc(100% + 5px);
        transform: translate(.5em, -50%);
    }

    /* KEYFRAMES */
    @keyframes tooltips-vert {
        to {
        opacity: 1;
        transform: translate(-50%, 0);
        }
    }

    @keyframes tooltips-horz {
        to {
        opacity: 1;
        transform: translate(0, -50%);
        }
    }

    [tooltip][flow^="right"]:hover::before,
    [tooltip][flow^="right"]:hover::after {
        animation: tooltips-horz 300ms ease-out forwards;
    }
</style>