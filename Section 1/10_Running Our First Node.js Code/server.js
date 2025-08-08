// creating server using node
const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hi from the server ....');
})

// listening to server
const port = 3000
server.listen(port,()=>{
    console.log(`Application is running in  ${port}`)
})