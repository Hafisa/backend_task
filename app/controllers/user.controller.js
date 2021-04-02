const db = require("../models");
const Ticket = db.ticket;
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
exports.generateRequestTicket=(req,res)=>{
  Ticket.create({
    userid: req.userId,
    message: req.body.message
  })
    .then(() => {
      res.send({ message: "Request Ticket generated!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  
  }


