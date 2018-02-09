const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const bins_controller = require("./controller/bins_controller");
const app = express();
require("dotenv").config();

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.use(bodyParser.json());
app.use(cors());

//app.put,app.get,app.put,app.delete

app.get(`/api/test`, bins_controller.test);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server listening on port ${port} `));
