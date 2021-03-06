const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");

const app = express();

mongoose.connect("mongodb://localhost:27017/markdown_blog", { useNewUrlParser: true, useUnifiedTopology: true });

app.set("view engine", "ejs");

app.use("/articles", articleRouter);
app.use(express.urlencoded({ extended: false}));

app.get("/", function(req, res) {
const articles = [{
    title: "Test Article",
    createdAt: new Date(),
    description: "Test description"
}]

    res.render("articles/index", { articles: articles});
});

app.listen(5000);