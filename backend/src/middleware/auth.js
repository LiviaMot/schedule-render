import ServiceCustomer from '../service/customer.js'
import jwt from 'jsonwebtoken'
const JWT_SECRET = "M3uS3gr3d0"

export default async function authMiddleware(req, res, next) {
  try {
    const token = req.headers['authorization']
    if(!token) {
      throw new Error("Token inválido.")
    }
    const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET)

    const customer = await ServiceCustomer.FindOne(decoded.id)

    req.headers.customer = customer
    next()
  } catch (erro) {
    res.status(403).send({
      data: null,
      msg: erro.message,
      error: true
    })
  }
}