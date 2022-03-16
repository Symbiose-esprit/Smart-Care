const User = require('../models/users');

// Create
exports.CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        u: user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data !',
    });
  }
};

//////////////////////

// Get All
exports.GetAll = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: 'success',
      results: user.length,
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// Get One
exports.GetUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Could not find doc!',
    });
  }
};

//////////////////////

// Update
exports.UpdateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

//////////////////////

// Delete
exports.DeleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};
exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.');
};
exports.userBoard = (req, res) => {
  res.status(200).send('User Content.');
};
exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};
exports.moderatorBoard = (req, res) => {
  res.status(200).send('Moderator Content.');
};
