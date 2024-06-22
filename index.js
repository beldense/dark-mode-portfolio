window.onload = function () {
  const body = document.querySelector("body");
  const gradient = document.querySelector(".background-gradient");
  const logo = document.querySelector(".logo");
  const headline = document.querySelector("#headline");
  const textDay = document.querySelector(".dark-mode-day");
  const button = document.querySelector("#toggle-button");
  const textNight = document.querySelector(".dark-mode-night");
  const portrait = document.querySelector(".portrait");

  button.addEventListener("click", toggle);

  function toggle(event) {
    console.log("Dark Mode: " + event.target.checked);
    if (event.target.checked) {
      goDark();
    } else {
      goLight();
    }
  }
  // Lol
  //* My
  //! Lol
  //? Lol
  //TODO:

  function goDark() {
    body.style.color = "white";
    body.style.backgroundColor = "#28193d";
    body.style.backgroundImage =
      "linear-gradient(180deg, #10091d 0%, #28193d 100%)";
    gradient.setAttribute("src", "images/dark-bg.png");
    logo.setAttribute("src", "images/logo-light.png");
    headline.innerText = "Dark";
    textDay.style.color = "#ffffff4d";
    textNight.style.color = "white";
    portrait.style.filter = "grayscale(1) brightness(0.7)";
  }

  function goLight() {
    body.style.color = "#262626";
    body.style.backgroundColor = "#ffffff";
    body.style.backgroundImage =
      "linear-gradient(180deg, #e7f0f8 0%, #ffffff 100%)";
    gradient.setAttribute("src", "images/light-bg.png");
    logo.setAttribute("src", "images/logo-dark.png");
    headline.innerText = "Light";
    textDay.style.color = "#262626";
    textNight.style.color = "#2626268d";
    portrait.style.filter = "unset";
  }
};
