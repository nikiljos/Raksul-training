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
    members: {
      type: DataTypes.STRING,
      allowNull: false, 
      get() {
        const value = this.getDataValue("members");
        return value ? value.split(",") : [];
      },
      set(value) {
        this.setDataValue(
          "members",
          Array.isArray(value) ? value.join(",") : value
        );
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Group;
