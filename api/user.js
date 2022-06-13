const router = require("express").Router();
const { User } = require("../models/Models");

//new user
router.post("/register", async (req, res) => {
  const user_phone_check = await User.findOne({
    user_phone: { $eq: req.body.phone },
  });
  if (user_phone_check) {
    res.send({ data: "phone", status: false });
  } else {
    const user = new User({
      user_name: req.body.user_name,
      user_dob: req.body.dob,
      user_university_email: req.body.email,
      user_phone: req.body.phone,
      user_password: req.body.password,
      user_program: req.body.program,
      user_department: req.body.department,
      user_gender: req.body.gender,
    });
    try {
      const saved_user = await user.save();
      res.send({
        status: true,
        data: "User Registration Successful",
        result: saved_user,
      });
    } catch (error) {
      console.log(error);
      res.send({ status: false, data: "An Error Occured", result: error });
    }
  }
});

//user login
router.post("/login", async (req, res) => {
  try {
    const current_user = await User.findOne({
      $and: [{ user_password: req.body.password }, { user_phone: req.body.id }],
    });
    current_user
      ? res.send({ user: current_user, status: true })
      : res.send({ status: false, data: "Wrong Details" });
  } catch (error) {
    console.log(error);
    res.send({ status: false, data: "An Error Occured", result: error });
  }
});

module.exports = router;
