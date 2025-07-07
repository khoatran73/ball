export const jwtConstants = {
    secret: process.env.JWT_SECRET || "your-secret",
    expiresIn: "1d",
};
