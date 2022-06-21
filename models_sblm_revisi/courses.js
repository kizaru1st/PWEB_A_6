const { Sequelize, DataTypes } = require("sequelize");

const courses = sequelize.define(
  "courses",
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
        allowNull: false
    },

    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    alias_name: {
        type: DataTypes.TEXT
    },

    credit: {
        type: DataTypes.INT,
        allowNull: false
    },

    semester: {
        type: DataTypes.INT,
        allowNull: false
    },
    
    description: {
        type: DataTypes.TEXT
    },

    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
  },

  {
    tableName: "courses",
  }
  
);

module.exports = courses;
