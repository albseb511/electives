const express = require('express');
app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const bodyParser = require('body-parser')



app.use(express.urlencoded({extended: true}));
app.use(express.json());


const io = new Server(server);
io.on('connection', client => {
  client.on('event', data => { 
      console.log(data)
   });
  client.on('disconnect', () => { 

   });
   console.log('broadcasting')
   client.broadcast.emit("notification",{id:client.id, type:"new-user"})
});

server.listen(3000)