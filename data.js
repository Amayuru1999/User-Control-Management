const ROLE = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT:'student'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Kyle', role: ROLE.ADMIN },
    { id: 2, name: 'Sally', role: ROLE.TEACHER },
    { id: 3, name: 'Joe', role: ROLE.TEACHER },
    { id: 4, name: 'Nick', role: ROLE.STUDENT },
  ],
  subjects: [
    { id: 1, name: "English", userId: 1 },
    { id: 2, name: "Science", userId: 2 },
    { id: 3, name: "Maths", userId: 3 }
  ]
}