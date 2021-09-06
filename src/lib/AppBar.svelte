<script>
    import { isNavOpen } from './store.js';

    import contact from '../../static/contact.png';
    import cv from '../../static/cv.png';
    import daniImg from '../../static/dani.png';
    import github from '../../static/github.png';
    import icon21 from '../../static/icon21.png';
    import linkedin from '../../static/linkedin.png';
    import lionHead from '../../static/lionHead.png';
    import myob from '../../static/myob.png';
    import taskr from '../../static/taskr.png';
    import thissite from '../../static/thissite.png';
    import tictactoe from '../../static/tictactoe.png';

    import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

    import AppBarHomeIcon from '$lib/AppBarHomeIcon.svelte';
    import AppBarIcon from '$lib/AppBarIcon.svelte';
    import AppMenuToggle from '$lib/AppMenuToggle.svelte';

    let showMenu;
    isNavOpen.subscribe((value) => {
        showMenu = value;
    });

</script>

{#if showMenu}
    <a href="/">
        <img src={ daniImg } alt="dani text" />
    </a>
{/if}

<div class="wrapper">
    <nav>
        <AppBarHomeIcon tooltip={ 'Home' } projectIcon={ faHouseUser } href="/" />
        <AppBarIcon tooltip={ 'bedz.me' } projectIcon={ lionHead } href="/projects/bedzme" alt="bedz.me lion icon" />
        <AppBarIcon tooltip={ 'myob Sales Tracker' } projectIcon={ myob } href="/projects/salestracker" alt="myob icon" />
        <AppBarIcon tooltip={ 'Taskr' } projectIcon={ taskr } href="/projects/taskr" alt="taskr icon" />
        <AppBarIcon tooltip={ '21' } projectIcon={ icon21 } href="/projects/21" alt="21 icon" />
        <AppBarIcon tooltip={ 'Tic-Tac-Toe' } projectIcon={ tictactoe } href="/projects/tictactoe" alt="tic-tac-toe icon" />
        <AppBarIcon tooltip={ 'This Site' } projectIcon={ thissite } href="/projects/thissite" alt="this site icon" />
        <AppBarIcon tooltip={ 'Resume / CV' } projectIcon={ cv } href="/resume" alt="resume icon" />
        <AppBarIcon tooltip={ 'GitHub' } projectIcon={ github } href="https://github.com/danibedz" alt="github icon" external />
        <AppBarIcon tooltip={ 'LinkedIn' } projectIcon={ linkedin } href="https://www.linkedin.com/in/danibednarski" alt="linkedIn icon" external />
        <AppBarIcon tooltip={ 'Contact Me' } projectIcon={ contact } href="/contact" alt="Contact icon" />
        <AppMenuToggle />
    </nav>
</div>
<style>
    .wrapper {
        min-width: 4rem;
    }
    nav {
        position: fixed;
        height: 100%;
        width: 4rem;
        background: linear-gradient(rgba(125, 211, 252), rgba(45, 212, 191));
        z-index: 1;
    }

    img {
        position: fixed;
        height: calc(171px * 0.4);
        width: calc(456px * 0.4);
        display: flex;
        top: 1rem;
        left: 5.5rem;
        padding-bottom: 2rem;
    }
</style>