import router from "#api/employees";
import express from "express";
const app = express();
export default app;

// TODO: done

//1body parsing
//2logging
//3reffer to routes
//4error handle

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Fullstack Employees API.")
});

app.use("/employees", router);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});