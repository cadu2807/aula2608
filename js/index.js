import { loadShows, searchShows } from "./views/TVShowView.js";


const location = window.location;
const { origin } = location;
//localStorage.SetItem('origin', origin)

console.log(location)

const previousURL = document.referrer;
if (previousURL.startsWith(`${origin}/details.html`)){
    loadShows()
}


const form = document.querySelector("#form-area form");
form.onsubmit = (e) => {
  e.preventDefault();

  searchShows();
};


