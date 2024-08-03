import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
        match: [/.+@.+\..+/, 'Please enter a valid email address.'] // Basic email validation
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        trim: true, // Optional: Trim whitespace from the username
        unique: [true, 'Username already exists!'] // Consider adding uniqueness constraint if applicable
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minlength: [6, 'Password must be at least 6 characters long.'] // Basic password length validation
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
    screenShot: {
        type: String,
    },
    planName: {
        type: String,
    },
    utiNumber: {
        type: String,
    },
    planPrice: {
        type: Number,
        default: 0
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
        required: [true, 'Address is required!']
    },
    block: {
        type: String,
        required: [true, 'Block is required!']
    },
    postOffice: {
        type: String,
        required: [true, 'Post Office is required!']
    },
    state: {
        type: String,
        required: [true, 'State is required!']
    },
    country: {
        type: String,
        required: [true, 'Country is required!']
    },
    number: {
        type: String,
        required: [true, 'Number is required!']
    },
    nomineeName: {
        type: String,
        required: [true, 'Nominee Name is required!']
    },
    father: {
        type: String,
        required: [true, 'father/husband Name is required!']
    },
    relation: {
        type: String,
        required: [true, 'Relation is required!']
    },
    referalId: {
        type: String,
    }

});

const User = models.User || model('User', UserSchema);
export default User;
