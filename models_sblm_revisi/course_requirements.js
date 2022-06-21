const { Sequelize, DataTypes } = require("sequelize");

const course_requirements = sequelize.define(
  "course_requirements",
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
    // foreign key
    required_course_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: courses,
            key: "id",
      },
    },

    required_level: {
        type: DataTypes.INT,
        allowNull : false
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
    tableName: "course_requirements",
  }
  
);

module.exports = course_requirements;
