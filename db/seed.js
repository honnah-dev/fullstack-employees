import db from "#db/client";

//honnah, rihgt below here you import the function createEmployee
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {

  const employees = [
  { name: 'Hannah Avery', birthday: new Date('1991-04-12'), salary: 62000 },
  { name: 'Marcus Bell', birthday: new Date('1987-11-23'), salary: 75000 },
  { name: 'Sofia Delgado', birthday: new Date('1995-02-18'), salary: 54000 },
  { name: 'Jonathan Reid', birthday: new Date('1983-08-30'), salary: 89000 },
  { name: 'Priya Raman', birthday: new Date('1990-06-05'), salary: 67000 },
  { name: 'Elias Thompson', birthday: new Date('1998-12-14'), salary: 51000 },
  { name: 'Lena Morrison', birthday: new Date('1993-03-21'), salary: 58000 },
  { name: 'Caleb Winters', birthday: new Date('1989-09-14'), salary: 72000 },
  { name: 'Mina Okafor', birthday: new Date('1996-07-08'), salary: 56000 },
  { name: 'Rowan Prescott', birthday: new Date('1984-12-02'), salary: 81000 }
];
  for (const employee of employees) {
    await createEmployee(employee);
  }
console.log("Database seeded successfully");

}

  // TODO

