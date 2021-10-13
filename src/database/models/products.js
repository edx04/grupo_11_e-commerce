module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define('Products', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.INTEGER
        },
        stock: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        id_color: {
            type: dataTypes.INTEGER
        },
        id_categories: {
            type: dataTypes.INTEGER
        },
        id_brand: {
            type: dataTypes.INTEGER
        }



    }, {
        tableName: "products",
        timestamps: false
    })

    Product.associate = function (models) {
        Product.belongsTo(models.Colors, {
            as: "color",
            foreignKey: "id_color"
        }),
            Product.belongsTo(models.Categories, {
                as: "category",
                foreignKey: "id_categories"
            }),
            Product.belongsTo(models.Brands, {
                as: "brand",
                foreignKey: "id_brand"
            })
    }




    return Product;

}