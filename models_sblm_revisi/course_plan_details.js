const { Sequelize, DataTypes } = require("sequelize");

const course_plan_details = sequelize.define(
  "course_plan_details",
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
    week: {
        type: DataTypes.INT,
        allowNull: false,
    },
    material: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    method: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    student_experience: {
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
    tableName: "course_plan_details",
  }
  
);

module.exports = course_plan_details;
