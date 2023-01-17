const express = require("express");
const { execQuery } = require("../db/connection");
const router = express.Router();

router.get("/", async (req, res) => {
  const getCabsQuery = `
    SELECT * from Cabs
    `;
  const dbRes = await execQuery(getCabsQuery);
  res.render("cab", {
    cabs: dbRes,
  });
});

router.get("/book", (req, res) => {
  res.render("booking");
});

router.post("/book", async (req, res) => {
  const cab_id = req.body.cab_id;
  const cust_name = req.body.cust_name;
  const pickup_location = req.body.pickup_location;
  const dropoff_location = req.body.dropoff_location;
  const sql = `INSERT INTO customer_order (cust_id, cab_id , pickUp, dropOff) VALUES (${cust_name}, '${cab_id}', '${pickup_location}', '${dropoff_location}') `;

  await execQuery(sql);

  res.send("SUCCESSFULL");
});

router.delete("cancel/:cabId", async (req, res) => {
  const cabId = req.params.cabId;
  const sql = `DELETE FROM customer_order WHERE cab_id = ${cabId}`;
  const dbRes = await execQuery(sql);
  res.send("SUCCESSFULL");
});

router.post("/add-cab", async (req, res) => {
  const driver_id = req.body.driver_id;
  const license_plate = req.body.license_plate;
  const model = req.body.model;
  const route_id = req.body.route_id;

  const sql = `INSERT INTO Cabs (id,driver_id, license_plate, model, route_id) VALUES (${Math.floor(
    Math.random() * 166646435
  )}, ${driver_id}, '${license_plate}', '${model}', ${route_id})`;
  console.log(sql);
  const dbRes = await execQuery(sql);
  // use sql to insert the data

  // Once the data is inserted, you can redirect the user to the cab page or render the same page with new data
  res.redirect("/cars");
});

router.get("/delete-cab/:id", async (req, res) => {
  const cabId = req.params.id;
  const sql = `DELETE FROM Cabs WHERE id = ${cabId}`;
  const dbRes = await execQuery(sql);
  // use sql to delete the data
  // Once the data is deleted, you can redirect the user to the cab page or render the same page with new data
  res.redirect("/cars");
});

/// AFTER 847

router.get("/route", (req, res) => {
  res.render("route");
});

router.get("/delete-route/:id", async (req, res) => {
  const routeId = req.params.id;
  const sql = `DELETE FROM cab_routes WHERE route_id = ${routeId}`;
  const dbRes = await execQuery(sql);
  // use sql to delete the data
  // Once the data is deleted, you can redirect the user to the route page or render the same page with new data
  res.redirect("/route");
});

router.get("/orderInfo", async (req, res) => {
  // Use an SQL SELECT statement to fetch the order data from the database
  const routeId = req.params.id;
  const sql = `SELECT * FROM order_Info`;
  // Execute the SQL query and handle the result
  // using db.query(...) or any other method you are using to connect to the database
  const dbRes = await execQuery(sql);
  res.redirect("/route");
});

router.get("/driver-detail", async (req, res) => {
  const routeId = req.params.id;
  // Use an SQL SELECT statement to fetch the driver data from the database
  const sql = `SELECT * FROM driver_detail`;
  // Execute the SQL query and handle the result
  // using db.query(...) or any other method you are using to connect to the database
  const dbRes = await execQuery(sql);
  res.redirect("/route");
});

module.exports = router;
