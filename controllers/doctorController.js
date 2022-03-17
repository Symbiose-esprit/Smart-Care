const Doctor = require('../models/doctors');

// Create
exports.CreateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        doc: doctor,
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
    const doctor = await Doctor.find();
    res.status(200).json({
      status: 'success',
      results: doctor.length,
      data: {
        doctor,
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
exports.GetDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        doctor,
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
exports.UpdateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        doctor,
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
exports.DeleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
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
