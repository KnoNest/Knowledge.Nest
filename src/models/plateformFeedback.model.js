import mongoose from "mongoose"

const plateFormFeedBackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    feedBack: {
        type: String,
        required: true
    }
}, {timestamps: true})

const PlateFormFeedBack = mongoose.models.PlateFormFeedBack || mongoose.model("PlateFormFeedBack", plateFormFeedBackSchema)

export default PlateFormFeedBack