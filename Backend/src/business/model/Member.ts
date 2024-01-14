import {DataTypes, Model, TextDataType} from 'sequelize'
import {sequelize} from '../sequelize'
import {Member} from '../../domain/entities/Member'
import { SequelizeBook } from './Book'

export class SequelizeMember extends Model<Member> {
    declare Code: string
    declare Name: string

    static associate(){
        SequelizeMember.hasMany(SequelizeBook, {foreignKey: 'Code'})
    }
}

SequelizeMember.init({
    Code: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: false,
    },
    Name: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'member'
})

// relation with book (satu member maksimal boleh pinjam 2 buku (one to many))