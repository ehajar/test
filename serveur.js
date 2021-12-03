const express = require("express");
const app = express();
const vmRouter = require("./routes/vmRouter");
const mongoose = require("mongoose");
const path = require("path");

app.use(express.json());
app.use(vmRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`serveur démarré sous le lien\n\thttp://localhost:${PORT}`);
});

app.use("/", express.static(path.join(__dirname, "code-front")));

app.get("", (req, resp) => {
  resp.sendFile(path.join(__dirname, "code-front", "index.html"));
});

