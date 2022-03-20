/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
const appointmentModel = require('../models/appointmentModel');
const slotModel = require('../models/slotModel');

/**
 * appointmentController.js
 *
 * @description :: Server-side logic for managing appointments.
 */
module.exports = {
  /**
   * appointmentController.list()
   */
  list: function (req, res) {
    appointmentModel.find((err, appointments) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting appointment.',
          error: err,
        });
      }
      slotModel.populate(appointments, { path: 'slots' }, (err, data) =>
        res.json(appointments)
      );
    });
  },

  /**
   * appointmentController.show()
   */
  show: function (req, res) {
    const { id } = req.params;
    appointmentModel.findOne({ _id: id }, (err, appointment) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting appointment.',
          error: err,
        });
      }
      if (!appointment) {
        return res.status(404).json({
          message: 'No such appointment',
        });
      }
      return res.json(appointment);
    });
  },

  /**
   * appointmentController.create()
   */
  create: function (req, res) {
    const slot = new slotModel({
      slot_time: req.body.slot_time,
      slot_date: req.body.slot_date,
      created_at: Date.now(),
    });
    slot.save();

    const appointment = new appointmentModel({
      name: req.body.name,
      email: req.body.email,
      slots: slot._id,
      created_at: req.body.created_at,
    });

    appointment.save((err, appointment) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating appointment',
          error: err,
        });
      }
      return res.status(201).json(appointment);
    });
  },

  /**
   * appointmentController.update()
   */
  update: function (req, res) {
    const { id } = req.params;
    appointmentModel.findOne({ _id: id }, (err, appointment) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting appointment',
          error: err,
        });
      }
      if (!appointment) {
        return res.status(404).json({
          message: 'No such appointment',
        });
      }

      appointment.name = req.body.name ? req.body.name : appointment.name;
      appointment.email = req.body.email ? req.body.email : appointment.email;
      appointment.slots = req.body.slots ? req.body.slots : appointment.slots;
      appointment.created_at = req.body.created_at
        ? req.body.created_at
        : appointment.created_at;

      appointment.save((err, appointment) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating appointment.',
            error: err,
          });
        }

        return res.json(appointment);
      });
    });
  },

  /**
   * appointmentController.remove()
   */
  remove: function (req, res) {
    const { id } = req.params;
    appointmentModel.findByIdAndRemove(id, (err, appointment) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the appointment.',
          error: err,
        });
      }
      return res.status(204).json();
    });
  },
};
