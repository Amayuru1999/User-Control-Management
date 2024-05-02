const { ROLE } = require('../data')

function canAssignSubject(user, subject) {
  return (
    user.role === ROLE.ADMIN ||
    subject.userId === user.id
  )
}

function scopedSubjects(user, subjects) {
  if (user.role === ROLE.ADMIN) return subjects
  return subjects.filter(subject => subject.userId === user.id)
}

function canDeleteSubject(user, subject) {
  return subject.userId === user.id
}

module.exports = {
  canAssignSubject,
  scopedSubjects,
  canDeleteSubject
}