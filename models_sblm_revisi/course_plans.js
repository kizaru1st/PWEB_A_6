const { Sequelize, DataTypes } = require("sequelize");
const courses = require("./courses");

const course_plans = sequelize.define(
  "course_plans",
  {
    // primary key
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    // foreign key
    course_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: courses,
        key: "id",
      },
    },

    rev: {
        type: DataTypes.INT,
        allowNull: false
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

    material: {
      type: DataTypes.TEXT
    },

    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },

    validated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },

    validated_at: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: "course_plans",
  }
  
);

module.exports = course_plans;
