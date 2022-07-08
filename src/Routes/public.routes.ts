import { Router } from "express";
import GithubRedirectController from "../Controllers/github.controller.js";
const PublicRouter = Router()

PublicRouter.get("/", (_req, res) => {

    return res.redirect("https://github.com/1611Aryan")

})

PublicRouter.get("/oauth/github/redirect", GithubRedirectController)


export default PublicRouter