module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('Users', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        }
    }, {
        tableName: "users",
        timestamps: false
    })

    User.associate = function(models) {
        User.hasMany(models.Orders, {
            as: "orders",
            foreignKey: "id_user"
        })
    }


    return User;

}