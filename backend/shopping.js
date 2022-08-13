// This file will contain the queries to the customer table
const database = require("./database");
const express = require("express");
const { request, response } = require("express");

// Allows us to define a mapping from the URI to a function
router = express.Router();

// can be used to define a GET API.   URI -> CB function.
router.get("/shopping/q1", (request, response) => {
  database.connection.all("select name from item where price = 0", (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});

router.get("/shopping/q2", (request, response) => {
  database.connection.all("SELECT DISTINCT c.name FROM customer c, shop_order s, item i WHERE c.id = s.customerID AND i.id = s.itemID AND i.price > 100", (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});




module.exports = {
  router,
};
