const router = require ("express").Router();


const CustomerAdmin = require("../controllers/customerAdminController");

router.get("/", CustomerAdmin.customerPage);
router.get("/create", CustomerAdmin.createCustomerPage);
router.post("/admin/create", CustomerAdmin.createCustomer);

module.exports = router;