//User model
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        //required mean user cannot pass this value if it didnot filled
        required: true
    },
    email: {
        type: String,
        //required mean user cannot pass this value if it didnot filled
        required: true,
        //the input must be unique
        unique: true
    },
    password: {
        type: String,
        //required mean user cannot pass this value if it didnot filled
        required: true
    },
    role: {
        type: String,
        //show what role of the user
        default: 'user'
    },
    root:{
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/bennytran/image/upload/v1615517539/nextjs_media/Profile_avatar_placeholder_large_picjlv.png'
    } 
},
{   
    //the time the user create an account
    timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset