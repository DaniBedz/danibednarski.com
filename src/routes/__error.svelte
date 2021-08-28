<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                error,
                status,
            },
        };
    }
</script>

<script>
    export let error;
    export let status;
</script>

<div>
    <h1>Error - Something bad happened 🤭</h1>
    <h3>{ error.message[0].toUpperCase() + error.message.slice(1, error.message.length) }</h3>
    <h3>Status Code: { status }</h3>
    <slot />
</div>

<style>
    div {
        display: grid;
        margin: auto;
        margin-top: 40vh;
    }
    h1 {
        font-size: 2rem;
    }
</style>