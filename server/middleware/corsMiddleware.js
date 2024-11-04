

import cors from "cors";

const getCorsOptions = () => ({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true,
});

const createCorsMiddleware = () => {
  const corsOptions = getCorsOptions();
  return cors(corsOptions);
};

const corsMiddleware = createCorsMiddleware();

export default corsMiddleware;
