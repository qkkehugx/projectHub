const server = require('./main');

const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
