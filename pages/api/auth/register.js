import connectDB from '../../../utils/connectDB'
import Users from '../../../models/userModel'
import valid from '../../../utils/valid'
import bcrypt from 'bcrypt'

//connect the mongoose model with the api 
connectDB()

//POST function
export default async (req, res) => {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
    }
}

//get the register input from user
const register = async (req, res) => {
    try{
        //all the value
        const { name, email, password, cfpassword} = req.body

        //return error if the input invalud
        const errMsg = valid(name, email, password, cfpassword)
        if(errMsg) return res.status(400).json({err: errMsg})


        //return a toast if the email of the user's input is already exists
        const user = await Users.findOne({ email })
        if (user) return res.status(400).json({err: 'this email already exists'})

        //create a hash for the user's password
        const passwordHash = await bcrypt.hash(password, 12)

        //create a new user in the userlist
        const newUser = new Users({
            name, email, password: passwordHash, cfpassword})
        
        //save the new user input 
        await newUser.save()
        res.json({msg: "Register Success!"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}