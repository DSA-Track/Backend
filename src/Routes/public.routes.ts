import { Router } from "express";
import Login from "../Controllers/Authentication/Classic/login.controller.js";
import Signup from "../Controllers/Authentication/Classic/signup.controller.js";
import GithubRedirectController from "../Controllers/Authentication/Github/github.controller.js";
const PublicRouter = Router()

PublicRouter.get("/", (_req, res) =>
    res.redirect("https://github.com/1611Aryan")
)
PublicRouter.get("/oauth/github/redirect", GithubRedirectController)
PublicRouter.post("/", Login);
PublicRouter.post("/signup", Signup)


export default PublicRouter