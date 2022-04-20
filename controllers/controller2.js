const Book = require("../models/book");

module.exports = {
    index: (req, res) => {
        Book.find({})
        .then(info=> {
            res.render("home", { books: info});
        })
        .catch(error => {
            console.log(`Error fetch books: ${error.message}`)
            res.redirect("/home");
        });
    },
    delpage: (req, res) => {
        Book.find({})
        .then(info=> {
            res.render("bookdelete", { books: info});
        })
        .catch(error => {
            console.log(`Error fetch books: ${error.message}`)
            res.redirect("/home");
        });
    },
    new: (req, res) => {
        res.render("bookadd");
    },
    create: (req, res, next) => {
        let bookParams = {
            name:req.body.name,
            author:req.body.author,
            link:req.body.link
        };
        Book.create(bookParams).then(info => {
            res.locals.redirect = "/home";
            res.locals.books = info;
            next();
        })
        .catch(error => {
            console.log(`Error saving books: ${error.message}`);
            next(error);
        });
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },
    delete: (req, res, next) => {
        let bookdelete= req.params.name;
        Book.findOneAndDelete({name:bookdelete})
        .then(() => {
            res.locals.redirect = "/home";
            next();
        })
        .catch(error => {
            console.log(`Error deleting book by Book Name: ${error.message}`);
            next();
        });
    }
}