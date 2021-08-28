<script>
    export let alt;
    export let external = null;
    export let href = null;
    export let projectIcon;
    export let tooltip = false;
</script>

{#if external}
    <a { href } target="_blank" rel="noreferrer">
        <button { tooltip } aria-label={ tooltip } flow="right">
            <img src={ projectIcon } { alt } height="40px" width="40px">
            <div class="external-dot"/>
        </button>
    </a>

    {:else}
        <a {href} sveltekit:prefetch>
            <button { tooltip } aria-label={ tooltip } flow="right">
                <img src={ projectIcon } { alt } height="40px" width="40px">
            </button>
        </a>
{/if}

<style>

    button {
        display: flex;
        margin: 1rem auto;
        color: var(--color-primary-grey);
        border: none;
        background: transparent;
    }
    .external-dot {
        position: absolute;
        top: 2rem;
        left: 2rem;
        height: 1rem;
        width: 1rem;
        background-color: var(--color-green);
        border-radius: 50%;
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
        box-shadow: 0 1em 2em -.5em var(--color-primary-dark);;
        background: var(--color-text);
        color: var(--color-primary-dark);
        z-index: 1000;
    }

    /* Make the tooltips respond to hover */
    [tooltip]:hover::before,
    [tooltip]:hover::after {
        display: block;
    }

    /* Don't show empty tooltips */
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

    @keyframes stretch {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.3);

        }
        100% {
            transform: scale(1);
        }
    }
</style>