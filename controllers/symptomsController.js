const Symptoms = require('../models/symptoms');

exports.CreateSymptoms = async (req, res) => {
  try {
    const newSymptom = await Symptoms.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        symptom: newSymptom,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data',
    });
  }
};

// Get All
exports.GetAllSymptoms = async (req, res) => {
  try {
    const symptom = await Symptoms.find();
    res.status(200).json({
      status: 'success',
      results: symptom.length,
      data: {
        symptom,
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
exports.GetSymptom = async (req, res) => {
  try {
    const symptom = await Symptoms.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        symptom,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Could not find symptom!',
    });
  }
};

//////////////////////

// Update
exports.UpdateSymptom = async (req, res) => {
  try {
    const symptom = await Symptoms.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        symptom,
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
exports.DeleteSymptom = async (req, res) => {
  try {
    await Symptoms.findByIdAndDelete(req.params.id);
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
