const User = require("../models/user");

function chiper(text) {
  let arrayNumbers = [];
  [...text].forEach((letter, index) => {
    let n = text.charCodeAt(index);
    arrayNumbers.push(n+index-10)
  })
  return String.fromCharCode(...arrayNumbers)
}

// function dechiper(text) {
//   let arrayNumbers = [];
//   [...text].forEach((letter, index) => {
//     arrayNumbers.push(text.charCodeAt(index)-index+10)
//   })
//   return String.fromCharCode(...arrayNumbers)
// }

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

    const encryptName = chiper(name);
    const encryptPass = chiper(password);
    
    try {
      encryptName,
      encryptPass;
      User.create({
        encryptName: req.body.name,
        email: req.body.email,
        encryptPass: req.body.password
      })
        .then(data => res.send(data))
        .catch(error => res.send(error));
    } catch (error) {
      console.log(error);
    }
  },

  // deleteUser: (req, res) => {
  //   try {
  //     User.remove({
  //       name: "ucan"
  //     })
  //       .then(data => res.send(data))
  //       .catch(error => res.send(error));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  // updateUser: (req, res) => {
  //   try {
  //     User.findOneAndUpdate({ name: "Adit" }, { age: 30 }, (err, result) => {
  //       if (err) throw err;
  //       res.send(result);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },

  login: async (req, res) => {
    await User.findOne({ email: req.body.email, password: req.body.password })
      .then(async data => {
        if (data.password !== req.body.password) {
          await res.send({
            message: `Password Didn't Match!`
          });
        }
        if (data.email && data.password) {
          res
            .status(200)
            .send({ message: "you are logged in", loggedIn: true });
        }
      })
      .catch(error => {
        res.send({
          message: `ups name and password doesn't match`,
          loggedIn: false
        });
      });
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
