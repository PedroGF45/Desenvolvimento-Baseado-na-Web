const userGet = function (req, res) {
    res.render("registar");
};

const userPost = async function (req, res) {
    const { email, username, password } = req.body;
    const user = new User({ email, username }); // cria um novo utilizador
    await User.register(user, password); //guarda os dados na BD. Register() vem do “plugin” de passport-local-mongoose
    res.redirect("/bookForm");
};

const loginGet = function (req, res) {
    res.render("login");
};

//FAZER LOGOUT DA PÁGINA
const logout = function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/login");
    });
};
   

module.exports = { userGet, userPost, loginGet, logout};