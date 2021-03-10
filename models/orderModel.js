import mongoose from 'mongoose';
const {Schema} = mongoose;

const orderSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    address: String,
    mobile: String,
    cart: Array,
    total: Number,
    delivered: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.order || mongoose.model('order', orderSchema)
export default Dataset