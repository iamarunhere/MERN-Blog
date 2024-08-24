import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json({ message: "API working" });
});

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
