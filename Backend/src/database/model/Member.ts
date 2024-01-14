import {DataTypes, Model, TextDataType} from 'sequelize'
import {sequelize} from '../sequelize'
import {Member} from '../../domain/entities/Member'

export class SequelizeMember extends Model<Member> {
    declare Code: TextDataType
    declare Name: string
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

// relation with book