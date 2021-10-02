<script>
    import Pill from '$lib/Pill.svelte';

    export let technologiesUsed;
</script>

<h2>Technologies Used</h2>
<div id="technologies-used">
    {#each technologiesUsed as technology}
        <a href={ technology.url } target="_blank" rel="noreferrer">
            <Pill text={ technology.name } />
        </a>
    {/each}
</div>

<style>
    a {
        padding: 1rem;
    }
    h2 {
        color: var(--color-primary-light);
        text-align: left;
        font-size: 1.5rem;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>