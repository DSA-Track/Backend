import { UserI } from "../Models/User.model";

const genProfile = (user: UserI) => {
    return { username: user.username, email: user.email }

}

export default genProfile;