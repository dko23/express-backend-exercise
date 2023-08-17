const express = require('express')

const server = express()

  const signin = (req, res) => {
    res.send('Sign in page')
   
}
const signout = (req, res) => {
    res.send('<h1>Sign Out page</h1>')
   
  }
  const checkout = (req, res) => {
    res.send('<h1>checkout page</h1>')
  
}
  
const profile = (req, res) => {
    res.send('<h1>Profile page</h1>')
   
  } //The order in which you're defining the request handlers using server.use() matters. 

server.post('/signin', signin)
server.get('/signout', signout)
server.put('/checkout', checkout)
server.delete('/', profile)

server.listen(7000, () => {
    console.log('Server started successfully');
  });
  