import mongoose, { Schema, Model } from "mongoose";
import bcrypt from "bcrypt";
interface IUser {
    username: string;
    password: string;
    rol: "caja" | "mesero" | "cocina";
    createdAt?: Date;
}

interface IUserMethods {
    comparePassword(candidatePassword: string): Promise<boolean>;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const UserSchema: Schema<IUser, UserModel, IUserMethods> = new Schema<IUser, UserModel, IUserMethods>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: {
        type: String,
        required: true,
        enum: ["caja", "mesero", "cocina"],
    },
    createdAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

const User: UserModel = mongoose.model<IUser, UserModel>("User", UserSchema);

export default User;
