import express  from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.route.js";
import { connectDB } from "./config/db.js";


dotenv.config();

const app = express();
const PORT = 3000;
app.use(express.json());

//app.get("/", (req, res) => {
  //res.send("Server is running");
//});

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});