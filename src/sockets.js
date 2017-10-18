import openSocket from 'socket.io-client';
const socket = openSocket();
console.log('Hello!');

socket.on('test', test=>{console.log(test);})

function test(interval, cb) {
    socket.emit('testemit', {hello: 'test'})
} 
export { test }