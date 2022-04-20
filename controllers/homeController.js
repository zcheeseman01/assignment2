const Book = require("../models/book");

exports.getHome = (req, res) => {
    Book.find({}, (error, info) => {
        if (info) res.render("home", { books: info });
    });
};

exports.getAllBooks = (req, res) => {
    let bookNum = req.params.book;
    Book.find({}, (error, info) => {
        console.log(info);
        if (info) res.render(bookNum, { books: info[bookNum-1] });
    });
};

exports.sendReqCss = (req, res) => {
    res.sendFile(`./public/css/lab10.css`, {root: "./"})
};