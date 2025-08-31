function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings:
      "Knowing what it feels like to be in pain, is exactly why we try to kind to others. - Jiraiya, Naruto",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let getQuote = document.querySelector("#get-quote");
getQuote.addEventListener("submit", generateQuote);
