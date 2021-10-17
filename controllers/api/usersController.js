const db = require('../../src/database/models');

const usersController={
    list:(req,res) => {
        db.Users.findAll({attributes:['id','name','email']})
        .then(users=>{
            res.json({
                meta: {
                    count: users.length,
                    url: 'api/users'
                },
                users: users
            })
            .catch(e =>{
                console.log(e)
            })
        })
    },
    detail:(req,res) => {
        db.Users.findByPk(req.params.id,{attributes:['id','name','email','image']})
        .then(user=>{
            res.json({
                meta: {
                    url: `api/users/${req.params.id}`
                },
                user: user
            })
            .catch(e =>{
                console.log(e)
            })
        })
    }

}

module.exports = usersController;