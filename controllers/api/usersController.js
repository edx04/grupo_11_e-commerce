const db = require('../../src/database/models');

const usersController={
    list:(req,res) => {
        db.Users.findAll({attributes:['id','name','email']})
        .then(users=>{
            res.json({
                meta: {
                    count: users.length,
                    url: 'http://localhost:3000/api/users/'
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
                    url: `http://localhost:3000/api/users/${req.params.id}`,
                    
                },
                user: {
                    id:user.id,
                    name:user.name,
                    email:user.email,
                    image:`http://localhost:3000/static/images/users/${user.image}`
                }
            })
            .catch(e =>{
                console.log(e)
            })
        })
    }

}

module.exports = usersController;