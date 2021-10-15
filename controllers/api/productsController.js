const db = require('../../src/database/models');



const productsController = {
    list(req, res) {
        db.Products.findAll({
            include: [{ association: "color" }, { association: "brand" }, { association: "category" }]
        })
            .then(products => {
                const counts = {};
                products.forEach((product,index) => {
                    let name = product.category.name
                    counts[name] = counts[name] ? counts[name] + 1:1;
                    products[index].url = req.headers.host + `/products/${product.id}`
                  
                });
                console.log(products[0])
                res.json({
                    meta: {
                        status: 200,
                        count: products.length,
                        countByCategory: counts,
                        url: 'api/products'
                    },
                    products: products
                })
            }).catch(e =>{
                console.log(e)
            })
    },
    detail(req, res) {
        db.Products.findByPk(req.params.id)
            .then(product => {
                res.json({
                    meta: {
                        status: 200,
                        total: 1,
                        url: `api/products/${req.params.id}`
                    },
                    data: product
                });
            });
    }

}

module.exports = productsController;