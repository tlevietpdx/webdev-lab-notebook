const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response was unsuccessful.");
      }
      // hide gif when loaded
      const loadingGif = document.querySelector("img");
      if (loadingGif) {
        loadingGif.style.display = "none";
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((item) => {
        const book = document.createElement("div");
        book.classList.add("book");

        const title = document.createElement("h2");
        title.textContent = item.name;
        book.appendChild(title);

        const author = document.createElement("p");
        author.textContent = `By: ${item.authors.join(", ")}`;
        book.appendChild(author);

        const pubYear = document.createElement("p");
        const pubDate = new Date(item.released);
        pubYear.textContent = `${pubDate.getFullYear()}`;
        book.appendChild(pubYear);

        const noPages = document.createElement("p");
        noPages.textContent = `${item.numberOfPages} pages`;
        book.appendChild(noPages);

        app.appendChild(book);
      });
    })
    .catch((error) => {
      console.error("API error:", error);
    });
};

fetchData(url);
