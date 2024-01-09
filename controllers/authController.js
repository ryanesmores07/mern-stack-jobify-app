import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

export const login = async (req, res) => {
  // Check if user exists
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) throw new UnauthenticatedError("invalid credentials");
  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password
  );
  if (!isPasswordCorrect) throw new UnauthenticatedError("invalid credentials");

  // One line version of the above
  // const isValidUser = user && comparePassword(req.body.password, user.password)
  // if (!isValidUser) throw new UnauthenticatedError("invalid credentials")

  const token = createJWT()

  res.send("login");

  // Check if password is correct
};
