let socket = io.connect('ws://localhost:8000')
document.addEventListener('DOMContentLoaded', function(){
  socket.on('try', (socket) => {
    console.log('connectes', socket)
   })

})

// var test = document.getElementById('text')
// console.log(test)
// socket.emit('issue', {
// test: test.value
// })
// console.log(test)
