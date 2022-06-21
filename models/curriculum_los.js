"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    // === LANGKAH 1 UBAH curriculum_los DIBAWAH MENJADI NAMA SESUAI MODEL === 
  class curriculum_los extends Model {

    static associate(models) {}
  }
//   === LANGKAH 2 UBAH NAMA curriculum_los.INIT SESUAI NAMA MODEL ===
  curriculum_los.init(
    {

        // === LANGKAH 3 UBAH DIBAWAH INI SESUAI YANG UDAH DIBUAT SEBELUMNYA ===
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
        allowNull: false,
      },
  
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
  
      type: {
        type: DataTypes.INT,
        allowNull: false,
      },
  
      description: {
        type: DataTypes.TEXT,
      },
  
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
  
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    //   === AKHIR DARI LANGKAH 3 ===


    },
    {
        // LANGKAH 4 UBAH NAMA TABLE NAME SESUAI NAMA MODELS
      tableName: "curriculum_los", //EDIT HANYA INI SAJA -> LANGKAH 4
      sequelize,
      freezeTableName: true,
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );
//   LANGKAH 5 UBAH NAMA curriculum_los SESUAI NAMA MODELS
  return curriculum_los; //EDIT HANYA INI SAJA -> LANGKAH 5
};
