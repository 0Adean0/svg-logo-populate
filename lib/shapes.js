class Shapes {
constructor(textColor, shapeColor, text) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.text = text;
}
}

class Circle extends Shapes {
    constructor(textColor,shapeColor,text) {
        super(textColor,shapeColor,text)
    }
    generateCircle(textColor, shapeColor, text) {
        return `<svg version ="1.1" width = "350" height = "350" xmlns = "http://www.w3.org/2000/svg"><circle cx ="150" cy = "110" r ="80" fill = "${shapeColor}"/><text x="150" y= "125" font-size ="50" text-anchor = "middle" fill = "${textColor}">${text}</text></svg>`
    }
}
class Triangle extends Shapes {
    constructor(textColor,shapeColor,text) {
        super(textColor,shapeColor,text)
    }
    generateTriangle(textColor, shapeColor, text) {
        return `<svg version ="1.1" width = "350" height = "350" xmlns = "http://www.w3.org/2000/svg"><polygon points= "150, 18 224, 182 56, 182" fill ="${shapeColor}"/><text x ="150" y="125" font-size = "60" text-anchor="middle" fill = "${textColor}">${text}</text></svg>`
    }
}
class Rectangle extends Shapes {
    constructor(textColor,shapeColor,text) {
        super(textColor,shapeColor,text)
    }
    generateRectangle(textColor, shapeColor, text) {
        return `<svg version ="1.1" width = "350" height = "350" xmlns = "http://www.w3.org/2000/svg"><rect x= "10" y="10" width="120" height ="120" fill="${shapeColor}"/><text x ="60" y="65" font-size="50" text-anchor="middle" dominant-baseline="middle" fill ="${textColor}">${text}</text></svg>`
    }
}
module.exports = {
    Shapes,
    Circle,
    Triangle,
    Rectangle

}