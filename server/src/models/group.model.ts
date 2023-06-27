import { DataTypes } from "sequelize";
import db from "../config/db.config";

const Group = db.define(
  "group_data",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invite_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    invite_open: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Group;
