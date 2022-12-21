const inquirer = require('inquirer');
const fs = require('fs');
const readmeFormat = ({license, name, description, installation, usage, contributing, tests,  }) =>
  `# ${name}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  
  ## Installation
  
  ${installation}
  
  ## Usage

  ${usage}
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  license
  useranme
  email`


// Description, Installation, Usage, License, Contributing, Tests, and Questions
// Table of Contents will be a pregenerated with the README
const questions = [
    {
        message: 'whats the name of your repo?',
        name: 'name',
        type: 'input'
    },{
        message: 'discribe youre project',
        name: 'description',
        type: 'input'
    },{
        message: 'discribe how to install your app',
        name: 'installation',
        type: 'input'
    },{
        message: 'discribe how to use your app',
        name: 'usage',
        type: 'input'
    },{
        message: 'who contributed on this repo',
        name: 'contributing',
        type: 'input'
    },{
        message: 'input your test instructions',
        name: 'tests',
        type: 'input'
    },{ // will generate a badge @ top screen showing license
        message: 'pick a license from said list',
        name: 'license',
        type: 'list'
    },{
        message: 'enter your username on github',
        name: 'username',
        type: 'input'
    },{
        message: 'enter your email',
        name: 'email',
        type: 'input'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// inquirer.prompt([
//     {
//         message: 'whats your repo name?',
//         name: 'name',
//         type: 'input'
//     },
//     {
//         message: 'what area are you in?',
//         name: 'location',
//         type: 'input'
//     },
//     {
//         message: 'copy and paste your repo bio',
//         name: 'bio',
//         type: 'input'
//     },
//     {
//         message: 'paste in your linkedin url',
//         name: 'linkedIn',
//         type: 'input'
//     },
//     {
//         message: 'paste in your github url',
//         name: 'github',
//         type: 'input'
//     }
// ])
// .then(function (answer){
//     console.log(answer.name)
//     console.log(answer.location)
//     console.log(answer.bio)
//     console.log(answer.linkedIn)
//     console.log(answer.github)
//     let results = `my name is ${answer.name} \n`

//     fs.appendFile(`${answer.name}.md`, `${results}\n`, (err) =>
//         err ? console.error(err) : console.log('Commit logged!')
//     );
// })