import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
app.use("/", routes);

export default app;
