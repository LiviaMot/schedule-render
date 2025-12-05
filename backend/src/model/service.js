import database from '../config/database.js'

class Service {
  constructor() {
    this.model = database.db.define('services', {
    id: {
      type: database.db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: database.db.Sequelize.DATEONLY
    },
    time: {
      type: database.db.Sequelize.STRING
    },
    price: {
      type: database.db.Sequelize.STRING
    },
    completed: {
      type: database.db.Sequelize.BOOLEAN
    }    
  })
  }
}

export default new Service().model