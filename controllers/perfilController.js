const controller = {
    index: (req, res) => {
        res.render("perfil", {
            styles: '/static/css/perfil.css',
            titulo: 'perfil'
        });
    }
}

module.exports = controller;