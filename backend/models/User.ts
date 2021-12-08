import mongoose from "mongoose"
import { User } from 'shared/user';
import { SantizedUser } from "shared/user";

const UsersSchema = new mongoose.Schema<User>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    first_name: { type: String, required: true, },
    last_name: { type: String, required: true, },
    avatar: { type: String, required: false }
})

export const sanitize = (user: User) => (
    {
    id: user._id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    avatar: `https://agcoin.s3.amazonaws.com/user-avatars/${user.avatar ?? 'default_profile_400x400.png'}`
})

declare module 'express-session' {
    interface SessionData {
        user?: SantizedUser
    }
}


export default mongoose.model("user", UsersSchema)