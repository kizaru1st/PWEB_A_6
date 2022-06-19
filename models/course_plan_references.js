const { Sequelize, DataTypes } = require("sequelize");

const course_plan_references = sequelize.define(
  "course_plan_references",
  {
    // primary key
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // foreign key
    course_plan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_plans,
        key: "id",
      },
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
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
    tableName: "course_plan_references",
  }
  
);

module.exports = course_plan_references;
