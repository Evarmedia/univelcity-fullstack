const UserMod = require("../models/UserModel.js");

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await UserMod.findOne(
      { email: email }).then((user) => {
        if (user) {
          if (user.password === password) {
            res.json("successfull");
          } else {
            res.json("password is incorrect");
          }
        } else {
          res.json("User doesn't exist");
        }
      })
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const signup = async (req, res) => {
  if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password) {
    return res.status(404).send({ message: "Please fill in your data." });
  }

  try {
    const userReg = await UserMod.create(req.body);
    res.status(200).json(userReg);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const showAllUsers = async (req, res) => {
    try {
        const allUsers = await UserMod.find({})
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// const forgotpassword = async (req, res) => {}
// const verifyemail = async (req, res) => {}
// const signout = async (req, res) => {}

module.exports = {
  signin,
  signup,
  showAllUsers,
};
