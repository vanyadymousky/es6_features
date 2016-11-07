'use strict';

/**
 * Not working in node < 6.x.x
 *
 *
 *
 *
 * @param size
 * @param cords
 * @param radius
 */
function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
    console.log(size, cords, radius);
    // do some chart drawing
}

drawES6Chart({
    cords: { x: 18, y: 30 },
    radius: 30
});
