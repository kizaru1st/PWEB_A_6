const { Sequelize, DataTypes } = require("sequelize");

const course_los = sequelize.define(
  "course_los",
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
    type: {
        type: DataTypes.INT,
        allowNull: false
    },
    code: {

    },
    name: {

    },
    //foreign key
    parent_id: {

    },
    created_at: {

    },
    updated_at: {

    },
  },

  {
    tableName: "course_los",
  }
  
);

module.exports = course_los;
