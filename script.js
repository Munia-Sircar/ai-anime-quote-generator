function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let inputAnime = document.querySelector("#anime-input");
  let apiKey = "28d0bff0ffaa52b09e33da6etode543b";
  let prompt = `Generate a quote from the anime called ${inputAnime.value}.`;
  let context =
    "You are an anime fan. Provide a quote from the anime that is requested in basic HTML. Do not mention 'basic HTML' or 'html', only show the quote and the person who said it.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteBox = document.querySelector("#quote");
  quoteBox.classList.add("show-quote");
  quoteBox.innerHTML = "Please wait a moment...⏳";

  axios.get(apiUrl).then(displayQuote);
}

let getQuote = document.querySelector("#get-quote");
getQuote.addEventListener("submit", generateQuote);
