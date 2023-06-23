import { DataTypes } from "sequelize"
import db from "../config/db.config"

const Member=db.define("members",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    group:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    user:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    freezeTableName:true
})

export default Member