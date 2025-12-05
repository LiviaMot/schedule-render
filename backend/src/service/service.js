import ServiceModel from "../model/service.js"

class ServiceService {
  async FindAll() {
    return ServiceModel.findAll()
  }

  async FindOne(id) {
    return ServiceModel.findByPk(id)
  }

  async Create(date, time, price, completed) {
    return ServiceModel.create({ date, time, price, completed })
  }

  async Update(id, date, time, price, completed) {
    const oldService = await ServiceModel.findByPk(id)
    if (!oldService) {
      throw new Error('Atendimento não encontrado!')
    }
    oldService.date = date || oldService.date
    oldService.time = time || oldService.time
    oldService.price = price || oldService.price
    
    if (completed !== undefined) {
      oldService.completed = completed
    }

    oldService.save()
    return oldService
  }

  async Delete(id) {
    const service = await ServiceModel.findByPk(id)
    if (!service) {
      throw new Error('Atendimento não encontrado!')
    }
    return service.destroy()
  }
}

export default new ServiceService()