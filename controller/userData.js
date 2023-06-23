const User = require("../models/User");

module.exports = {
  getSingleUser: async (req, res) => {
    const { id } = req.body;
    const users = await User.findByPk(id);
    res.send(users);
  },
  getAllUserData: async (req, res) => {
    const users = await User.findAll({ attributes: ["id", "name", "email", "user_desc", "designation"] });
    res.send(users);
  },
  
  // createUserData: async (req, res) => {
  //   console.log(req.body);
  //   const { name, age, designation, user_desc, email,password } = req.body;

  //   if (!name || !age  || !designation || !user_desc || !email || !password) {
  //     res.json({ error: "firstName And LastName are compalsary" });
  //   }

  //   await User.create({
  //     name: name,
  //     age: age,
  //     user_desc: user_desc,
  //     designation: designation,
  //     email:email,
  //     password:password
  //   });
  //   res.json({ Message: "User created successfully" });
  // },

  updateUserData: async (req, res) => {
    const { name, age, designation, user_desc, email, password, id } = req.body;
    const users = await User.update(
      {
        name: name,
        age: age,
        designation: designation,
        user_desc: user_desc,
        email: email,
        password: password,

      },
      {
        where: {
          id: id,
        },
      }
    );
    res.json({ Message: "User data updated successfully " });
  },

  deleteUserData: async (req, res) => {
    const { id } = req.body;
    const users = await User.destroy({
      where: {
        id: id,
      },
    });
    res.json({ Message: "User Deleted successfully" });
  },
};
