const vmRouter = require("./routes/VMRouter");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

mongoose.connect(
  "mongodb+srv://ehajar:ehajar@cluster0.wmtk1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.use(express.json());
app.use(cors("*"));
app.use(vmRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running @http://localhost:${PORT}`);
});

app.use("/", express.static(path.join(__dirname, "angular")));

app.get("", (req, resp) => {
  resp.sendFile(path.join(__dirname, "angular", "index.html"));
});
