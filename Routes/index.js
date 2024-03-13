module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("Welcome to daily gram");
    });

    // User routes
    app.use("/user", require("./users"));

    // Account type route
    app.use("/account_type", require("./account_types"));
};
