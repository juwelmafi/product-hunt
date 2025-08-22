import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token, // allow only if token exists
  },
  pages: {
    signIn: "/login", // redirect if not authenticated
  },
});

export const config = {
  matcher: ["/add-product"], // protect only /add-product
};
