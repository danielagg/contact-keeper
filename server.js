const express = require("express");
const connectDb = require("./config/db");

const app = express();

connectDb();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT | 5000;

// Define routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));

app.get("/", (req, res) => res.json({}));

app.listen(PORT, () => console.log(`The server has started on port ${PORT}`));
