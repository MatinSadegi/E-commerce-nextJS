import db from "../../../utils/db";
import { hashPassword } from "../../../utils/auth";
import User from "../../../models/User";

async function signup(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { firstName, lastName, email, password } = req.body;
  try {
    if (firstName.trim == "") {
      return res.status(400).json({ message: "First Name is empty" });
    }
    if (lastName.trim == "") {
      return res.status(400).json({ message: "Last Name is empty" });
    }
    if (!email.includes("@")) {
      return res.status(400).json({ message: "Email format is wrong" });
    }
    if (password.length < 5) {
      return res.status(400).json({
        message: "Password should also be at least 6 character",
      });
    }
    const hashedPassword = await hashPassword(password);
    await db.connect();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(422).json({ message: "User existing already" });
      db.disconnect();
      return;
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ user, message: "Create user!" });
    db.disconnect()
  } catch (error) {
    res.status(500).json({ message: "Something went wrong..." });
  }
}

export default signup;
