import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/login', // Ensure this path points to your login page
  },
});

export const config = {
  matcher: ['/booking/:path*','/dashboard','/customer/:path*','/rooms/:path*','/staff/:path*','/pricing','/employees/:path*','/accounts/:path*','/calendar',"/activities","/settings"], // Define paths where the middleware applies
};
