module.exports = (sequelize, dataTypes) => {
    const Color = sequelize.define('Colors', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }

    }, {
        tableName: "colors",
        timestamps: false
    })

    Color.associate = function(models) {
        Color.hasMany(models.Products, {
            as: "products",
            foreignKey: "id_color"
        })
    }

    return Color;

}