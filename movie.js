//create movie theater
const cinemas = {
  name: "Sri Srinivasa A/C",
  location: "VijayaWada",
  movies: [
    {
      title: "Sankranthiki Vastunam",
      seats: [13, 14],
      shows: ["9am", "6pm"],
      Image: "movie1.jpg",
    },
    {
      title: "Game Changer",
      seats: [11, 12],
      shows: ["11am", "9pm"],
      Image: "movie2.jpg",
    },
    {
      title: "Identity",
      seats: [23, 34],
      shows: ["12pm", "4pm"],
      Image: "movie3.jpg",
    },
    {
      title: "Gandhi Tatha Chettu ",
      seats: [41, 42],
      shows: ["11am", "9pm"],
      Image: "movie4.jpg",


    }
  ]
};
const showsList = document.getElementById("showsList");
const movieLists = cinemas.movies.map((movie) => {
  return `
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card">
        <div class="card-body">
          <img src="${movie.Image}" alt="${movie.title}" class="img-fluid" />
          <h3>${movie.title}</h3>
          <div class="showslist">
            ${movie.shows.map((time, index) => {
    return `
                <button class="btn btn-primary m-2">
                  ${time} (${movie.seats[index]} seats)
                </button>
              `;
  }).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
});


showsList.innerHTML = movieLists.join("");
