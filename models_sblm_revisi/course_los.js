const { Sequelize, DataTypes } = require("sequelize");

const course_los = sequelize.define(
  "course_los",
  {
    // primary key asd
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
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    //foreign key
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: course_los,
        key: "id",
      },
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
    tableName: "course_los",
  }
);

module.exports = course_los;
