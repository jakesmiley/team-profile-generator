const inquirer = require('inquirer');
const fs = require('fs');
const template = require("./src/template");

//team member constructors
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const { prompt } = inquirer;

const teamBuilder = () => {
    // what can our app do


    // 1. Add manager
    const addManager = () => {
        prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What\'s the name of the Manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Manager\'s Employee ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Manager\'s email address?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the Manager\'s office number?'
            }
        ]).then((managerInfo) => {
            //push to array, call userChoice();
            const managerInstance = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
            console.log(managerInstance);

        });

        userChoice();
    };

    // 1.5 Controller's choice

    const userChoice = () => {
        prompt(
            {
                type: 'list',
                name: 'choice',
                message: 'Select one of the choices below.',
                choices: [
                    'Add an Engineer',
                    'Add an Intern',
                    'Done adding team members'
                ]
            }
        )
            .then((selectedChoice) => {
                if (selectedChoice === 'Add an Engineer') {
                    addEngineer();
                };
                if (selectedChoice === 'Add an Intern') {
                    addIntern();
                };
                if (selectedChoice === 'Done adding team members') {
                    genHtml();
                };
            });
    };

    // 2. Add Intern
    const addIntern = () => {
        prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the intern?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Employee ID number of the intern?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email address of the intern?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school does the intern go to?'
            }
            
        ]).then((internInfo) => {
            const internInstance = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
            console.log(internInstance);
        });

        userChoice();
    };

    // 3. Add Engineer
    const addEngineer = () => {
        prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the engineer?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Employee ID number of the engineer?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email address of the engineer?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer\'s GitHub?'
            }
            
        ]).then((engineerInfo) => {
            const engineerInstance = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.school);
            console.log(engineerInstance);
        });

        userChoice();
    };

    // 4. Gen HTML
    const genHtml = () => {
        
    };

    addManager();

};



//initialize program
teamBuilder();