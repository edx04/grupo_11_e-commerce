module.exports = (sequelize, dataTypes) => {
    const Order = sequelize.define('Orders', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_user: {
            type: dataTypes.INTEGER
        },
        total: {
            type: dataTypes.INTEGER
        },
        date: {
            type: dataTypes.DATE
        }


    }, {
        tableName: "orders",
        timestamps: false
    })

    Order.associate = function(models) {
        Order.belongsTo(models.Users, {
            as: "users",
            foreignKey: "id_user"
        })

    }

    return Order;

}