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
    <CodeBlock />

    <wrapper use:drag draggable="false">
        <CodingImage />
    </wrapper>
</main>
<slot />

<style>
    main {
        display: flex;
        padding: 0;
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