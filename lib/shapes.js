//  set up shapes

class Triangle{
    constructor(){
        this.color = ''
    }
    setColor(shapeColor){
        this.color = shapeColor
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class SVG{
    constructor(){
        this.shape = ''
        this.text = ''
    }
    setText(textColor, chosenText){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${chosenText}</text>`
    }
    setShape(chosenShape){
        this.shape = chosenShape.render()
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }        
}

const newTriangle = new SVG().setShape(new Triangle()).setText(textColor, chosenText).render()


class Circle {
    constructor(){
        this.color = ''
    }
    setColor(shapeColor){
        this.color = shapeColor
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

const newCircle = new SVG().setShape(new Circle()).setText(textColor, chosenText).render()


class Square {
    constructor(){
        this.color = ''
    }
    setColor(shapeColor){
        this.color = shapeColor
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }

}

const newSquare = new SVG().setShape(new Square()).setText(textColor, chosenText).render()


module.exports = {Triangle, Circle, Square}