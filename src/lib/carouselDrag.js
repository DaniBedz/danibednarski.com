export function carouselDrag(node, params) {
    let dragged;

    node.addEventListener('mousedown', handleMouseDown);

    function handleMouseDown() {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    function handleMouseMove() {
        dragged = true;
    }

    function handleMouseUp() {
        if (!dragged) { window.open(params.href); }

        dragged = false;

        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    }
    return {
        destroy() {
            node.removeEventListener('mousedown', handleMouseDown);
        },
    };
}
