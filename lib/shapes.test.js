const Triangle = require('../lib/shapes').Triangle;
const Circle = require('../lib/shapes').Circle;
const Square = require('../lib/shapes').Square;


test('render() returns the correct SVG string with the given shape color for Triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });