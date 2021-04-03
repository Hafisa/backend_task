const db = require("../models");
const Ticket = db.ticket;

exports.generateRequestTicket=(req,res)=>{

  //Save ticket request
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
  exports.showTickets=(req,res)=>{
    // Show tickets
    let data=[]
    Ticket.findAll().then(tickets =>{
      for (let i = 0; i < tickets.length; i++) {
        data.push(
          {userid:tickets[i].userid,
            message:tickets[i].message
          }
        )
      }
      res.send(data)
    }
     
      )
  }


