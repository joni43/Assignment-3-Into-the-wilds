// Express modules
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()


// library for nodejs to access the github v3 api.
const github = require('octonode')
var socket = require('socket.io')

// Token stored in .env file
const dotenv = require('dotenv').config()
const client = github.client(dotenv)

// Secure the application with safety feature.
const crypto = require('crypto')
const compare = require('secure-compare')

const port = process.env.PORT || 8000

/*
-------------------------- Start APP 8000---------------------------------------
*/
let server = app.listen(port, function () {
  console.log('Connected! Well done...')
})
var io = socket(server)
io.on('connection', function (socket) {
  console.log('a user connected', socket.id)
  socket.emit('try', 'hej på dig')
})

// req all js file
const githubAPI = require('./routes/github')
// const clientSoc = require('./client')
// view engine
app.set('views', path.join(__dirname, 'views'))

// static
app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', githubAPI)

app.post('/home', (req, res, next) => {

  let xGithubEvent = req.headers['x-github-event']
  
    let context = {
      id: req.body.issue.id,
      title: req.body.issue.title,
      text: req.body.issue.body,
      comments: req.body.issue.comments,
      Url: req.body.issue.url,
      created_at: req.body.issue.created_at,
      updated_at: req.body.issue.updated_at
    }
    console.log('AAA', context)
    if (xGithubEvent === 'issue_comment') {
      io.emit('issue body', context)
    }
 
  console.log('request: \n' + req)

  // Take the post data from GIthub
  let postGitHub = JSON.stringify(req.body)

   // Get the header
  let signature = req.headers['x-hub-signature']

  const hash = crypto.createHmac('sha1', 'Jontetomte12')
  hash.update(postGitHub)
  let hashedSecret = 'sha1' + hash.digest('hex')

  if (compare(signature, hashedSecret)) {
    console.log('Data came from GitHub')
  }
  res.sendStatus(200)

  // io.emit('post',)
})
// function emitIssue (issue, socket) {
//   console.log(socket.id) // could be used to emit to only this client
//   socket.emit('issue', JSON.stringify(issue))
// }

