const { Sequelize, DataTypes } = require("sequelize");

const course_lo_details = sequelize.define(
  "course_lo_details",
  {
    // primary key
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    
    // foreign key
    curriculum_lo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: curriculum_los,
        key: "id",
      },
    },

    //foreign key
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
        allowNull : true
    },

    updated_at: {
        type: DataTypes.DATE,
        allowNull : true
    },
  },

  {
    tableName: "course_lo_details",
  }
  
);

module.exports = course_lo_details;
