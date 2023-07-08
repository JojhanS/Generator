const Triangle = require('./shapes').Triangle;
const Circle = require('./shapes').Circle;
const Square = require('./shapes').Square;

describe('Triangle', () => {
  test('render() returns the correct SVG string with the given shape color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('render() returns the correct SVG string with the given shape color', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="100" cy="100" r="80" fill="red" />');
  });
});

describe('Square', () => {
  test('render() returns the correct SVG string with the given shape color', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
  });
});
