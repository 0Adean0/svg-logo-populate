const Shapes = require("./shapes")
describe("Shapes.Shapes", () => {
    describe("Exemplify", () => {
        it("Should provide example of given Shapes", () =>{
        const genShape = new Shapes.Shapes("yellow","green", "ADD")
        expect(genShape.shapeColor).toBe("green")
        })
    })
    describe("Exemplify textColor", () => {
        it("Should set the Shape's text trait", () =>{
            const textColor = "yellow"
            const genShape = new Shapes.Shapes(textColor)
            expect (genShape.textColor).toBe("yellow")
        })
    })    

    describe("Exemplify shapeColor", () => {
    it("Should set the Shape's color trait", () =>{
        const shapeColor = "green"
        const genShape = new Shapes.Shapes("yellow", shapeColor)
        expect (genShape.shapeColor).toBe("green")
    })
})
    describe("Exemplify text", () => {
    it("Should set the text", () =>{
        const text = "ADD"
        const genShape = new Shapes.Shapes("yellow","green",text)
        expect (genShape.text).toBe(text)
    })
})
    describe("Shapes.Circle", () => {
        it("Should exemplify a cricle SVG", () =>{
            const textColor = 'yellow'
            const shapeColor  = "green"
            const text = "ADD"
            const genShape = new Shapes.Circle
            const generatedShape = genShape.generateCircle(textColor, shapeColor, text)
            expect (generatedShape).toBe(`<svg version ="1.1" width = "350" height = "350" xmlns = "http://www.w3.org/2000/svg"><circle cx ="150" cy = "110" r ="80" fill = "${shapeColor}"/><text x="150" y= "75" font-size ="50" text-anchor = "middle" fill = "${textColor}">${text}</text></svg>`)
        })
    })

    describe("Shapes.Triangle", () => {
        it("Should exemplify a triangle SVG", () =>{
            const textColor = 'yellow'
            const shapeColor  = "green"
            const text = "ADD"
            const genShape = new Shapes.Triangle
            const generatedShape = genShape.generateTriangle(textColor, shapeColor, text)
            expect (generatedShape).toBe(`<svg version ="1.1" width = "350" height = "350" xmlns = "http://www.w3.org/2000/svg"><polygon points= "150, 18 224, 182 56, 182" fill ="${shapeColor}"/><text x ="150" y="75" font-size = "60" text-anchor="middle" fill = "${textColor}">${text}</text></svg>`)
        })
    })

    describe("Shapes.Rectangle", () => {
        it("Should exemplify a rectangle SVG", () =>{
            const textColor= 'yellow'
            const shapeColor  = "green"
            const text = "ADD"
            const genShape = new Shapes.Rectangle
            const generatedShape = genShape.generateRectangle(textColor, shapeColor, text)
            expect (generatedShape).toBe(`<svg version ="1.1" width = "350" height = "350" xmlns = "http://www.w3.org/2000/svg"><rect x= "10" y="10" width="120" height ="120" fill="${shapeColor}"/><text x ="60" y="30" font-size="50" text-anchor="middle" dominant-baseline="middle" fill ="${textColor}">${text}</text></svg>`)
        })
    })

})