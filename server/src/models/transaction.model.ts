import { DataTypes } from "sequelize";
import db from "../config/db.config";

const Transaction = db.define(
  "transactionss",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    group: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spender: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // benefactor: {
    //   type: DataTypes.ARRAY(DataTypes.INTEGER), //impossible in mysql, need to change
    // },
    benefactor: {
      type: DataTypes.TEXT, // or DataTypes.STRING
      allowNull: false, // or false if it's a required field
      get() {
        const value = this.getDataValue("benefactor");
        return value ? value.split(",") : [];
      },
      set(value) {
        this.setDataValue(
          "benefactor",
          Array.isArray(value) ? value.join(",") : value
        );
      },
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    individualShare: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Transaction;
