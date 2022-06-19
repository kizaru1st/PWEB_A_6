const { Sequelize, DataTypes } = require("sequelize");

const curricula = sequelize.define(
  "curricula",
  {
    // primary key
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    active: {
        type: DataTypes.STRING,
        allowNull: false
    },

    year_start: {
        type: DataTypes.INT,
        allowNull: false
    },

    year_end: {
        type: DataTypes.INT,
        allowNull: false
    },
    
    description: {
        type: DataTypes.TEXT
    },

    created_at: {
        type: DataTypes.DATE,
        allowNull : true
    },

    updated_at: {
        type: DataTypes.DATE,
        allowNull : true
    },
  },

  {
    tableName: "curricula",
  }
  
);

module.exports = curricula;
