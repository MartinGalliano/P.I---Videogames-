//la ID que sea de tipo UUID para generar un numero randown con letras y numeros y no se pisen o sobreescriba 
//allowNull (que tenga el id que le indico) 
// false  NO permito que este vacio -- si lo seteo en null (si permito que este vacio)
const { DataTypes } = require('sequelize');
//const { values } = require('sequelize/types/lib/operators');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    platforms: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
    
  });
};