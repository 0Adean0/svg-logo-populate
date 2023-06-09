const inquirer = require("inquirer")
const inputMaximumLength = require("inquirer-maxlength-input-prompt")
const fs = require("fs")
const shapes = require("./lib/shapes")


inquirer.registerPrompt("inputMaximumLengthprompt", inputMaximumLength)

inquirer.prompt([{
    type: "inputMaximumLengthPrompt",
    name: "text",
    message: "Type your text that will appear on your logo. Please type no more than 3 characters",
    maxLength: 3,
},
{
    type: "input",
    name: "textColor",
    message: "Type yourdesired text color using a color keyword or its hexadecimal values if known"
},
{
    type: "list",
    name: "shape",
    message: "What shape would you like to have presented from the choices provided?",
    choices: ["Circle", "Triangle", "Rectangle"],
},
{
    type: "input",
    name: "shapeColor",
    message: "Type your desired shape color using a color keyword or its hexidecimal values if known"
}])
    .then((response) => {
        console.log(response)
        writeSVG("personal-logo.svg", response)
    })

const writeSVG = (fileName, data) => {
    if (data.shape === "Circle") {
        const shape = new shapes.Circle(data.textColor, data.shapeColor, data.text)
        fs.writeFile("img/logo.svg", shape.generateCircle(data.textColor, data.shapeColor, data.text), (err) => err ?
            console.log(err) : console.log("Generated Personal-Logo.svg"))
    } else if (data.shape === "Triangle") {
        const shape = new shapes.Triangle(data.textColor, data.shapeColor, data.text)
        fs.writeFile("img/logo.svg", shape.generateTriangle(data.textColor, data.shapeColor, data.text), (err) => err ?
            console.log(err) : console.log("Generated Personal-Logo.svg"))
    }
    else if (data.shape === "Rectangle") {
        const shape = new shapes.Rectangle(data.textColor, data.shapeColor, data.text)
        fs.writeFile("img/logo.svg", shape.generateRectangle(data.textColor, data.shapeColor, data.text), (err) => err ?
            console.log(err) : console.log("Generated Personal-Logo.svg"))

    }
}