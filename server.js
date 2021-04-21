const express = require("express");
const { now } = require("mongoose");
const articleRouter = require("./routes/articles");

const app = express();

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", function(req, res) {
const articles = [{
    title: "Test Article",
    createdAt: new Date(),
    description: "Test description"
}]

    res.render("articles/index", { articles: articles});
});

app.listen(5000);