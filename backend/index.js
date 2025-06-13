import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { UserController } from "./controllers/UserController.js";
import { registerValidation, loginValidation } from "./validations.js";
import { handleValidationErrors } from "./utils/handleErrors.js";
import { checkAuth } from "./middleware/checkAuth.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("DB connection error", err));

app.get("/", (req, res) => {
    res.send("Hello World");
});

// Регистрация
app.post(
    "/auth/register",
    registerValidation,
    handleValidationErrors,
    UserController.register
);

// Логин
app.post("/auth/login", loginValidation, handleValidationErrors, UserController.login);

// Получить данные пользователя (только если авторизован)
app.get("/auth/me", checkAuth, UserController.getMe);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
