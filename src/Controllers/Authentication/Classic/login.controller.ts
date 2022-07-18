import { compare } from 'bcrypt';
import User from "../../../Models/User.model";
import genProfile from '../../../Util/genProfile';
import sendError from '../../../Util/sendError';
import sendSuccess from '../../../Util/sendSuccess';
import { controller } from "../../controller";


const ERROR_MESSAGE = "Incorrect User Information."
const SUCCESS_MESSAGE = "Login Successfull."


const Login: controller = async (req, res) => {

    const { username_or_email, password } = req.body
    try {
        const userExists = await User.findOne({ $or: [{ email: username_or_email }, { username: username_or_email }] }).lean();

        if (!userExists)
            return sendError(404, ERROR_MESSAGE, res);


        if (!await compare(password, userExists.password))
            return sendError(404, ERROR_MESSAGE, res);

        return sendSuccess(200, SUCCESS_MESSAGE, { profile: genProfile(userExists) }, res)

    } catch (err) {
        console.log({ Login: err })
        return res.status(500).send(err)
    }


}

export default Login