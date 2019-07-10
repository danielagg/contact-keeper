const express = require("express");
const connectDb = require("./config/db");
const path = require("path");

const app = express();

connectDb();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT | 5000;

// Define routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => console.log(`The server has started on port ${PORT}`));
