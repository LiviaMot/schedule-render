import database from "../config/database.js"

class Customer {
  constructor() {
    this.model = database.db.define('customers', {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: database.db.Sequelize.STRING
      },
      email: {
        type: database.db.Sequelize.STRING
      },
      password: {
        type: database.db.Sequelize.STRING
      }
    })
  }
}

export default new Customer().model