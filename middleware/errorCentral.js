export default function errorCenter(error, req, res, next) {
  if (req.headersSent) {
    next(error);
  }
  console.error(error.stack);
  const message = error.isOperational
    ? error.message
    : "Something went wrong. We are working on it";
  const statusCode = error.status;
  res.status(statusCode).json({ message });
}
