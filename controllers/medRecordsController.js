const MedRecords = require('../models/medRecords');

// Create
exports.CreateMedRecord = async (req, res) => {
  try {
    const medRecord = await MedRecords.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        medRecord: medRecord,
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
    const medRecords = await MedRecords.find();
    res.status(200).json({
      status: 'success',
      results: medRecords.length,
      data: {
        medRecords,
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
exports.GetMedRecord = async (req, res) => {
  try {
    const medRecord = await MedRecords.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        medRecord,
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
exports.UpdateMedRecord = async (req, res) => {
  try {
    const medRecord = await MedRecords.findByIdAndUpdate(
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
        medRecord,
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
exports.DeleteMedRecord = async (req, res) => {
  try {
    await MedRecords.findByIdAndDelete(req.params.id);
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
