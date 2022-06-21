const { Sequelize, DataTypes } = require("sequelize");

const curriculum_profiles = sequelize.define(
  "curriculum_profiles",
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
        type : DataTypes.STRING,
        allowNull : false,

    },

    profile: {
        type : DataTypes.TEXT,
        allowNull : false,
    },

    description: {
        type : DataTypes.TEXT
    },

    created_at: {
        type : DataTypes.DATE,
        allowNull : true
    },
    
    updated_at: {
        type : DataTypes.DATE,
        allowNull : true
    },
  },

  {
    tableName: "curriculum_profiles",
  }
  
);

module.exports = curriculum_profiles;
