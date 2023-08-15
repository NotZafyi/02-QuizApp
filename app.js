import inquirer from "inquirer";
import boxen from "boxen";
import chalk from "chalk";
const questions = [
    {
        question: "Whats the square root of 25",
        options: ["2", "3", "5"],
        correctAnswerIndex: 2
    },
    {
        question: "Whats the square root of 81",
        options: ["9", "10", "11"],
        correctAnswerIndex: 0
    },
    {
        question: "Whats the square of 3",
        options: ["8", "9", "10"],
        correctAnswerIndex: 1
    },
    {
        question: "whats 99+21",
        options: ["110", "120", "130"],
        correctAnswerIndex: 1
    },
    {
        question: "whats 100/0",
        options: ["1", "0", "infinity"],
        correctAnswerIndex: 2
    },
];
async function main() {
    //--------------WELCOME-------------------
    const welcome = await inquirer.prompt([
        {
            name: "user_name",
            type: "input",
            message: "Enter to name to continue"
        }
    ]);
    let welcome_msg = `Answer the following questions:`;
    console.log(boxen(`Welcome, ${welcome.user_name}`));
    console.log(welcome_msg);
    //----------------------------------------
    let score = 0;
    for (const question of questions) {
        const { userAnswer } = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: question.question,
                choices: question.options,
            },
        ]);
        if (question.correctAnswerIndex === question.options.indexOf(userAnswer)) {
            console.log(chalk.bgGreen('Correct!\n'));
            score++;
        }
        else {
            console.log(chalk.bgRed('Incorrect.\n'));
        }
    }
    console.log(score * 100 / questions.length);
    if (score * 100 / questions.length > 41) {
        console.log(chalk.bgGreenBright(`Quiz completed! Your score: ${score} out of ${questions.length}, you passed`));
    }
    else
        (console.log(chalk.bgRedBright(`Quiz completed! Your score: ${score} out of ${questions.length}, you failed`)));
}
main();
// import inquirer from 'inquirer';
// interface Question {
//   question: string;
//   options: string[];
//   correctAnswerIndex: number;
// }
// const quiz: Question[] = [
//   {
//     question: 'What is the capital of France?',
//     options: ['Berlin', 'London', 'Paris', 'Madrid'],
//     correctAnswerIndex: 2,
//   },
//   {
//     question: 'Which planet is known as the Red Planet?',
//     options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
//     correctAnswerIndex: 1,
//   },
//   {
//     question: 'What is the largest mammal?',
//     options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
//     correctAnswerIndex: 1,
//   },
// ];
// async function main() {
//   console.log('Welcome to the Quiz App!\n');
//   let score = 0;
//   for (const question of quiz) {
//     const { userAnswer } = await inquirer.prompt([
//       {
//         type: 'list',
//         name: 'userAnswer',
//         message: question.question,
//         choices: question.options,
//       },
//     ]);
//     if (question.correctAnswerIndex === question.options.indexOf(userAnswer)) {
//       console.log('Correct!\n');
//       score++;
//     } else {
//       console.log('Incorrect.\n');
//     }
//   }
//   console.log(`Quiz completed! Your score: ${score} out of ${quiz.length}`);
// }
// main();
