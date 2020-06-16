const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const Functions = require('./Functions')

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false })), app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

// First Function :) 
app.get(`/`,  async(req, res) => {
  console.log(req.body)
  let data = await Functions.getCountryByName();
  await res.json(data);
});

// Second Function
app.get('/countries/',async (req,res)=>{
  let strArr = ['dubai', 'ger', 'land', 'den', 'france', 'egy', 'Belgium']
  let data = await Functions.getCommonCountries(strArr);
  await res.json({data:data,strArr:strArr})
})

//Third Function
app.get('/slotMachine',(req,res)=>{
  let data= Functions.slotMachine(20)
  res.json(data)
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


app.listen(PORT, () => {
  console.log(`Server is running on  port ${PORT} `);
});

