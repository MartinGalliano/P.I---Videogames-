const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genre', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
          },
    });
};