const Patient = require('../models/patientModel');

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: patients.length,
      data: {
        patients,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        patient,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.CreatePatient = async (req, res) => {
  try {
    // const newPatient = new Patient({})
    // newPatient.save();

    const newPatient = await Patient.create({}).then(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newPatient,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'invalid data sent!',
    });
  }
};

exports.UpdatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        patient,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.DeletePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
