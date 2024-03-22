import {v2 as cloudinary} from "cloudinary"
import { NextResponse } from "next/server";


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if (!localFilePath) return null

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        return response

    } catch (error) {
        return NextResponse.json(
            {error: "somthing went wrong"})
    }
}

const deleteFromCloudinary = async(localFilePath) =>{
    try {
        
        if (!localFilePath){
            throw new ApiError(400, "File path missing")
        }

        const response = await cloudinary.uploader.destroy(localFilePath)
        return response
    } catch (error) {
        return NextResponse.json(
            {error: "somthing went wrong"})
    }
}



export {uploadOnCloudinary, deleteFromCloudinary}