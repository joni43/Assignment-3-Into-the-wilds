
document.addEventListener('DOMContentLoaded', function () {
  let socket = io.connect('ws://localhost:8000')
  // selectIssueCard()
  socket.on('issue', (data) => {
    console.log(data)
  })
  socket.on('issue comment', (data, issue) => {
    let text = document.createTextNode(issue),
    li = document.createElement('li')
    li.innerHTML = 'Title: ' + data.title + '<br>' +
    'Body: ' + data.Body + '<br>' +
    'Comments: ' + data.comments + '<br>' +
    ' URL: ' + data.Url + '<br>' +
    'Created at: ' + data.created_at + '<br>' +
    'Updated at: ' + data.updated_at + '<br>'
    console.log('test', data)
    console.log('B', li)
    console.log('C', data.Body)

    // selectIssueCard(data)
  })
})
