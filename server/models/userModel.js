import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
// import { ObjectId } from 'mongodb'

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
    cities: { type: [String] },
    
    degrees: {
        type: String, default: 'C'
    }
})



export default mongoose.model('User', userSchema);




