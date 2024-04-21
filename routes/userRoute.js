const router = require("express").Router();
const userCont = require("../controller/userController");
router.get("/", userCont.userGet);
router.post("/registar", userCont.userPost);
module.exports = router;
router.get("/login", userCont.loginGet);
//authenticate(), que permite fazer o utilizador caso as credenciais do utilizador (username e password) estarem de acordo com os
//dados guardados em MongoDB. Para fazer a verificação das credenciais em MongoDB, utilizamos passport local strategy (local)
router.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    function (req, res) {
        res.redirect("/bookform");
    }
);
//Logout
router.get("/logout", userCont.logout);
