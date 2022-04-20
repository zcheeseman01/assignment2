const mongoose = require("mongoose");
  const booksSchema = mongoose.Schema({
    name: {type: String, unique: true},
    author: String,
    link: String,
    id: Number,
  });
  const Books = mongoose.model("Books", booksSchema);
  module.exports = Books;
  
  Books.create(
      {
          name: "Divergent",
          author: "Veronica Roth",
          link: "https://www.amazon.ca/Divergent-Collectors-Collectors-Book-ebook/dp/B00I2PH5V2/ref=sr_1_5?crid=EDCFMPPTYN7R&keywords=divergent+book&qid=1650428436&sprefix=divergent+book%2Caps%2C39&sr=8-5",
          id:"1"
      },
      {
          name: "Insurgent",
          author: "Veronica Roth",
          link: "https://www.amazon.ca/Divergent-Insurgent-Veronica-Roth/dp/0062024043/ref=sr_1_8?crid=EDCFMPPTYN7R&keywords=divergent+book&qid=1650428436&sprefix=divergent+book%2Caps%2C39&sr=8-8",
          id:"2"
      },
      {
          name: "Allegiant",
          author: "Veronica Roth",
          link: "https://www.amazon.ca/Allegiant-Veronica-Roth/dp/0062024078/ref=sr_1_6?crid=EDCFMPPTYN7R&keywords=divergent+book&qid=1650428436&sprefix=divergent+book%2Caps%2C39&sr=8-6",
          id:"3"
      },
      function (error, savedDocument) {
          if (error) console.log(error);
          //console.log(savedDocument);
      }
  ); 