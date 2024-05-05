import { NextResponse } from "next/server";
import connectDB from "@/DB_Config/connectDB.js";
import ClassPrice from "@/models/classPrice.model";


export const POST = async (req) => {
    connectDB();
    try {
        const { data } = await req.json();

        if (!data || typeof data !== "object") {
            return NextResponse.json({ error: "Invalid data format. Expected an object." }, { status: 400 });
        }

        const classPrices = await ClassPrice.findOne();

        if (classPrices) {
            return NextResponse.json({ error: "Class price record already exists. Cannot create a new one." }, { status: 409 });
        }

        const newClassPrices = await ClassPrice.create({ data: new Map(Object.entries(data)) });

        return NextResponse.json({ message: "Class prices created successfully", classPrices: newClassPrices }, { status: 201 });

    } catch (error) {
        console.error("Error creating class prices:", error.message);
        return NextResponse.json({ error: "Something went wrong while creating class prices" }, { status: 500 });
    }
};
