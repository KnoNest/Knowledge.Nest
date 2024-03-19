// pages/api/decodeJWT.js

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
   
    return NextResponse.json({ payload: decoded });
  } catch (error) {
    // Handle verification or decoding errors
    return NextResponse.json({ error: 'Invalid JWT token' });
  }
};
