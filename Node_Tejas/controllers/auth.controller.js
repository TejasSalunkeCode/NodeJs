

export const getRegisterPage = (req, res) => {
    return es.render("../views/auth/register");
};

export const postRegister=async(req,res)=>{
    console.log(req.body);
    res.redirect("/login")
    
}

export const getLoginPage = (req, res) => {
    return es.render("../views/auth/register");
};

export const postLogin = (req, res) => {
    res.setHeader("Set-Cookie","isLoggedIn=true;   path=/;");
    res.cookie("isLoggedIn",true);
    res.redirect("/");
};


