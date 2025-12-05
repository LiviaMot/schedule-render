import ServiceCustomer from '../service/customer.js'

class ControllerCustomer {
  async FindAll(_, res) {
    try {
      const customers = await ServiceCustomer.FindAll()
      
      res.status(200).send({ customers })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }

  async FindOne(req, res) {
    try {
      const id = req.params.id
      const customer = await ServiceCustomer.FindOne(id)
      
      res.status(200).send({ customer })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }

  async Create(req, res) {
    try {
      const { name, email, password } = req.body
      await ServiceCustomer.Create(name, email, password)
      
      res.status(201).send({ msg: 'Cliente criado com sucesso!' })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }

  async Update(req, res) {
    try {
      const id = req.params.id
      const { name, email, password } = req.body
      await ServiceCustomer.Update(id, name, email, password)
      
      res.status(200).send({ msg: 'Cliente atualizado com sucesso!' })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }

  async Delete(req, res) {
    try {
      const { id } = req.params
      await ServiceCustomer.Delete(id)

      res.status(204).send()
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }

  async Login(req, res) {
    try {
      const { email, password } = req.body

      const token = await ServiceCustomer.Login(email, password)
      
      res.status(200).send({ token })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }
}

export default new ControllerCustomer()