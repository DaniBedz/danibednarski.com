import { spring } from 'svelte/motion';

import { goto } from '$app/navigation';

export function drag(node, params) {
    let x;
    let y;
    let dragged;

    const coordinates = spring(
        {
            x: 0,
            y: 0,
        },
        {
            stiffness: 0.2,
            damping: 0.4,
        },
    );

    coordinates.subscribe(($coords) => {
        node.style.transform = `translate3d(${ $coords.x }px, ${ $coords.y }px, 0)`;
    });

    node.addEventListener('mousedown', handleMouseDown);

    function handleMouseDown(event) {
        x = event.clientX;
        y = event.clientY;

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        node.style.zIndex = 3;
    }

    function handleMouseMove(event) {
        dragged = true;
        const dx = event.clientX - x;
        const dy = event.clientY - y;
        x = event.clientX;
        y = event.clientY;
        coordinates.update(($coords) => {
            return {
                x: $coords.x + dx,
                y: $coords.y + dy,
            };
        });
    }

    function handleMouseUp() {
        if (!dragged & params === 'appBarIcon') { goto(node.parentElement.href); }
        if (!dragged & params === 'appBarIconExternal') { window.open(node.parentElement.href, '_blank', 'noopener', 'noreferrer'); }

        dragged = false;
        x = 0;
        y = 0;
        coordinates.update(() => {
            return {
                x: 0,
                y: 0,
            };
        });
        node.style.zIndex = 1;

        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    }
    return {
        destroy() {
            node.removeEventListener('mousedown', handleMouseDown);
        },
    };
}
