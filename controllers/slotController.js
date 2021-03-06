/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable new-cap */
const slotModel = require('../models/slotModel');

/**
 * slotController.js
 *
 * @description :: Server-side logic for managing slots.
 */
module.exports = {
  /**
   * slotController.list()
   */
  list: function (req, res) {
    slotModel.find((err, slots) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting slot.',
          error: err,
        });
      }
      return res.json(slots);
    });
  },

  /**
   * slotController.show()
   */
  show: function (req, res) {
    const { id } = req.params;
    slotModel.findOne({ _id: id }, (err, slot) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting slot.',
          error: err,
        });
      }
      if (!slot) {
        return res.status(404).json({
          message: 'No such slot',
        });
      }
      return res.json(slot);
    });
  },

  /**
   * slotController.create()
   */
  create: function (req, res) {
    const slot = new slotModel({
      slot_time: req.body.slot_time,
      slot_date: req.body.slot_date,
      created_at: Date.now(),
    });

    slot.save((err, slot) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating slot',
          error: err,
        });
      }
      return res.status(201).json(slot);
    });
  },

  /**
   * slotController.update()
   */
  update: function (req, res) {
    const { id } = req.params;
    slotModel.findOne({ _id: id }, (err, slot) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting slot',
          error: err,
        });
      }
      if (!slot) {
        return res.status(404).json({
          message: 'No such slot',
        });
      }

      slot.slot_time = req.body.slot_time ? req.body.slot_time : slot.slot_time;
      slot.slot_date = req.body.slot_date ? req.body.slot_date : slot.slot_date;
      slot.created_at = req.body.created_at
        ? req.body.created_at
        : slot.created_at;

      slot.save((err, slot) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating slot.',
            error: err,
          });
        }

        return res.json(slot);
      });
    });
  },

  /**
   * slotController.remove()
   */
  remove: function (req, res) {
    const { id } = req.params;
    slotModel.findByIdAndRemove(id, (err, slot) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the slot.',
          error: err,
        });
      }
      return res.status(204).json();
    });
  },
};
