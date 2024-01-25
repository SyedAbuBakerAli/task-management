const mongoose  = require(`mongoose`);


const taskSchema = new mongoose.Schema({
 
    title: {
        type: String,
        required: [true, `Please enter your title`],
        maxlength: [30, `Your title cannot exceed 30 characters`]
    },
    description: {
        type: String,
        required: [true, `Please enter your description`],
        maxlength: [100, `Your title cannot exceed 30 characters`]
    },
    status: {
        type: String,
        required: [true, `Please enter your status`]
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: `User`,
        required: false
     },
    createdAt: {
        type: Date,
        default: Date.now
    },
})





module.exports = mongoose.model(`Task`,taskSchema);