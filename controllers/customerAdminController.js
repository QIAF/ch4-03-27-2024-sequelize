const {Customer} = require("../models");

const customerPage = async (req,res) => {
    try {
        const customers = await Customer.findAll()

        res.render("customers/index.ejs", {
            customers,
            message: req.flash("message",""),
        }); //ngerender halaman ejs dengan ngeprint juga data customersnya

    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs",{
            message: err.message,
        });
    }
};

// render halaman
const createCustomerPage = async (req, res) => {
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
        await Customer.create(req.body);
        req.flash("message", "Ditambah");
        res.redirect("/customers");
    } catch (err) {
        console.log (err.message);
    }

}

const editCustomerPage = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);

        res.render("customers/edit.ejs", {
            customer,
        }); //ngerender halaman ejs dengan ngeprint juga data customersnya

    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs",{
            message: err.message,
        });
    }
};

// updaete req body dimana id ngecocokin sama param id
const editCustomer = async (req, res) => {
    try {
        await Customer.update(req.body, {
            where: {
                id: req.params.id,
            },
        }); // seq tau mana yg diupdate berdasarkan dan yg diupdate dari frontend

        req.flash("message","Diedit")
        res.redirect ("/customers") // res direct ke halaman customer

    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs",{
            message: err.message,
        });
    }
};
const deleteCustomer = async (req, res) => {
    try {
        await Customer.destroy({
            where: {
                id: req.params.id,
            },
        }); // seq tau mana yg diupdate berdasarkan dan yg diupdate dari frontend

        res.redirect ("/customers") // res direct ke halaman customer

    } catch (err) { // render ejs kalo ada issue buat nangkep error
        res.render ("error.ejs", {
            message: err.message,
        });
    }
};

module.exports = {
    customerPage,
    createCustomerPage,
    createCustomer,
    editCustomerPage,
    editCustomer,
    deleteCustomer,

};