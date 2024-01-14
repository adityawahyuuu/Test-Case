import { Options } from 'sequelize'

export const development: Options = {
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false
}