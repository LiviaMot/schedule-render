import { Sequelize } from 'sequelize'

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.db = new Sequelize(
      process.env.DB_NAME || 'agenda',
      process.env.DB_USER || 'root',
      process.env.DB_PASS || '',
      {
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql',
        port: process.env.DB_PORT || 3306,
        logging: false,
        dialectOptions: {
            ...(process.env.DB_HOST ? {
              ssl: {
                require: true,
                rejectUnauthorized: false
              }
            } : {})
        }
      }
    )
  }
}

export default new Database()