/* eslint-disable no-shadow */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models');
const config = require('../config/auth.config');
const multer = require ('multer');

const User = db.user;
const Role = db.role;
const Doctor = db.doctor;
const Patient =db.patient;


exports.signup = (req, res) => {
  console.log(req.body)
  //user model
  const user = new Doctor({
    name: req.body.name,
    lastname: req.body.lastname,
    login: req.body.login,
    password: bcrypt.hashSync(req.body.password, 8),
    email: req.body.email,
    role: req.body.role,
    sex: req.body.sex,
    address: req.body.address,
    telephone: req.body.telephone,
    dateofbirth: req.body.dateofbirth,
    age: req.body.age,
    specialty:req.body.specialty,
    office_address:req.body.office_address,
    office_number:req.body.office_number,
    doctorate:req.body.doctorate,
    consult_price:req.body.consult_price,
    coords:req.body.coords,
    img: req.body.img,
    
  
  });
 /* if (req.file)  
  {
    console.log(req.file.path)
    user.img = req.file.path
    
  }*/

  user.save((err, user) => {
    // in case of an error , return err
    if (err) {
      console.log(err)
      res.status(500).send({ message: err });
      return ;
    }
    // test user's role
    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          // if user's role dosen't exist , return err
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            res.send({ message: 'User was registered successfully!' });
          });
        }
      );
    } else {
      Role.findOne({ name: 'patient' }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: 'User was registered successfully!' });
        });
      });
    }
  });
};
exports.signupatient = (req, res) => {
  console.log(req.body)
  //user model
  
  const user = new Patient({
    name: req.body.name,
    lastname: req.body.lastname,
    login: req.body.login,
    password: bcrypt.hashSync(req.body.password, 8),
    email: req.body.email,
    role: req.body.role,
    sex: req.body.sex,
    address: req.body.address,
    telephone: req.body.telephone,
    dateofbirth: req.body.dateofbirth,
    age: req.body.age,
    insurance:req.body.insurance,
    payment_method:req.body.payment_method,
    blood_type:req.body.blood_type,
    addictions:req.body.addictions,
    height:req.body.height,
    weight:req.body.weight,
    img: req.body.img,
  
  });
  user.save((err, user) => {
    // in case of an error , return err
    if (err) {
      console.log(err)
      res.status(500).send({ message: err });
      return ;
    }
    // test user's role
    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          // if user's role dosen't exist , return err
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            res.send({ message: 'User was registered successfully!' });
          });
        }
      );
    } else {
      Role.findOne({ name: 'patient' }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: 'User was registered successfully!' });
        });
      });
    }
  });
};
exports.signin = (req, res) => {
  console.log(req.body.password);
  User.findOne({
    name: req.body.name,
  })
    .populate('roles', '-__v')
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: 'User Not found.' });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        });
      }
      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      const authorities = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < user.roles.length; i++) {
        // eslint-disable-next-line prefer-template
        authorities.push('ROLE_' + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        name: user.name,
        email: user.email,
        roles: authorities,
        accessToken: token,
      });
    });
};
