var express = require("express");
var router = express.Router();
var customer = require("./customer");
var bodyparser = require("body-parser");

router.use(bodyparser.json());

router.get("/customerdetails", async (req, res) => {
  const result = await customer.find();
  res.send(result);
});
router.get("/findbyfirstname", async (req, res) => {
  const firstnamequery = req.query.customerfirstname;
  customer.find(
    { customerfirstname: firstnamequery },
    async (err, response) => {
      if (err) res.send(err);
      else res.send(response);
    }
  );
});

router.get("/findbyid", async (req, res) => {
  const idQuery = req.query.id;
  customer.findById(idQuery, async (err, response) => {
    if (err) res.send(err);
    else res.send(response);
  });
});

router.put("/update/:id", async (req, res) => {
  const idQuery = req.params.id;
  const query = req.body;
  console.log(query);
  customer.findByIdAndUpdate(idQuery, query, async (err, response) => {
    if (err) res.send(err);
    else res.send(response);
  });
});

router.delete("/delete", async (req, res) => {
  const idQuery = req.query.id;

  customer.findByIdAndDelete(idQuery, async (err, response) => {
    if (err) res.send(err);
    else res.send(response);
  });
});

router.post("/customer", async (req, res) => {
  try {
    console.log("req.body", req.body);

    var newcustomer = new customer({
      customerfirstname: req.body.customerfirstname,
      customerlastame: req.body.customerlastame,
      customerAddress: {
        customerCity: req.body.customerCity,
        country: req.body.country,
      },
    });
  } catch (err) {
    console.log("error", err);
  }
  await customer.create(newcustomer);

  res.send("Customer Added");
});

router.get("/user_details/:id", async (req, res) => {
  const idQuery = req.params.id;
  customer.findById(idQuery, async (err, response) => {
    if (err) res.send(err);
    else res.send(response);
  });
});

module.exports = router;
