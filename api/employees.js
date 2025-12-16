import express from "express";
const router = express.Router();
export default router;

// TODO: this file!
import { getEmployees, createEmployee, getEmployee, updateEmployee, deleteEmployee } from "#db/queries/employees";


router.get("/", async(req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

router.post("/", async (req,res) => {
  //createEmployee

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send("Request must have a body.")};
  
  const { name, birthday, salary } = req.body;
  if (!name || !birthday || !salary) {
    return res.status(404).send("Request cannot have a missing field.");
  }

  const employee = await createEmployee({name, birthday, salary});
  return res.status(201).send(employee);
});

router.param("id", async (req, res, next, id) => {
  // Use regex to check if the ID is a positive integer
  if (!/^\d+$/.test(id))
    return res.status(400).send("ID must be a positive integer.");
  


  const employee = await getEmployee(id);
  if (!employee) return res.status (404).send("Employee not found.");

// We can attach the employee to the request object, which subsequent middleware can access
req.employee = employee;
  next();
});


router.get("/:id", async (req, res) => {
  res.send(req.employee); 
});

router.delete("/:id", async (req, res) =>{
  await deleteEmployee(req.employee.id);
  res.sendStatus(204);
});

router.put("/:id", async (req, res) => {
  if (!req.body) return res.status(400).send("Request must have a body.");
  const { name, birthday, salary } = req.body;
  if ( !name || ! birthday || ! salary) return res.status(400).send("Request body must have name, birthday, and salary.");

  const employee = await updateEmployee({
    id: req.employee.id,
    name,
    birthday,
    salary
  });
  res.send(employee);

})

// Ari's code bellow
// import { getEmployees } from "#db/queries/employees";
// const employee = async() => {
//   const {rows: res} = await getEmployees();
//   console.log(res);

// }

// employee();