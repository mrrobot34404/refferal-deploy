import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    phoneNumber: {
        type: Number,
        unique: false, // Remove uniqueness constraint
    },
    verified: {
        type: Boolean,
        default: false
    },
    level: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'Unpaid'
    },
    payments: {
        type: String,
    },
    plan: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const User = models.User || model('User', UserSchema);
export default User;
