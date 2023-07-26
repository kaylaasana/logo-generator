// const shape = new Square();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
const {Square, Circle, Square, Circle} = require('./shapes')

    describe("Square", () => {
      it("should render a blue Square", () => {
        
        const Square = new Square();
        Square.setColor('blue');
        const SVG = Square.render()
  
        expect(SVG).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  
      });
    });

    describe("Circle", () => {
        it("should render a blue Circle", () => {
          
          const circle = new Circle();
          circle.setColor('blue');
          const SVG = circle.render()
    
          expect(SVG).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    
        });
      });

      describe("Square", () => {
        it("should render a blue Square", () => {
          
          const square = new Square();
          square.setColor('blue');
          const SVG = square.render()
    
          expect(SVG).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    
        });
      });