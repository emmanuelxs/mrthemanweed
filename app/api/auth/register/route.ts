import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { name, username, email, password } = await req.json();

    if (!name || !username || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await connectDB();

    const existingUser = await User.findOne({ 
      $or: [{ email: email.toLowerCase() }, { username: username.toLowerCase() }] 
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    // Send welcome email (only if API key exists)
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "MrTheManWEED <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to MrTheManWEED! 🎉",
        html: `
          <h1>Welcome to MrTheManWEED, ${name}!</h1>
          <p>Thank you for joining!</p>
          <p>Your username: <strong>@${username}</strong></p>
          <p>Start posting and connecting with people now!</p>
          <br>
          <p>The MrTheManWEED Team</p>
        `,
      });
    }

    return NextResponse.json({ 
      message: "Account created successfully! Welcome email sent.",
      user: { username: user.username, email: user.email }
    });

  } catch (error: any) {
    console.error("Register error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}