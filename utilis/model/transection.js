import { Schema, model, models } from 'mongoose';

const TransectionSchema = new Schema({
    clientId: {
        type: String,
        required: [true, 'Amount is required!'],
    },
    Amount: {
        type: Number,
        required: [true, 'Amount is required!'],
    },
    utrNumber: {
        type: String,
        required: [true, 'utr Number is required!'],
    },
    accepted: {
        type: Boolean,
        default: false
    }
});

const Transection = models.Transection || model('Transection', TransectionSchema);
export default Transection;
