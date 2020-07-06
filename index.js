const fs = require("fs")
const util = require("util")
const inquirer = require("inquirer")
const generateMarkdown = require("generateMarkdown.js")

const licenseBadges = ["[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)","![License: See Below](https://img.shields.io/badge/license-other-orange.svg)"]

// function to prompt array of questions for user
function readMePrompts() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your application? (This will be your ReadMe Title)",
            name: "title"
        },
        {
            type: "input",
            message: "Describe what your application does.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions?",
            name: "installation"
        },
        {
            type: "input",
            message: "How is this app meant to be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "What are the contribution guidelines?",
            name: "contributions"
        },
        {
            type: "input",
            message: "Are there any test instructions?",
            name: "test"
        },
        {
            type: "list",
            message: "Choose a license for your application.",
            choices: ["BSD", "MIT", "GPL", "Other: "],
            name: "license"
        },
        {
            type: "input",
            message: "If you are using a license not listed, please manually enter it below or press enter with no text to skip.",
            name: "licenseAlt"
        },
        {
            type: "input",
            message: "Enter your GitHub username.",
            name: "gitHub"
        },
        {
            type: "input",
            message: "Enter your email address.",
            name: "email"
        },
        {
            type: "input",
            message: "Enter any instructions on how to reach you with additional questions.",
            name: "questions"
        }]
    )
};

// function to write README file
const writeFileAsync = util.promisify(fs.writeFile)

// function to initialize program
async function init() {
    console.log("Let's generate a ReadMe for your application!");
    try {
        const data = await readMePrompts();
        if (data.license === "BSD"){
            let readMeMarkdown = generateMarkdown(data, licenseBadges[0]);
            await writeFileAsync(`README_${data.title}.md`, readMeMarkdown);
        } else if (data.license === "MIT") {
            let readMeMarkdown = generateMarkdown(data, licenseBadges[1]);
            await writeFileAsync(`README_${data.title}.md`, readMeMarkdown);
        } else if (data.license === "GPL") {
            let readMeMarkdown = generateMarkdown(data, licenseBadges[2]);
            await writeFileAsync(`README_${data.title}.md`, readMeMarkdown);
        } else {
            let readMeMarkdown = generateMarkdown(data, licenseBadges[3]);
            await writeFileAsync(`README_${data.title}.md`, readMeMarkdown);
        }
        console.log("ReadMe successfully generated.");
    } catch (err) {
        console.log(err);
    }   
}

// function call to initialize program
init();