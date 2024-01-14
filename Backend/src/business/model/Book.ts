import {DataTypes, Model} from 'sequelize'
import {sequelize} from '../sequelize'
import {Book} from '../../domain/entities/Book'
import { SequelizeMember } from './Member'

export class SequelizeBook extends Model<Book, Omit<Book, 'MemberCode'>> {
    declare Code: string
    declare Title: string
    declare Author: string
    declare Stock: number
    declare MemberCode: string

    static associate(){
        SequelizeBook.belongsTo(SequelizeMember, {foreignKey: 'Code'})
    }
}

SequelizeBook.init({
    Code: {
        type: DataTypes.STRING,
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
    MemberCode: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'book'
})

// relation with member (satu buku hanya boleh dipinjam oleh satu member disaat yg bersamaan (many to one))