// Modules 
const inquirer = require('inquirer'); 
const fs = require('fs'); 

// Link to Markdown file 
const generatePage = require('./generateMarkdown.js');

// Questions
const questions = () => { 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of the project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the project about?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false; 
            }
        }

    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like your project to have?',
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the steps required to install your project!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a usage description!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a valid email address!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a github username!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can someone test the application?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a testing requirement!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors to the project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the contributors!');
                return false; 
            }
        }
    },
]);
};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// function call to initialize program
questions()
// getting user answers 
.then(answers => {
    return generatePage(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})