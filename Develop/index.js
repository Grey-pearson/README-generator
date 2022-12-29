const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
const readmeFormat = (name, {data}, license) =>
  `# ${name}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage

  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  ${license}`


// Description, Installation, Usage, License, Contributing, Tests, and Questions
// Table of Contents will be a pregenerated with the README
// const questions = [
//     {
//         message: 'whats the name of your repo?',
//         name: 'name',
//         type: 'input'
//     },{
//         message: 'discribe youre project',
//         name: 'description',
//         type: 'input'
//     },{
//         message: 'discribe how to install your app',
//         name: 'installation',
//         type: 'input'
//     },{
//         message: 'discribe how to use your app',
//         name: 'usage',
//         type: 'input'
//     },{
//         message: 'who contributed on this repo',
//         name: 'contributing',
//         type: 'input'
//     },{
//         message: 'input your test instructions',
//         name: 'tests',
//         type: 'input'
//     },{ // will generate a badge @ top screen showing license
//         message: 'pick a license from said list',
//         name: 'license',
//         type: 'list',
//         choices: ['MIT license', 'The Unlicense']
//     },{
//         message: 'enter your username on github',
//         name: 'username',
//         type: 'input'
//     },{
//         message: 'enter your email',
//         name: 'email',
//         type: 'input'
//     }
// ];


inquirer
  .prompt([
    /* Pass your questions in here */ // find if questions object can be passed in here
    {
        message: 'whats the name of your repo?',
        name: 'title',
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
        type: 'list',
        choices: ['MIT license', 'The Unlicense']
    },{
        message: 'enter your username on github',
        name: 'username',
        type: 'input'
    },{
        message: 'enter your email',
        name: 'email',
        type: 'input'
    }
])
    .then((answers) => {
        console.log('128')
        fileName = answers.title
        console.log('130')
        console.log(answers)
        writeToFile(fileName, answers)
        console.log(132)
    })
    .catch((error) => {
        console.log('error ocured try again ' + error )
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(fileName)
    let license
    if(data.license === 'MIT license'){
        license = 
        `MIT License

        Copyright (c) 2022 ${data.username}
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.`
    } else{
        license = 
        `This is free and unencumbered software released into the public domain.

        Anyone is free to copy, modify, publish, use, compile, sell, or
        distribute this software, either in source code form or as a compiled
        binary, for any purpose, commercial or non-commercial, and by any
        means.
        
        In jurisdictions that recognize copyright laws, the author or authors
        of this software dedicate any and all copyright interest in the
        software to the public domain. We make this dedication for the benefit
        of the public at large and to the detriment of our heirs and
        successors. We intend this dedication to be an overt act of
        relinquishment in perpetuity of all present and future rights to this
        software under copyright law.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
        OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
        ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
        OTHER DEALINGS IN THE SOFTWARE.
        
        For more information, please refer to <https://unlicense.org>`
    }

    // readmeFormat(license, data.name, data.description, data.installation, data.usage, data.contributing, data.tests)
    // readmeFormat(license, data)

    fs.appendFile(`${fileName}.md`, `${readmeFormat(fileName, {data}, license)}`, (err)=>
    err ? console.error(err) : console.log('Commit logged!')
    );

}

/* what does this doooooooooooo
// TODO: Create a function to initialize app
function init() {
    // runs question function
}
// Function call to initialize app
init();
*/