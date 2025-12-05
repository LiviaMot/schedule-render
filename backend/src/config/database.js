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
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306,
        // No Docker interno do Render, geralmente não precisa de SSL obrigatório, 
        // mas é bom deixar preparado caso precise.
      }
    )
  }
}

export default new Database()