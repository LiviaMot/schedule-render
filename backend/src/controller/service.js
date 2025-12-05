import ServiceService from '../service/service.js'

class ControllerService {
  async FindAll(_, res) {
    try {
      const services = await ServiceService.FindAll()

      res.status(200).send({ services })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }

  async FindOne(req, res) {
    try {
      const { id } = req.params
      const services = await ServiceService.FindOne(id)

      res.status(200).send({ services })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }

  async Create(req, res) {
    try {
      const { date, time, price, completed } = req.body
      await ServiceService.Create(date, time, price, completed)

      res.status(201).send({ msg: 'Criado com sucesso!' })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }

  async Update(req, res) {
    try {
      const id = req.params.id
      const { date, time, price, completed } = req.body
      await ServiceService.Update(id, date, time, price, completed)

      res.status(200).send({ msg: 'Atualizado!' })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }

  async Delete(req, res) {
    try {
      const { id } = req.params
      await ServiceService.Delete(id)

      res.status(204).send()
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
  }
}

export default new ControllerService()