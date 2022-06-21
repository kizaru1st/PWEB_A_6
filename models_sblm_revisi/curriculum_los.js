const { Sequelize, DataTypes } = require("sequelize");

const curriculum_los = sequelize.define(
  "curriculum_los",
  {
    // primary key
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    // foreign key
    curriculum_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: curricula,
        key: "id",
      },
    },

    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    type: {
      type: DataTypes.INT,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },

    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },

  {
    tableName: "curriculum_los",
  }
);

module.exports = curriculum_los;
