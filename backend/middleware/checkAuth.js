import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

    if (!token) {
        return res.status(401).json({ message: "Нет доступа" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded._id;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Нет доступа" });
    }
};
