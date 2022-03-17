const Appointments = require('../models/appointments');

// Create
exports.CreateAppointment = async (req, res) => {
  try {
    const appoint = await Appointments.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        appointment: appoint,
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
    const appoints = await Appointments.find();
    res.status(200).json({
      status: 'success',
      results: appoints.length,
      data: {
        appoints,
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
exports.GetAppoint = async (req, res) => {
  try {
    const appoint = await Appointments.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        appoint,
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
exports.UpdateAppointment = async (req, res) => {
  try {
    const appoint = await Appointments.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: 'success',
      data: {
        appoint,
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
exports.DeleteAppointment = async (req, res) => {
  try {
    await Appointments.findByIdAndDelete(req.params.id);
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
