// require('dotenv/config')
// console.log(process.env.GITHUBACESSTOKEN)
require('dotenv').config()

require('../routes/github')
const express = require('express')
const router = express.Router()
const github = require('octonode')
const client = github.client(process.env.GITHUB_TOKEN)
let context

router.get('/home', (req, res) => {
  res.render('home')
})

router.get('/', (req, res) => {
  client.get('https://api.github.com/repos/1dv023/jl224dq-examination-3/issues', {},
  function (err, status, body, headers) {
    if (err) {
      console.log(err)
    }

     context = {
      issues: body.map(function (issue) {
        return {
        id: issue.id,
        title: issue.title,
        issueBody: issue.body,
        comments: issue.comments,
        issueUrl: issue.url,
        created_at: issue.created_at,
        updated_at: issue.updated_at
      }
      })

    }
    console.log(context)
  })
  res.render('github', { context })
})

module.exports = router
