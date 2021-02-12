function cors(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (request.method === 'OPTIONS') {
    response.sendStatus(200);
  } else {
    next();
  }
}

module.exports = cors;
