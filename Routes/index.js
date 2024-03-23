module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("Welcome to daily gram");
    });

    // User routes
    app.use("/user", require("./users"));

    // Account type route
    app.use("/account_type", require("./account_types"));

    // Notification route
    app.use("/notification", require("./notifications"));

    // post likes route
    app.use("/post_likes", require("./post_likes"));

    // email subscriber route
    app.use("/email_subscriber", require("./email_subscribers"));
};
