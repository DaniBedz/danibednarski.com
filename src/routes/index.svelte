<script>
    import CodeBlock from '$lib/CodeBlock.svelte';
    import CodingImage from '$lib/CodingImage.svelte';
    import { isNavOpen } from '$lib/core';
    import { drag } from '$lib/drag';

    let showMenu;

    isNavOpen.subscribe((value) => {
        showMenu = value;
    });
</script>

<main id="main">
    <!-- Hidden - SEO -->
    <h1 class="hide-header">Dani Bednarski - Software Engineer ["Svelte", "React", "JavaScript"]</h1>

    <CodeBlock />

    <wrapper use:drag draggable="false">
        <CodingImage />
    </wrapper>
</main>
<slot />

<style>
    main {
        padding: 0 1rem 1rem;
        grid-column: 3;
    }

    .hide-header {
        display: none;
    }

    wrapper {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 35vw;
        min-width: 20rem;
        max-width: 40rem;
        -webkit-user-drag: none;
    }
</style>