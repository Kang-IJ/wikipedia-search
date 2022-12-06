const searchTermElem = document.querySelector("#searchTerm");

const searchResultElem = document.querySelector("#searchResult");

searchTermElem.focus();

searchTermElem.addEventListener("input", function (event) {
  console.log(event.target.value);
});
