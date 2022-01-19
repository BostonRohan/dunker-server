const errorHandler = (statusCode, text) =>
  res.status(statusCode).json({
    status: statusCode,
    error: text,
  });
export default errorHandler;
