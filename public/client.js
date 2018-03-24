
document.addEventListener('DOMContentLoaded', function () {
  let socket = io.connect('ws://localhost:8000')
  // selectIssueCard()
  socket.on('issue', (data) => {
    let ul = document.getElementById('issues_ul')
    let li = document.createElement('li')
    let issueBody = document.createTextNode(
    'Title:' + data.title + '\u000a' +
    'Text: ' + data.Body + '\u000a' +
    'Comments: ' + data.comments + '\u000a' +
    'Created at: ' + data.created_at + '\u000a' +
    'Updated at: ' + data.updated_at
  )
    li.appendChild(issueBody)
    li.setAttribute('class', 'issuecard')
    ul.appendChild(li)
    ul.insertBefore(li, ul.firstElementChild)
    window.location.reload()
  })
  socket.on('issue comment', (data, issue) => {
    window.location.reload()
  })


})
