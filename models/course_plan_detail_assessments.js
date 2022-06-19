const { Sequelize, DataTypes } = require("sequelize");

const course_plan_assessments = sequelize.define(
  "course_plan_assessments",
  {
    // primary key
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // foreign key
    course_plan_detail_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_plans_details,
        key: "id",
      },
    },
     // foreign key
     course_plan_assessment_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: course_plan_assessments,
          key: "id",
        },
    },
    percentage: {
        type: DataTypes.DOUBLE,
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
    tableName: "course_plan_assessments",
  }
  
);

module.exports = course_plan_assessments;
