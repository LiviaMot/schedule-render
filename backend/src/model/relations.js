import Customer from "./customer.js"
import Service from "./service.js"

Customer.hasMany(Service, {
  foreignKey: 'customerId'
})

Service.belongsTo(Customer, {
  foreignKey: 'customerId'
})