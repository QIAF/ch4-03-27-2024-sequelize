const {Customer} = require("../models");

const customerPage = async (req,res) => {
    try {
        const customers = await Customer.findAll()

        res.render("customers/index.ejs", {
            customers,
        }); //ngerender halaman ejs dengan ngeprint juga data customersnya

    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs",{
            message: err.message,
        });
    }
};

// render halaman
const createCustomerPage = async (req,res) => {
    try {
        res.render("customers/create.ejs")
    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs",{
            message: err.message,
        });
    }
};
// proses masukin data ke database
const createCustomer = async (req, res) => {
    try {
        await Customer.create(req.body)
        res.redirect("/customers")
        
    } catch (err) {
        console.log (err.message);
        
    }

}


module.exports = {
    customerPage,
    createCustomerPage,
    createCustomer,

};