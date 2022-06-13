var Books = [
  {
    author: "Bill",
    title: "The Road Ahead",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
  },
  {
    author: "Steve",
    title: "Walter Isaacson",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
  },
  {
    author: "John",
    title: "The Hunger Games",
    haveRead: false,
    dateOfRead: NaN,
  },
];

function readingStatus(books) {
  let i = 0;
  while (i < books.length) {
    let today = new Date();
    if (books[i].haveRead) {
      let date = today.getDate() - books[i].dateOfRead.getDate();
      console.log(
        `${books[i].author} have read ${books[i].title} ${date} days ago`
      );
    } else {
      console.log(`${books[i].author} haven't read ${books[i].title} yet`);
    }
    i++;
  }
}

readingStatus(Books);
