import mongoose from 'mongoose'

const { Schema, model } = mongoose;

const UserSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 50

    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 50
    },
    role: String
}, {
    timestamps: true

})

export default model('User', UserSchema)