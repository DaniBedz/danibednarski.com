<script>
    import { isNavOpen } from '$lib/core';

    let showMenu;

    isNavOpen.subscribe((value) => {
        showMenu = value;
    });
</script>


<main style={ showMenu ? 'margin-left: 1rem' : 'margin-left: 0' }>
    <iframe title="resume" width="100%" src="/resume.pdf" />
</main>

<style>
    main {
        display: flex;
        /* margin-left: 1rem; */
    }
    iframe {
        border: none;
    }
</style>