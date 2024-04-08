export const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Erro Interno do Servidor";
  return res.status(statusCode).json({
    message,
  });
};
