import dotenv from 'dotenv';
import express from "express";
import corsMiddleware from "./middleware/corsMiddleware.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sequelize from "./config/connection.js";
import dncRouter from "./routes/api/dnc.js"
import authRoutes from "./routes/authRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, './.env') });
console.log(process.env.JWT_SECRET);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client/dist"));
app.use(corsMiddleware); 

app.use("/api", authRoutes); // Auth routes for login and registration
app.use("/api", dncRouter); // DNC routes for adding numbers to the dnc db

app.get("/api/test", (req, res) => {
  res.json({
    message: "Hello from the server!",
  });
});

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}


(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced successfully.");

    app.listen(PORT, () =>
      console.log(`Server is running on port http://localhost:${PORT}`),
    );
  } catch (error) {
    console.error(error);
  }
})();
