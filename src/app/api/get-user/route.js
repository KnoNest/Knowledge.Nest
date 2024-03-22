// pages/api/decodeJWT.js

import Student from '@/models/student.model';
import Teacher from '@/models/teacher.model';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  // const { jwtToken } = await req.json();
  const jwtToken = cookies().get("token")?.value || ""

  if (!jwtToken) {
    return NextResponse.json({
      message: "JWT token is missing"
    });
  }
  
  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(jwtToken, process.env.TOKEN_SECRET);
    
    const teacher = await Teacher.findById(decoded?._id).select("-password")
    let student
    if (!teacher) {
        student = await Student.findById(decoded?._id).select("-password")
    }

    if (!teacher && !student) {
        return NextResponse.json(
            {error: `no user found by id ${id}`})
    }
    const user = teacher ? teacher : student
    return NextResponse.json(user)
    
  } catch (error) {
    // Handle verification or decoding errors
    return NextResponse.json({ error: 'Invalid JWT token' });
  }
};
