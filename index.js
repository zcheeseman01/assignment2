const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const methodOverride = require("method-override");
const homeController = require("./controllers/homeController");
const controller2 = require("./controllers/controller2");
const express = require("express");
const app = express();
const router = express.Router();
app.set("view engine", "ejs");
app.use(express.static("public"))

app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))
app.use(methodOverride("_method", {methods: ["POST", "GET"]}));

require("dotenv").config();
const uri = process.env.ATLAS_URI;

app.set("port", process.env.PORT || 3000);

app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

app.get("/home", homeController.getHome);
app.get("/books/:book", homeController.getAllBooks);
app.get("/style", homeController.sendReqCss);

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.use("/", router);
router.get("/home", controller2.index);
router.get("/DeleteABook", controller2.delpage);
router.get("/AddNewBook", controller2.new);
router.post("/books/create", controller2.create, controller2.redirectView);
router.delete("/books/:name/delete", controller2.delete, controller2.redirectView);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});