let socket = io.connect('ws://localhost:8000')
document.addEventListener('DOMContentLoaded', function () {
  selectIssueCard()
  socket.on('try', (socket) => {
    console.log('connectes', socket)
  })
  socket.on('issue', (data) => {
    console.log('good', data)
    selectIssueCard(data)
  })
})
socket.on('issue', function (data) {
  // todo, create function (data)
})
  // socket.emit('try', {
  // })
  // function createElement() {
  //   var li = document.createElement('li'),
  //     issueUl = document.getElementById('card')
  //     console.log('AA', li)
  //     li.appendChild(issueUl)
  // }
function selectIssueCard (issue) {
  console.log(issue)
  let ul = document.getElementById('issues_ul')
  // let li = document.getElementById(issue.id)
  console.log('A', ul)

  var id = document.getElementById('.issuecard.id')
  console.log('B', id)

//   ul.innerHTML = 'Title: ' + issue.title + '<br/>' +
//   'Body: ' + issue.issueBody + '<br/>' +
//   'Comments: ' + issue.comments + '<br/>' +
//   ' URL: ' + issue.issueUrl + '<br/>' +
//   'Created at: ' + issue.created_at + '<br/>' +
//   'Updated at: ' + issue.updated_at + '<br/>'

// ul.insertBefore(ul.firstElementChild)      //Insert the updated issue on the top of the list
}

// var test = document.getElementById('text')
// console.log(test)
// socket.emit('issue', {
// test: test.value
// })
// console.log(test)
