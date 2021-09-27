<script>
    import HomeIcon from '/static/home.svg';
    import '/src/tooltip.css';

    export let href;
    export let tooltip;
</script>

    <a { href } sveltekit:prefetch draggable="false">
        <button { tooltip } aria-label={ tooltip } flow="right">
            <img src={ HomeIcon } alt='home' onmousedown='return false'>
        </button>
    </a>

<style>
    button {
        display: flex;
        margin: 1rem auto;
        padding: 0;
        border: none;
        background: transparent;
        transition:transform .25s ease;
    }

    button:hover {
        transform:scale(1.1);
    }

    img {
        height: 40px;
        width: 40px;
    }
</style>