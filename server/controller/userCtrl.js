const { User, Reviews, Ratings } = require('../../db/model/dataModel');

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
    Reviews.findAll({ where: { rentee_id: req.params.rentee_id} })
    .then((queriedinfo) => {
      var data = {reviews:[]};
      for(var i = 0; i < queriedinfo.length; i++) {
        data.reviews.push({
          message: queriedinfo[i].dataValues.comment, 
          reviewee_id: queriedinfo[i].dataValues.reviewee_id});
      }
        Ratings.findAll({ where: { reviewee_id: req.params.rentee_id } })
        .then(() => {
          console.log('get ratings success');
        })
        .catch((err) => res.status.send('error getting ratings'))
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('unable to find reviews')
    })
  },
  postReview: (req, res) => {
    User.findOne({
      where: {
        userEmail: req.body.reviewee_email,
      }
    })
    .then((user) => {
      var user_name = user.dataValues.userName;
      Reviews.create({
        rentee_id: req.params.rentee_id,
        reviewee_id: user_name,
        comment: req.body.comment,
      })
      .then((created) => {
        res.status(201).send(created.dataValues);
      })
      .catch((err) => {
        res.status(404).send('unable to store comment in database');
      })
    })
    .catch(err => res.status(404).send(err))
  }
}
