import axios from 'axios';
import { controller } from "../../controller.js";

const GITHUB_URL = "https://github.com/login/oauth/authorize"
const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env


const GithubRedirectController: controller = async (req, res) => {

    try {
        const data = await axios({
            method: "POST",
            url: `${GITHUB_URL}?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${req.query.code}`,
            headers: {
                Accept: "application/json",
            }
        })

        console.log(data.data)

        return res.redirect(`http://localhost:3000?access_token=${data.data.access_token}`)
    } catch (err: any) {
        console.log(err.response.data)
        return res.status(500).send({ err })

    }


}

export default GithubRedirectController
