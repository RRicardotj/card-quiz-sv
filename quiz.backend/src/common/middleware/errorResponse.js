// eslint-disable-next-line no-unused-vars
function errorResponse(error, request, response, next) {
  return response.status(statusCode).json({ error: ERROR_MESSAGE || 'Ocurrió un error' });
}

module.exports = errorResponse;
