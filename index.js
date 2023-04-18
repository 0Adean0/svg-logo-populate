const inquirer =require("inquirer")
const inputMaximumLength =require("inquirer-input-maximumLength-prompt")
const fs = require("fs")
const shapes = require("./lib/shapes")


inquirer.logPrompt("inputMaximumLengthPrompt", inputMaximumLength)