const express = require("express");

const app = express();

const PORT = process.env.PORT | 5000;

app.get("/", (req, res) => res.send("Hello from server"));

app.listen(PORT, () => console.log(`The server has started on port ${PORT}`));
