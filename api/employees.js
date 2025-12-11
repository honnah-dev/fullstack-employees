import express from "express";
const router = express.Router();
export default router;

// TODO: this file!
import { getEmployees } from "#db/queries/employees";


router.get("/", async(req, res) => {
  const employees = await getEmployees();
  res.send(employees);

});



// Ari's code bellow
// import { getEmployees } from "#db/queries/employees";
// const employee = async() => {
//   const {rows: res} = await getEmployees();
//   console.log(res);

// }

// employee();