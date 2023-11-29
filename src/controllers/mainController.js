const controlador = {
    index: (req, res) => {
        res.render('index');
    },
    productCart: (req, res) => {
        res.render('./products/productCart');
    },
    productDetail: (req, res) => {
        res.render('./products/productDetail');
    },
    login: (req, res) => {
        res.render('./users/login');
    },
    register: (req, res) => {
        res.render('./users/register');
    }
}

module.exports = controlador;