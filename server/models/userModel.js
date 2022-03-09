import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    // isActivated: {
    //     type: Boolean, 
    //     default: false
    // },
    // activationLink: { type: String },
    
    cities: { type: [String] },
    
    degrees: {
        type: String, default: 'C'
    }
})



export default mongoose.model('User', userSchema);




