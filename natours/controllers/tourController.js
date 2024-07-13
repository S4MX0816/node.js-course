const Tour = require("../models/tourModel");

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name of price",
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  // JSend format
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    // result: tours.length,
    // data: { tours },
  });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: "success",
    // data: { tour: newTour },
  });
};

exports.getTour = (req, res) => {
  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);
  // res.status(200).json({
  //   status: "success",
  //   data: { tour },
  // });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: { tour: "<Updated tour will come here...>" },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
