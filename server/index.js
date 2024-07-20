import express from "express";
import cors from "cors";
import fs from "fs";
const app = express();
const PORT = 4000;

app.use(cors());

//reading the data from json file
let data = fs.readFileSync("data.json", "utf-8");

const jsonData = JSON.parse(data);

app.get("/globe-data", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "data found!!",
    data: jsonData,
  });
});

app.listen(PORT, () => {
  console.log(`server is running at port:${PORT}`);
});
