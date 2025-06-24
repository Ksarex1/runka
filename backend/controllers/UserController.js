import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserController = {
    register: async (req, res) => {
        try {
            //  Получаем данные пользователя из запроса
            const { email, fullName, password, avatarUrl } = req.body;

            //Проверяем есть ли почта в бд
            const candidate = await UserModel.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: "Пользователь с таким email уже существует" });
            }

            // хешируем пароль
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            // сохраняем данные
            const doc = new UserModel({
                email,
                fullName,
                passwordHash: hash,
                avatarUrl,
            });

            const user = await doc.save();

            // генерируем токен
            const token = jwt.sign(
                {
                    _id: user._id,
                },
                process.env.JWT_SECRET,
                { expiresIn: "30d" }
            );

            // в ответе оставялем токен и удаляем пароль для безопаснрости
            const { passwordHash, ...userData } = user._doc;

            res.json({ ...userData, token });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Не удалось зарегистрироваться" });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "Пользователь не найден" });
            }

            const isValidPass = await bcrypt.compare(password, user.passwordHash);
            if (!isValidPass) {
                return res.status(400).json({ message: "Неверный пароль" });
            }

            const token = jwt.sign(
                {
                    _id: user._id,
                },
                process.env.JWT_SECRET,
                { expiresIn: "30d" }
            );

            const { passwordHash, ...userData } = user._doc;

            res.json({ ...userData, token });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Не удалось авторизоваться" });
        }
    },

    getMe: async (req, res) => {
        try {
            const user = await UserModel.findById(req.userId);
            if (!user) {
                return res.status(404).json({ message: "Пользователь не найден" });
            }

            const { passwordHash, ...userData } = user._doc;

            res.json(userData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Нет доступа" });
        }
    },
    updateMe: async (req, res) => {
        try {
            const userId = req.userId;

            const {
                fullName,
                email,
                phone,
                birthdate,
                company,
                firstName,
                middleName,
                avatarUrl,
            } = req.body;

            const updatedUser = await UserModel.findByIdAndUpdate(
                userId,
                {
                    fullName,
                    email,
                    phone,
                    birthdate,
                    company,
                    firstName,
                    middleName,
                    avatarUrl,
                },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: "Пользователь не найден" });
            }

            const { passwordHash, ...userData } = updatedUser._doc;

            res.json(userData);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Ошибка при обновлении данных" });
        }
    },

};


