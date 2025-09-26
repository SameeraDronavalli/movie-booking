//create movie theater
const cinemas = {
    name: "Sri Srinivasa A/C",
    location: "VijayaWada",
    movies: [
        {
            title: "Sankranthiki Vastunam",
            seats: [13, 14],
            shows: ["9am", "6pm"],
            Image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNjQuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00418119-urxwxzudkv-portrait.jpg",
        },
        {
            title: "Game Changer",
            seats: [11, 12],
            shows: ["11am", "9pm"],
            Image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICA4OEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311772-dyqxbymvgu-portrait.jpg",
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
};


const showsList = document.getElementById("showsList");
const movieLists = cinemas.movies.map((movie) => {
  return `
    <div class="col-12 col-md-6 col-lg-3">
      <div class="card">
        <div class="card-body">
        <img src="${movie.Image}" class = "card-img-top" alt="${movie.title}">
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
