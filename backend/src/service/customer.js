import Customer from "../model/customer.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const SALT = 10
const JWT_SECRET = "M3uS3gr3d0"

class ServiceCustomer {
  async FindAll() {
    return Customer.findAll()
  }

  async FindOne(id) {
    if (!id) {
      throw new Error('Favor informar o ID!')
    }

    const customer = await Customer.findByPk(id)

    if (!customer) {
      throw new Error(`Cliente ${id} não encontrado!`)
    }

    return customer
  }

  async Create(name, email, password) {
    if (!name || !email || !password) {
      throw new Error('Favor preencher todos os campos!')
    }

    const passwordCript = await bcrypt.hash(String(password), SALT)

    await Customer.create({
      name, email, password: passwordCript
    })
  }

  async Update(id, name, email, password) {
    const oldCustomer = await Customer.findByPk(id)

    if (!oldCustomer) {
      throw new Error('Cliente não encontrado!')
    }

    oldCustomer.name = name || oldCustomer.name
    oldCustomer.email = email || oldCustomer.email
    oldCustomer.password = password 
      ? await bcrypt.hash(String(password), SALT)
      : oldCustomer.password

    oldCustomer.save()
  }

  async Delete(id) {
    const oldCustomer = await Customer.findByPk(id)
    if (!oldCustomer) {
      throw new Error('CLiente não encontrado!')
    }

    oldCustomer.destroy(id)
  }

  async Login(email, password) {
    if (!email || !password) {
      throw new Error('Email ou senha inválidos.')
    }

    const customer = await Customer.findOne({ where: { email } })

    if (!customer || !(await bcrypt.compare(String(password), customer.password))) {
      throw new Error('Email ou senha inválidos.')
    }

    return jwt.sign(
      { id: customer.id, nome: customer.name },
      JWT_SECRET,
      { expiresIn: 60 * 60 }
    )
  }
}

export default new ServiceCustomer()