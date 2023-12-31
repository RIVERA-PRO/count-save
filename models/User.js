import mongoose from 'mongoose'

const schema = mongoose.Schema({

    mail: { type: String, required: true },
    password: { type: String, required: true },

    is_online: { type: Boolean, required: false },
    is_seller: { type: Boolean, required: false },
    is_admin: { type: Boolean, required: false },
    is_verified: { type: Boolean, required: false },
    verify_code: { type: String, required: false },
},
    {
        timestamps: true,
    }
)

const User = mongoose.model("users", schema);

export default User;