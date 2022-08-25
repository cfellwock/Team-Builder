// Javascript needs to generate an HTML page 
const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./Constructors/Manager')
const Engineer = require('./Constructors/Engineer')
const Intern = require('./Constructors/Intern')
const Templates = require('./Generated File/Templates')

// Arrays
const teamArray = []

// Build team main function
function buildTeam() {

    // manager function
    createManager()
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
                    if (manageridInput) {
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
                    if (managerphoneInput) {
                        return true;
                    } else {
                        console.log("Please enter a manager's office phone number.")
                        return false;
                    }
                }
            },
        ])

            .then((answers) => {
                const newManager = new Manager(answers.managername, answers.managerid, answers.manageremail, answers.managerphone)
                teamArray.push(newManager)
                console.log(teamArray);
                addMembers();
            });
    }

    // employee functions
    function addMembers() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'addEmployee',
                message: "Choose an employee to add:",
                choices: [
                    'Engineer',
                    'Intern',
                    'Finish'
                ]

            }]).then((userChoice) => {
                switch (userChoice.addEmployee) {
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    default:
                        finishTeam();
                }
            });

        // Engineer Function
        function addEngineer() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'engineername',
                    message: "Enter an engineer's name.",
                    validate: engineernameInput => {
                        if (engineernameInput) {
                            return true;
                        } else {
                            console.log("Please enter an engineer's name.")
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'engineerid',
                    message: "Enter an engineer's employee ID#.",
                    validate: engineeridInput => {
                        if (engineeridInput) {
                            return true;
                        } else {
                            console.log("Please enter an engineer's employee ID#.")
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'engineeremail',
                    message: "Enter an engineer's email address.",
                    validate: engineeremailInput => {
                        if (engineeremailInput) {
                            return true;
                        } else {
                            console.log("Please enter an engineer's email address.")
                            return false;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'engineeruser',
                    message: "Enter an engineer's GitHub user ID.",
                    validate: engineeruserInput => {
                        if (engineeruserInput = 'num') {
                            return true;
                        } else {
                            console.log("Please enter an engineer's GitHub user ID.")
                            return false;
                        }
                    }
                },
            ])

                .then((answers) => {
                    const newEngineer = new Engineer(answers.engineername, answers.engineerid, answers.engineeremail, answers.engineeruser)
                    teamArray.push(newEngineer)
                    console.log(teamArray);
                    addMembers();
                });
        };
    };

    // Intern function
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internname',
                message: "Enter an intern's name.",
                validate: internnameInput => {
                    if (internnameInput) {
                        return true;
                    } else {
                        console.log("Please enter an intern's name.")
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'internid',
                message: "Enter an intern's employee ID#.",
                validate: internidInput => {
                    if (internidInput) {
                        return true;
                    } else {
                        console.log("Please enter an intern's employee ID#.")
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'internemail',
                message: "Enter an intern's email address.",
                validate: internemailInput => {
                    if (internemailInput) {
                        return true;
                    } else {
                        console.log("Please enter an intern's email address.")
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'internschool',
                message: "Enter an intern's school.",
                validate: internschoolInput => {
                    if (internschoolInput) {
                        return true;
                    } else {
                        console.log("Please enter an intern's GitHub user ID.")
                        return false;
                    }
                }
            },
        ])

            .then((answers) => {
                const newIntern = new Intern(answers.internname, answers.internid, answers.internemail, answers.internschool)
                teamArray.push(newIntern)
                console.log(teamArray);
                addMembers();
            });
    };

    // Finish team function to write to HTML
    function finishTeam() {
        const writeFile = (fileContent) => {
            fs.writeFile('')

            // NEED TO ADD FILEPATH INSTEAD OF './dist/index.html',
            fs.writeFile('./dist/index.html', fileContent, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Your team profile file has been generated!');
                }
                let html = Templates(teamArray)
            });
        };
        writeFile(html);
    };

};

// End of buildTeam function



// Callback function to initializ app
buildTeam();