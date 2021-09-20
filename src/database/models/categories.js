module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define('Categories', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }

    }, {
        tableName: "categories",
        timestamps: false
    })

    Category.associate = function(models) {
        Category.hasMany(models.Products, {
            as: "products",
            foreignKey: "id_categories"
        })
    }

    return Category;

}