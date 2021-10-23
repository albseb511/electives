const Websocket = require('ws')
var http = require("http");
const port = process.env.PORT || "8080"
const wsserver = new Websocket.WebSocketServer({ port },()=>{
    console.log(`conntected on localhost:${port}`)
});


wsserver.on("connection", function connection(ws) {
    
  ws.on("message", function incoming(message) {
    
    const payload = JSON.parse(message);
    console.log("received:", payload);  
    
    for(const client of wsserver.clients){
        if(client.readyState === Websocket.OPEN){
            client.send(message)
        }
    }
  });

  ws.on("close", function(){
      console.log("connection closed")
  })

});
