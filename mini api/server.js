const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello from server!");
});

app.post("/api/user/update/:id", (req, res) => {
    // fake api , using settimeout because not using any DB
    setTimeout(() => {
        res.send(req.body);
    }, 2000);
});

app.listen(5000, () => {
    console.log("listening on port 5000!");
})