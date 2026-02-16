import jwt from "jsonwebtoken";
import { User } from "../model/index.js";
import bcrypt from "bcryptjs"
import NotFound from "../errors/NotFound.js";
import { UserResponseDTO } from "../dto/UserDTO.js";

class AuthService {
    static async register(data) {
        const userExists = await User.findOne({ email: data.email });
        if (userExists) {
            throw new Error("This user alredy exists");
        }
        const hash = await bcrypt.hash(data.password, 10);
        return User.create({
            ...data,
            password: hash
        });
    }

    static async login(email, password) {
        const user = await User.findOne({email}).select("+password");
        if (!user) throw new NotFound("The user doesnt exists");
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("Invalid credentials");

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" },
        );
        return { user, token };
    }

    static async myProfile(userId) {
        const user = await User.findById(userId).lean();
        if (!user) throw new NotFound("The user doesnt exists");

        const userResponse = new UserResponseDTO(user);

        return {
            name: userResponse.name,
            email: userResponse.email,
            age: userResponse.age,
            weight: userResponse.weight,
            height: userResponse.height,
            goal: userResponse.goal
        }
    }
}
export default AuthService;
