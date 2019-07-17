const User = require("../models/user");

module.exports = {
  getAllUser: (req, res) => {
    try {
      User.find({})
        .then(data => res.send(data))
        .catch(error =>
          res.send({
            message: "ups error happened, please call me to repair",
            error
          })
        );
    } catch (error) {
      console.log(error);
    }
  },
  createUser: (req, res) => {
    try {
      User.create({ name: "Adit", age: 24, address: "Pasir Muncang Jaya" })
        .then(data => res.send(data))
        .catch(error => res.send(error));
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: (req, res) => {
    try {
      User.remove({
        name: "ucan"
      })
        .then(data => res.send(data))
        .catch(error => res.send(error));
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: (req, res) => {
    try {
      User.findOneAndUpdate({ name: "Adit" }, { age: 30 }, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } catch (error) {
      console.log(error);
    }
  }
};
















// module.exports = {
//   getAllUser: (req, res) => {
//     User.find({})
//       .then(data => res.send(data))
//       .catch(error =>
//         res.send({
//           message: "Error Detected!",
//           error
//         })
//       )    
//   },
//   deleteUser: (req, res) => {
//     User.deleteOne({})
//       .then(data => res.deleteOne(data))
//       .catch(error =>
//         res.send({
//           message: "Error Detected!",
//           error
//         }))
//       },
//     postUser: (req, res) => {
//       User.pos
//       }
// };
