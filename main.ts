import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

async function main() {
  let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      message: "Enter your pin",
      type: "number"
    }
  ]);

  if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    let operations = await inquirer.prompt([
      {
        name: "operation",
        message: "Please select an option",
        type: "list",
        choices: ["Withdraw", "Check balance"]
      }
    ]);
    console.log(operations.operation);

    if (operations.operation === "Withdraw") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: "Enter the amount to withdraw",
          type: "number"
        }
      ]);
      myBalance -= amountAns.amount;
      console.log("Your remaining balance is: " + myBalance);
    } else if (operations.operation === "Check balance") {
      console.log("Your balance is: " + myBalance);
    }
  } else {
    console.log("Incorrect pin number");
  }
}

main();
