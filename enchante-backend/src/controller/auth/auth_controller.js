import User from "../../model/userModel.js";
import { generateToken } from "../../utils/auth_util.js";

export const login = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (req.body.password === user.password) {
            res.send({
                _id: user._id,
                name: user.fullName,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({ message: "Invalide Username or Password" });
};

export const signup = async (req, res, next) => {
    const newUser = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    const user = await newUser.save();

    res.send({
        _id: user._id,
        name: user.fullName,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
    });
};
