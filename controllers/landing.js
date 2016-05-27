module.exports.controller = function(app) {
  app.get('/', function(req, res) {
    res.send("Yo at homepage yo");
  });
}