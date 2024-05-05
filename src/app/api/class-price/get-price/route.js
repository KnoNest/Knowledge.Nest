import { NextResponse } from "next/server";
import connectDB from "@/DB_Config/connectDB.js";
import ClassPrice from "@/models/classPrice.model";


export const GET = async (req) => {
    connectDB();
    try {
        
        const classPrices = await ClassPrice.findOne();

        if (classPrices.length === 0) {
            return NextResponse.json({ message: "No class prices found" }, { status: 404 });
        }

        return NextResponse.json({ classPrices }, { status: 200 }); // Return all data with 200 status
    } catch (error) {
        console.error("Error fetching class prices:", error.message);
        return NextResponse.json({ error: "Something went wrong while fetching class prices" }, { status: 500 });
    }
};
