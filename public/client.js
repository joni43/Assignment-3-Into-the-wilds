
document.addEventListener('DOMContentLoaded', function () {
  let socket = io.connect('ws://localhost:8000')
  // selectIssueCard()
  socket.on('issue', (data) => {
    console.log(data)
  })
  socket.on('issue comment', (data, issue) => {
    let issueBody = document.createTextNode('Title:' + data.title + '\u000a' +
    'Body: ' + data.Body + '\u000a' +
    'Comments: ' + data.comments + '\u000a' +
    ' URL: ' + data.Url + '\u000a' +
    'Created at: ' + data.created_at + '\u000a' +
    'Updated at: ' + data.updated_at)
    let li = document.createElement('li')
    console.log('AAA', li)

    li.appendChild(issueBody)
    document.body.appendChild(li)
    console.log('test', data)
    console.log('B', li)
  })
})
function bodyIssue (data, issue) {
}
