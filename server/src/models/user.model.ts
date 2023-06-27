import { DataTypes } from "sequelize";
import db from "../config/db.config";

const User = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImg: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;
