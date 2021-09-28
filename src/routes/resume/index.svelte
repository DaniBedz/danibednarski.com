<script>
    import { onMount } from 'svelte';

    import { isNavOpen } from '$lib/core';

    let Resume;
    onMount(async () => {
        const module = await import('$lib/Resume.svelte');
        Resume = module.default;
    });

    $: showMenu = true;

    isNavOpen.subscribe((value) => {
        showMenu = value;
    });
</script>

<main style={ showMenu ? 'margin-left: 1rem' : 'margin-left: 0rem' }>
    <svelte:component this={ Resume } />
</main>

<style>
    main {
        display: grid;
        position: relative;
        align-content: baseline;
        justify-content: center;
    }
</style>