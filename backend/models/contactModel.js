const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    fullname: { 
        type: String,
        required: [true, "Please fill in your full name"]
    },
    email: {
        type: String,
        required: [true, "Please fill in your email"] 
    },
    phone: { 
        type: String,
        required: [true, "Please fill in your phone number"] 
    },
    profile_url: String,
},
{
    timestamps: true,
}
)

module.exports = mongoose.model("contacts", contactSchema)