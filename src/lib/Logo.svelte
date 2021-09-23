<script>
    import daniImgPng from '/static/dani.png';
    import daniImgAvif from '/static/dani.avif';
</script>

<a href="/">
    <picture>
        <source
            type="image/avif"
            srcset={ daniImgAvif }
            alt="dani logo"
            draggable="false"
        >
        <img
            type="image/png"
            src={ daniImgPng }
            alt="dani logo"
            draggable="false"
        >
    </picture>
</a>

<style>
    img {
        position: fixed;
        height: auto;
        width: 11rem;
        display: flex;
        top: 1rem;
        margin-left: 1.5rem;
        padding-bottom: 2rem;
    }
</style>