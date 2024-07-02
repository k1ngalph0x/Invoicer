import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import morgan from "morgan";
import chalk from "chalk";

const app = express();

if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "Welcome to the invoice app" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `${chalk.green.bold("Connected to the port successfully")} PORT ${PORT}`
  );
});
