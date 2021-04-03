const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/changerequest",
  [authJwt.verifyToken,authJwt.isUser],
  controller.generateRequestTicket
  );
  app.get(
    "/api/showtickets",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.showTickets
  );
};
