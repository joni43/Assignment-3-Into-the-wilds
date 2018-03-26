
document.addEventListener('DOMContentLoaded', function () {
  let socket = io.connect('https://139.59.166.193')

  socket.on('issue', (data) => {
    let ul = document.getElementById('issues_ul')
    let li = document.createElement('li')
    var img = document.getElementById('git')
    let issueBody = document.createTextNode(
    'Title:' + data.title + '\u000a' +
    'Text: ' + data.Body + '\u000a' +
    'Comments: ' + data.comments + '\u000a' +
    'Created at: ' + data.created_at + '\u000a' +
    'Updated at: ' + data.updated_at
  )
    li.appendChild(issueBody)
    li.setAttribute('class', 'issuecard')
    li.setAttribute('src', '/img/GitHub-Mark.jpg')
    ul.appendChild(li)
    ul.insertBefore(li, ul.firstElementChild)

  })
  socket.on('issue comment', (data, issue) => {
    window.location.reload()
  })
})


