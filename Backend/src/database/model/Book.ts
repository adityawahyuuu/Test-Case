import {DataTypes, Model, TextDataType} from 'sequelize'
import {sequelize} from '../sequelize'
import {Book} from '../../domain/entities/Book'

export class SequelizeBook extends Model<Book> {
    declare Code: TextDataType
    declare Title: string
    declare Author: string
    declare Stock: number
    // MemberId: MemberId
}

SequelizeBook.init({
    Code: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'book'
})

// relation with member