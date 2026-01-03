//create movie theater
const cinemas = {
<<<<<<< HEAD
    name: "Sri Srinivasa A/C",
    location: "VijayaWada",
    movies: [
        {
            title: "Sankranthiki Vastunam",
            seats: [13, 14],
            shows: ["9am", "6pm"],
            Image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sankranthiki-vasthunam-et00418119-1731656543.jpg"
        },
        {
            title: "Game Changer",
            seats: [11, 12],
            shows: ["11am", "9pm"],
            Image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/game-changer-et00407895-1723290122.jpg",
        },
        {
            title: "Identity",
            seats: [23, 34],
            shows: ["12pm", "4pm"],
            Image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-OTggTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00430239-schzjqdzsr-portrait.jpg",
        },
        {
            title: "Gandhi Tatha Chettu ",
            seats: [41, 42],
            shows: ["11am", "9pm"],
            Image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS44SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00428333-znjdencyhx-portrait.jpg",
        }
    ]
=======
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
>>>>>>> b885afd (make changes in code)
};
const showsList = document.getElementById("showsList");
const movieLists = cinemas.movies.map((movie) => {
  return `
<<<<<<< HEAD
    <div class="col-12 col-md-6 col-lg-3">
      <div class="card">
        <div class="card-body">
        <img src="${movie.Image}" class = "card-img-top" alt="${movie.title}">
=======
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card">
        <div class="card-body">
          <img src="${movie.Image}" alt="${movie.title}" class="img-fluid" />
>>>>>>> b885afd (make changes in code)
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

<<<<<<< HEAD
showsList.innerHTML = movieLists.join("");
=======

showsList.innerHTML = movieLists.join("");
>>>>>>> b885afd (make changes in code)
