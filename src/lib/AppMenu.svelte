<script>
    import daniImg from '../../static/dani.png';
</script>

<div class="wrapper">
    <nav>
        <a href="/">
            <img src={ daniImg } alt="dani text">
        </a>
        <slot/>
    </nav>
</div>

<style>
    .wrapper {
        min-width: 15rem;
    }
    nav {
        position: fixed;
        height: 100%;
        width: 15rem;
        background-color: var(--color-primary-dark);
    }

    img {
        height: calc(171px * 0.4);
        width: calc(456px * 0.4);
        display: flex;
        margin: 1.5rem auto;
        padding-bottom: 2rem;
    }
</style>