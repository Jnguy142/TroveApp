const { User, Reviews } = require('../../db/model/dataModel');

module.exports = {
  getUser: (req, res) => {
    User.findOne({
      where: {
        userEmail: req.params.userEmail
      }
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(err => res.status(404).send(err));
  },
  getUserById: (req, res) => {
    User.findOne({
      where: {
        id: req.params.rentee_id
      }
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(err => res.status(404).send(err));
  },
  addUser: (req, res) => {
    User.create({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userRating: 0
    })
    .then((data) => {
      res.status(201).send(data)
    })
    .catch((err) => {
      res.status(404).send(err)
    });
  },
  getReviews: (req, res) => {
    res.status(200).send('here are your comments');
  },
  postReview: (req, res) => {
    res.status(201).send('successfully posted to server');
  }
}
