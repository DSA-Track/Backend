import { hash } from 'bcrypt';
import { model, Schema } from 'mongoose';

export type UserI = {
    username: string,
    email: string,
    password: string,
    phoneNumber?: string


}


const UserSchema = new Schema<UserI>({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        minlength: [8, "A strong password must have 8 or more characters."],
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: false,
        unique: true
    }

}, {
    timestamps: true
})

UserSchema.pre('save', async function (next) {
    this.password = await hash(this.password, 10);
    next()
})

const User = model<UserI>("users", UserSchema)


export default User