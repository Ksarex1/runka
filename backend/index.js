import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import multer from "multer";
import fs from 'fs';

import UserModel from "./models/User.js";
import { UserController } from "./controllers/UserController.js";
import { registerValidation, loginValidation } from "./validations.js";
import { handleValidationErrors } from "./utils/handleErrors.js";
import { checkAuth } from "./middleware/checkAuth.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const uploadDir = 'uploads/avatars';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("DB connection error", err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage });

app.post('/upload/avatar', checkAuth, upload.single('avatar'), async (req, res) => {
    try {
        const userId = req.userId;
        const avatarUrl = `/uploads/avatars/${req.file.filename}`;

        await UserModel.findByIdAndUpdate(userId, { avatarUrl });

        res.json({ avatarUrl });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка загрузки аватара' });
    }
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

app.get("/auth/me", checkAuth, UserController.getMe);

app.put('/auth/me', checkAuth, UserController.updateMe);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
