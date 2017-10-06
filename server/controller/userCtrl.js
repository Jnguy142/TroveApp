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
      var data = { reviews: [], ratings: { 1:0, 2:0, 3:0, 4:0, 5:0 } };
      for(var i = 0; i < queriedinfo.length; i++) {
        data.reviews.push({
          message: queriedinfo[i].dataValues.comment, 
          reviewee_id: queriedinfo[i].dataValues.reviewee_id});
      }
      Ratings.findAll({ where: { Reviewee_id: req.params.rentee_id } })
      .then((ratingInfo) => {
        for( var i = 0; i < ratingInfo.length; i++ ) {
          var rating = ratingInfo[i].dataValues.Rating;
          console.log(rating);
          data.ratings[rating]++;
        }
        console.log(data.ratings);
        res.status(200).send(data);
      })
      .catch((err) => res.status(404).send('error getting ratings'))
      
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
      if(parseInt(user.dataValues.id) === parseInt(req.params.rentee_id)) {
        res.status(201).send('0');
      } else {
        Reviews.findOne({ where: {
          rentee_id: req.params.rentee_id, 
          reviewee_id: user_name,} 
        }).then( (reviewInfo) => {
          if (reviewInfo === null) {
            console.log('i made it past first two tests');
            Reviews.create({
              rentee_id: req.params.rentee_id,
              reviewee_id: user_name,
              comment: req.body.comment,
            })
            .then((created) => {
              res.status(201).send(created.dataValues);
            })
            .catch((err) => {
              console.log(err);
              res.status(404).send('unable to store comment in database');
            })
          } else {
            res.status(201).send('1')
          }
        })
        .catch((err) => {
          res.status(404).send('error when querying database')
        })
      }
    })
    .catch(err => res.status(404).send(err))
  }
}
