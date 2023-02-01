// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// I created the README format on a seperate file, and am pulling it here
const generateRead = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer.prompt([
    // I included the most important questions that should be shown on any professional README
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects/apps title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project/app.',
    },
    {
        type: 'input',
        name: 'installaton',
        message: 'Explain any installation process.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain the usage of the project.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Which license will be used? Please type one of these three: MIT, Eclipse or Mozilla',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Type your tests, if any, for your project.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
])
// this function pulls all of the user's inputs and pushes them onto the README file that will be generated
.then((answers) => {
    const readmeContent = generateRead(answers);

    fs.writeFile("README.md", readmeContent, (err) => 
        err ? console.log(err): console.log("README has been generated!"));
});