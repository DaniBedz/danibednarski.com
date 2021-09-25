<script>
    import contactAvif from '/static/contact.avif';
    import contactPng from '/static/contact.png';
    import cvAvif from '/static/cv.avif';
    import cvPng from '/static/cv.png';
    import githubAvif from '/static/github.avif';
    import githubPng from '/static/github.png';
    import icon21Avif from '/static/icon21.avif';
    import icon21Png from '/static/icon21.png';
    import linkedinAvif from '/static/linkedin.avif';
    import linkedinPng from '/static/linkedin.png';
    import lionHeadAvif from '/static/lionHead.avif';
    import lionHeadPng from '/static/lionHead.png';
    import myobAvif from '/static/myob.avif';
    import myobPng from '/static/myob.png';
    import taskrAvif from '/static/taskr.avif';
    import taskrPng from '/static/taskr.png';
    import thissiteAvif from '/static/thissite.avif';
    import thissitePng from '/static/thissite.png';
    import tictactoeAvif from '/static/tictactoe.avif';
    import tictactoePng from '/static/tictactoe.png';

    import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

    import AppBarHomeIcon from '$lib/AppBarHomeIcon.svelte';
    import AppBarIcon from '$lib/AppBarIcon.svelte';
    import AppMenuToggle from '$lib/AppMenuToggle.svelte';
</script>

<wrapper>
    <nav>
        <AppBarHomeIcon
            tooltip={ 'Home' }
            projectIcon={ faHouseUser }
            href="/"
            alt="home"
        />
        <AppMenuToggle />
        <AppBarIcon
            tooltip={ 'myob Sales Tracker' }
            projectIconPng={ myobPng }
            projectIconAvif={ myobAvif }
            href="/projects/salestracker"
            alt="myob icon"
        />
        <AppBarIcon
            tooltip={ 'bedz.me' }
            projectIconPng={ lionHeadPng }
            projectIconAvif={ lionHeadAvif }
            href="/projects/bedzme"
            alt="bedz.me icon"
        />
        <AppBarIcon
            tooltip={ 'Taskr' }
            projectIconPng={ taskrPng }
            projectIconAvif={ taskrAvif }
            href="/projects/taskr"
            alt="taskr icon"
        />
        <AppBarIcon
            tooltip={ '21' }
            projectIconPng={ icon21Png }
            projectIconAvif={ icon21Avif }
            href="/projects/21"
            alt="21 icon"
        />
        <AppBarIcon
            tooltip={ 'Tic-Tac-Toe' }
            projectIconPng={ tictactoePng }
            projectIconAvif={ tictactoeAvif }
            href="/projects/tictactoe"
            alt="tic-tac-toe icon"
        />
        <AppBarIcon
            tooltip={ 'This Site' }
            projectIconPng={ thissitePng }
            projectIconAvif={ thissiteAvif }
            href="/projects/thissite"
            alt="this site icon"
        />
        <AppBarIcon
            tooltip={ 'Resume / CV' }
            projectIconPng={ cvPng }
            projectIconAvif={ cvAvif }
            href="/resume"
            alt="resume icon"
        />
        <AppBarIcon
            tooltip={ 'GitHub' }
            projectIconPng={ githubPng }
            projectIconAvif={ githubAvif }
            href="https://github.com/danibedz"
            alt="github icon"
            external
        />
        <AppBarIcon
            tooltip={ 'LinkedIn' }
            projectIconPng={ linkedinPng }
            projectIconAvif={ linkedinAvif }
            href="https://www.linkedin.com/in/danibednarski"
            alt="linkedIn icon"
            external
        />
        <AppBarIcon
            tooltip={ 'Contact Me' }
            projectIconPng={ contactPng }
            projectIconAvif={ contactAvif }
            href="/contact"
            alt="Contact icon"
        />
    </nav>
</wrapper>

<style>
    wrapper {
        height: 100%;
        width: 50px;
    }

    nav {
        height: 100%;
        width: 50px;
        position: fixed;
        background: linear-gradient(rgba(125, 211, 252), rgba(45, 212, 191));
        z-index: 1;
    }
</style>