import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// Sign Up Controller
export const signUp= async (req,res) => {
    try {
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({ error: "Email already exists" });
        }
        const hashedPassword = await bcryptjs.hash(password, 12);

        const newUSer = new User({
            fullname:fullname,
            email:email,
            password:hashedPassword
        })
        await newUSer.save()
        res.status(201).json({ message: "User created successfully"});
        
    } catch (error) {
        console.error("Errpr ",error)
        res.status(500).json({ error: "Internal Server Error" });
    }
    
}

//Login Controller
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const isValidPassword = await bcryptjs.compare(password, user.password);
        if (!isValidPassword) {
                return res.status(401).json({ error: "Invalid password" });
        }else{
            res.status(200).json({ message: "Login successful", user:{
                id:user._id,
                fullname:user.fullname,
                email:user.email
            } });
        }

    }
    catch(error) {
            console.error("Error ", error)
            res.status(500).json({ error: "Internal Server Error" });
    }

}