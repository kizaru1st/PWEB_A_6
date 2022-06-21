const { Sequelize, DataTypes } = require("sequelize");

const course_plan_lecturers = sequelize.define(
  "course_plan_lecturers",
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
        model: course_plan_details,
        key: "id",
      },
    },
    course_lo_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: course_los,
            key: "id",
          },
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
    tableName: "course_plan_lecturers",
  }
  
);

module.exports = course_plan_lecturers;
