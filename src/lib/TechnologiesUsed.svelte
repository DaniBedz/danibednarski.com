<h2>Technologies Used</h2>
<div id="technologies-used">
    <slot/>
</div>

<style>
    h2 {
        color: var(--color-primary-light);
        font-size: calc(1vw + 0.75rem);
        text-align: left;
    }

    #technologies-used {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0.5rem 1rem;
    }
</style>