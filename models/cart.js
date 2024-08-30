const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
	userId: {
		type: String
	},
	cartItems: [
		{
			productId: {
				quantity: Number,
				subtotal: Number
			}
		}
	],
	totalPrice: {
		type: Number,
		required: [true, 'totalPrice is required']
	},
	orderedOn: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('cart', cartSchema);