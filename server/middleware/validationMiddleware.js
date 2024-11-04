const validateContent = (content) => {
  if (!content || content.trim() === "") {
    return "Content cannot be empty";
  }
  return null;
};

const validationMiddleware = (req, res, next) => {
  const { content } = req.body;
  const errorMessage = validateContent(content);

  if (errorMessage) {
    return res.status(400).json({ message: errorMessage });
  }

  next();
};

export default validationMiddleware;
  