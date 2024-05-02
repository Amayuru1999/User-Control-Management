const express = require('express')
const router = express.Router()
const {  subjects } = require('../data')
const { authUser } = require('../basicAuth')
const { canAssignSubject, canDeleteSubject, scopedSubjects } = require('../permissions/project')

router.get('/', authUser, (req, res) => {
  res.json(scopedSubjects(req.user, subjects))
})

router.get('/:subjectId', setSubject, authUser, authGetSubject, (req, res) => {
  res.json(req.subject)
})

router.delete('/:subjectId', setSubject, authUser, authDeleteSubject, (req, res) => {
  res.send('Deleted Project')
})

function setSubject(req, res, next) {
  const subjectId = parseInt(req.params.subjectId)
  req.subject = subjects.find(subject => subject.id === subjectId)
  
  if (req.subject == null) {
    res.status(404)
    return res.send('Project not found')
  }
  next()
}

function authGetSubject(req, res, next) {
  if (!canAssignSubject(req.user, req.subject)) {
    res.status(401)
    return res.send('Not Allowed')
  }

  next()
}

function authDeleteSubject(req, res, next) {
  if (!canDeleteSubject(req.user, req.subject)) {
    res.status(401)
    return res.send('Not Allowed')
  }

  next()
}

module.exports = router