<script>
    import { fly, fade } from 'svelte/transition';

    import Logo from '$lib/Logo.svelte';

</script>
<nav>
    <div in:fade={{ duration: 600 }}>
        <Logo />
    </div>
    <div in:fly={{ x: -400, duration: 600 }}>
        <slot/>
    </div>
</nav>

<style>
    nav {
        grid-column: 2;
        width: 13.5rem;
        margin-top: 2rem;
    }
</style>