let Express = require("express");

let app = Express();

app.get("/", (request, response) => {
    response.status(200).send("Get response for /");
});

app.get("/test", (request, response) => {
    response.status(500).send({ "message": "Get response for /test" });
});

let server = app.listen(3000, () => {
    console.log("Listening on port " + server.address().port + "...");
});

module.exports = server;