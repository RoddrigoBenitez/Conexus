import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
    username: string;
    password: string;
    rol: "caja" | "mesero" | "cocina";
    createdAt: Date;
}

const UserSchema: Schema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: {
        type: String,
        required: true,
        enum: ["caja", "mesero", "cocina"],
    },
    createdAt: { type: Date, default: Date.now },
});

UserSchema.pre<IUser>("save", async function (next) {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }

    next();
});


UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
