// Packages required for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Add a short description of the project's what, why, and how.",
    },
    {
        type: "imput",
        name: "installation",
        message: "Add installation instructions or type N/A.",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how this project will be used.",
    },
    {
        type: "input",
        name: "require",
        message: "List any dependancies here.",
    },
    {
        type: "input",
        name: "credits",
        message: "List collaborators or type None",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select which license was used for this project:",
        choices: ["Apache 2.0","GNU General Public v3.0", "MIT", "BSD 2-Clause Simlified", "BSD 3-Clause New or Revised", "Boost Software 1.0", "Creatove Commons Zero v1.0 Universal", "Eclipse Public v2.0", "GNU General Public v2.0", "GNU Lesser General Public v2.1", "Mozilla Public 2.0", "The Unlicense", "None"],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeToFile
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
