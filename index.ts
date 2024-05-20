#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.bold.yellow("\t###############################################\n")
);
console.log(chalk.bold.italic.magenta("\t\t WELCOME TO JAVASCRIPT QUIZES\n"));
console.log(
  chalk.bold.yellow("\t###############################################\n")
);

console.log(chalk.bold.blue("\tHow to play:"));
console.log("\tChoose one option for each question from dropdown");
console.log("\tTotal 5 questions");
console.log("\tGive at least 3 correct answers to win!\n");

let condition = true;
let correct: number = 0
let wrong: number = 0

while (condition) {
  let q1 = await inquirer.prompt([
    {
      name: "question",
      message: "In which year was JavaScript originally created?\n",
      type: "list",
      choices: ["a) 1990", "b) 1995", "c) 2000", "d) 2005"],
    },
  ]);

   if(q1.question === "b) 1995"){
    correct++
    console.log(chalk.bold.green("Correct"))
  }else{
    wrong++
    console.log(chalk.bold.red("Wrong"))
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`))
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`))

  let q2 = await inquirer.prompt([
    {
      name: "question",
      message:
        "What was the primary purpose behind the creation of JavaScript?\n",
      type: "list",
      choices: [
        "a) To add complex animations to web pages",
        "b) To create a server-side scripting language",
        "c) To make web pages more interactive and dynamic",
        "d) To replace HTML as the primary web development language",
      ],
    },
  ]);

  if(q2.question === "c) To make web pages more interactive and dynamic"){
    correct++
    console.log(chalk.bold.green("Correct"))
  }else{
    wrong++
    console.log(chalk.bold.red("Wrong"))
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`))
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`))

  let q3 = await inquirer.prompt([
    {
      name: "question",
      message: "Which web browser first introduced support for JavaScript?\n",
      type: "list",
      choices: [
        "a) Internet Explorer",
        "b) Netscape Navigator",
        "c) Google Chrome",
        "d) Mozilla Firefox",
      ],
    },
  ]);

  if(q3.question === "b) Netscape Navigator"){
    correct++
    console.log(chalk.bold.green("Correct"))
  }else{
    wrong++
    console.log(chalk.bold.red("Wrong"))
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`))
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`))

  let q4 = await inquirer.prompt([
    {
      name: "question",
      message:
        "Which of the following is an example of asynchronous code in JavaScript?",
      type: "list",
      choices: [
        "a) A loop that iterates 10 times.",
        "b) A function that directly returns a value.",
        "c) An AJAX request to fetch data from a server.",
        "d) A function that modifies the DOM without any delays.",
      ],
    },
  ]);

  if(q4.question === "c) An AJAX request to fetch data from a server."){
    correct++
    console.log(chalk.bold.green("Correct"))
  }else{
    wrong++
    console.log(chalk.bold.red("Wrong"))
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`))
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`))

  let q5 = await inquirer.prompt([
    {
      name: "question",
      message:
        "Which of the following is NOT a valid way to declare a variable in JavaScript?\n",
      type: "list",
      choices: [
        "a) let x = 10;",
        "b) const PI = 3.14;",
        'c) var name = "John";',
        "d) int age = 25;",
      ],
    },
  ]);

  if(q5.question === "d) int age = 25;"){
    correct++
    console.log(chalk.bold.green("Correct"))
  }else{
    wrong++
    console.log(chalk.bold.red("Wrong"))
  }
  console.log(chalk.green.bold(`\n\tYou've got ${correct} correct answer(s)`))
  console.log(chalk.bold.red(`\tAnd ${wrong} wrong answer(s)\n`))

  if(correct >= 3){
    console.log(
      chalk.bold.yellow("\t###############################################\n")
    );
    console.log(chalk.bold.italic.green("\t\t CONGRATULATIONS! YOU WON!\n"));
    console.log(
      chalk.bold.yellow("\t###############################################\n")
    );
  }else{
    console.log(chalk.bold.red("\n\t YOU LOOSE! TRY AGAIN"));
    
  }
  condition = false;
}
