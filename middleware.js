import { auth } from '@/app/_lib/auth';
// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   // redirect the user
//   return NextResponse.redirect(new URL('/about', request.url));
// }

export const middleware = auth;

export const config = {
  matcher: ['/account'],
};
