const MedicalDocs = require('../models/medicalDocsModel');

exports.getmedicalDocs = async (req, res) => {
  try {
    const medicaldocs = await MedicalDocs.find();

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: medicaldocs.length,
      data: {
        medicaldocs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getMedicalDoc = async (req, res) => {
  try {
    const medicaldoc = await MedicalDocs.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        medicaldoc,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.CreateMedicalDoc = async (req, res) => {
  try {
    // const newPatient = new Patient({})
    // newPatient.save();

    const newMedicalDoc = await MedicalDocs.create({}).then(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newMedicalDoc,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'invalid data sent!',
    });
  }
};

exports.UpdateMedicalDoc = async (req, res) => {
  try {
    const medicaldoc = await MedicalDocs.findByIdAndUpdate(
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
        medicaldoc,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.DeleteMedicalDoc = async (req, res) => {
  try {
    await MedicalDocs.findByIdAndDelete(req.params.id);
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
