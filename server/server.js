const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(router)
server.listen(3030, () => {
  console.log('JSON Server is running')
})