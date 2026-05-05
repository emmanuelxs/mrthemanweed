import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const response = NextResponse.redirect(new URL('/login', req.url));

  // Clear all possible NextAuth cookies
  response.cookies.set('next-auth.session-token', '', { maxAge: 0 });
  response.cookies.set('__Secure-next-auth.session-token', '', { maxAge: 0 });
  response.cookies.set('next-auth.callback-url', '', { maxAge: 0 });
  response.cookies.set('__Secure-next-auth.callback-url', '', { maxAge: 0 });
  response.cookies.set('next-auth.csrf-token', '', { maxAge: 0 });
  response.cookies.set('__Secure-next-auth.csrf-token', '', { maxAge: 0 });

  return response;
}