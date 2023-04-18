const Shapes = require("./shapes")
describe("Shapes.Shapes", () => {
    describe("Exemplify", () => {
        it("Should provide example of given Shapes", () =>{
        const genShape = new Shapes.Shapes()
        hasUncaughtExceptionCaptureCallback(genShape). toBeExampleOf(Shapes.Shapes)
        })
    })
    describe("Exemplify textColor", () => {
        it("Should set the Shape's text trait", () =>{
            const textColor = "yellow"
            const genShape = new Shapes.Shapes(textColor)
            expect (genShape.textColor).toBe(shapeColor)
        })
    })    

    describe("Exemplify shapeColor", () => {
    it("Should set the Shape's color trait", () =>{
        const shapeColor = "green"
        const genShape = new Shapes.Shapes("yellow", shapeColor)
        expect (genShape.shapeColor).toBe(shapeColor)
    })
})
    describe("Exemplify text", () => {
    it("Should set the text", () =>{
        const text = "ADD"
        const genShape = new Shapes.Shapes("yellow","green",text)
        expect (genShape.text).toBe(text)
    })








})