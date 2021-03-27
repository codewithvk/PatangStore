import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Vivek',
    email: 'Vivekjaviya@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ankit',
    email: 'ankit@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users