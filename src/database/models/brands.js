module.exports = (sequelize, dataTypes) => {
    const Brand = sequelize.define('Brands', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }

    }, {
        tableName: "brands",
        timestamps: false
    })

    Brand.associate = function(models) {
        Brand.hasMany(models.Products, {
            as: "products",
            foreignKey: "id_brand"
        })
    }

    return Brand;

}