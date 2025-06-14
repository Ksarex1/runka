import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    firstName: { type: String, default: '' },
    middleName: { type: String, default: '' },
    birthDate: { type: Date },
    company: { type: String, default: '' },
    phone: { type: String, default: '' },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    avatarUrl: { type: String, default: '' },
},{
    timestamps: true
})

export default mongoose.model('User', UserSchema);