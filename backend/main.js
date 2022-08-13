const shopping = require("./shopping");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express();
app.use(cors());
app.use(bodyparser.json());

app.use(shopping.router);

let port = process.env.PORT 
if(port == null || port == '') {
    port = 8000
}
app.listen(port);
