const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost/loki_a6")

sequelize.define('Lecturers' , {
    id:{
        type : DataTypes.BIGINT,
        autoIncrement : true,
        primaryKey : id
    },
    name:{
        type : DataTypes.STRING,
        allowNull : false
    },
    reg_id: {
        type : DataTypes.STRING,
        allowNull : false
    },
    phone : {
        type : DataTypes.STRING,
        allowNull : false
    },
    status :{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    created_id : {
        type : DataTypes.DATE
    },
    updated_id : {
        type : DataTypes.DATE
    }
});