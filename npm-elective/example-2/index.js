var inquirer = require("inquirer");

console.log("******************************")
console.log("Welcome to Kool Pizzas")
console.log("Please login to continue")
console.log("******************************")

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        message: "Enter your username",
        name: "username"
    },
    {
        type: "password",
        message: "Enter a password",
        name: "password"
    }
  ])
  .then((userDetails) => {
    // Use user feedback for... whatever!!
    // * logic check your username and password are correct
    // * do it here
    console.log('welcome back',userDetails.username);

    inquirer.prompt([
        {
            type: "confirm",
            name: "forDelivery",
            message: "Do you want the pizza to be delivered?",
            default: true
        },
        {
            type: "input",
            name: "phone",
            message: "What is your phone number?",
            validate(value){
                var pass = value.length === 10;
                if(pass){
                    return true;
                }
                return "Please enter a valid phone number!"
            }
        },
        {
            type: "input",
            name: "qty",
            message: "How many pizzas do you need?",
            validate(value){
                var valid =  !isNaN(parseInt(value));
                return valid || "Pkease enter a number"
            },
            filter(value){
                return parseInt(value)
            }
        },
        {
            type: "list",
            name: "toppings",
            message: "Plese select your pizza topping",
            choices: [
                "Paneer",
                "Chicken",
                "Corn and Cheese"
            ]
        },
        {
            type: "list",
            name: "size",
            message: "Plese select your size",
            choices: [
                "L",
                "M",
                "S"
            ]
        },
    ])
    .then(answers=>{
        console.log("Order details are:")
        console.log(answers)
        console.log("username", userDetails.username)
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });