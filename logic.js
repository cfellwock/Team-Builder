// Javascript needs to generate an HTML page 
const inquirer = require('inquirer')
const fs = require('fs')
// const generateMarkDown = require('./Generated File')

// Arrays
const managerInfo = []




// manager function

    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managername',
                message: "Enter a manager's name.",
                validate: managernameInput => {
                    if (managernameInput) {
                        return true;
                    } else {
                        console.log("Please enter a manager's name.")
                        return false; 
                    }
                }
            },

            {
                type: 'input',
                name: 'managerid',
                message: "Enter the manager's employee ID#.",
                validate: manageridInput => {
                    if (manageridInput === 'num') {
                        return true;
                    } else {
                        console.log("Please enter a manager's employee ID#.")
                        return false; 
                    }
                }
            },

            {
                type: 'input',
                name: 'manageremail',
                message: "Enter a manager's email address.",
                validate: manageremailInput => {
                    if (manageremailInput) {
                        return true;
                    } else {
                        console.log("Please enter a manager's email address.")
                        return false; 
                    }
                }
            },

            {
                type: 'input',
                name: 'managerphone',
                message: "Enter a manager's office phone number.",
                validate: managerphoneInput => {
                    if (managerphoneInput = 'num') {
                        return true;
                    } else {
                        console.log("Please enter a manager's office phone number.")
                        return false; 
                    }
                }
            },
        ])

        .then((answers) => {
            managerInfo.push(answers.managername, answers.managerid, answers.manageremail, answers.managerphone,)
            console.log(managerInfo);
            createTeam();
        });
            
    }
    // Need to pull all of this into one new variable called manager, then run the create team function, which should have three functions with a switch statement that wil; add an engineer, add an intern and then generate the HTML once there are no more team members to add.

    

    // employee functions
   function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: "Which licenses does this project use?",
            choices: [
            'Engineer',
            'Intern',
            'Done'
        ]

        }]).then((userChoice) => {
            switch(userChoice.addEmployee) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    finishTeam();
            }
        })
    }