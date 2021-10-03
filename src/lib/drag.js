import { spring } from 'svelte/motion';

export function drag(node) {
    const zIndex = node.style.zIndex;
    let x, y;

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

        node.style['z-index'] = 3;
    }

    function handleMouseMove(event) {
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
        x = 0;
        y = 0;

        coordinates.update(() => {
            return {
                x: 0,
                y: 0,
            };
        });

        node.style.zIndex = zIndex;

        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    }
    return {
        destroy() {
            node.removeEventListener('mousedown', handleMouseDown);
        },
    };
}
