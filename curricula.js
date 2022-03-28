const { Sequelize, DataTypes, DatabaseError } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost/loki_a6")

sequalize.define('curricula', 
{

    id:
    {
        type :DataTypes.STRING,
        allowNull : false,
        primaryKey : id
    },
    name:
    {
        type :DataTypes.STRING,
        allowNull : false
    },
    active:
    {
        type :DataTypes.STRING,
        allowNull : false
    },
    year_start:
    {
        type :DataTypes.DATE
    },
    year_end:
    {
        type :DataTypes.DATE
    },
    description:
    {
        type :DataTypes.STRING,
        allowNull : false
    },
    created_at:
    {   
        type :DataTypes.DATE
    },
    updated_at:
    {
        type :DataTypes.DATE
    },

})