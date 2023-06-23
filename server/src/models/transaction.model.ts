import { DataTypes } from "sequelize"
import db from "../config/db.config"

const Transaction=db.define("transactionss",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    group:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    spender:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    benefactor:{
        type:DataTypes.ARRAY(DataTypes.INTEGER)
    },
    amount:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    individualShare:{
        type:DataTypes.NUMBER,
        allowNull:false
    }
},{
    freezeTableName:true
})

export default Transaction