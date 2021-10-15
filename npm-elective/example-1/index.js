var { Command } = require('commander');
var program = new Command();


program.version('0.0.1');

program.argument("<name>","name to print")
    .argument("[number]","number of times to print",1)
    .action(function(name,number){
        number = Number(number)
        for(var i=0; i<number; i++){
            console.log(name)
        }
    })

program.argument("<username>","user login details")
    .argument("[password]","password for user, if needed", "default")
    .action(function(username, password){
        console.log("username",username)
        console.log("password",password)
    })

program.parse(process.argv);


// var QRCode = require('qrcode')
 
// QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
//     console.log(url)
//   })