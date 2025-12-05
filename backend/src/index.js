import express from 'express'
import cors from 'cors'
import routerCustomer from './router/customer.js'
import routerService from './router/service.js'
import database from './config/database.js'
import './model/relations.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1', routerCustomer, routerService)

<<<<<<< HEAD
const port = process.env.PORT || 3000
=======
const port = 3000
>>>>>>> 8755716 (feat init)

database.db
  .sync({ force: false })
  .then((_) => {
    app.listen(port, () => {
      console.info("Servidor rodando na porta " + port)
    })
  })
  .catch((e) => {
    console.log("Não conectou com o banco " + e)
  })