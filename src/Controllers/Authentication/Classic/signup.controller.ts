import User, { UserI } from "../../../Models/User.model";
import sendError from "../../../Util/sendError";
import sendSuccess from "../../../Util/sendSuccess";
import { controller } from "../../controller";

const USERNAME_EXISTS_ERROR = "Username already in use :/";
const EMAIL_EXISTS_ERROR = "Email already in use, Try logging in instead :)";
const SUCCESS_MESSAGE = "Signup Successfull!"


const Signup: controller = async (req, res) => {

    const { username, email, password } = req.body as UserI;
    if (!username || !email || !password)
        return res.sendStatus(400)

    try {
        let alreadyExists = await User.findOne({ email }).lean();
        if (alreadyExists)
            return sendError(409, EMAIL_EXISTS_ERROR, res)

        alreadyExists = await User.findOne({ username }).lean()
        if (alreadyExists)
            return sendError(409, USERNAME_EXISTS_ERROR, res);

        await User.create({ username, email, password });
        return sendSuccess(200, SUCCESS_MESSAGE, {}, res)


    } catch (err) {
        console.log({ Signup: err })
        return res.status(500).send({ err })
    }

}

export default Signup