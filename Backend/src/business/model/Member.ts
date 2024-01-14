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
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'member'
})

// relation with book (satu member maksimal boleh pinjam 2 buku (one to many))