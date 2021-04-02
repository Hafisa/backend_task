module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("tickets", {
      userid: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
    
    });
  
    return Ticket;
  };