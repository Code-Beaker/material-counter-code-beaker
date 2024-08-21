import lightMode from "./assets/icons/light_mode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import darkMode from "./assets/icons/dark_mode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

let count = 0;

const value = document.getElementById("count");
const buttons = document.querySelectorAll(".btn");
const square = document.getElementById("square");
const squareRoot = document.getElementById("squareRoot");
const container = document.querySelector(".container");

buttons.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    const sq = Math.pow(count, 2);
    const root = Math.sqrt(count);
    square.textContent = sq;
    squareRoot.textContent = root;

    if (count < 0) {
      value.style.color = "#EB5C68";
      squareRoot.style.display = "none";
      document.getElementById("error").style.display = "block";
    } else if (count > 0) {
      value.style.color = "#1D7486";
      squareRoot.style.display = "block";
      document.getElementById("error").style.display = "none";
    } else {
      if (container.classList.contains("body-dark")) {
        value.style.color = "white";
      } else {
        value.style.color = "currentColor";
      }
      document.getElementById("error").style.display = "none";
    }

    value.textContent = count;
  });
});

// Toggle between light and dark theme
const themeToggle = document.querySelector(".toggle-theme");
const themeToggleIcon = document.querySelector(".toggle-theme__icon");
let lightThemeEnabled = true;

themeToggle.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("body-dark");

  if (lightThemeEnabled) {
    themeToggleIcon.setAttribute("src", lightMode);
    lightThemeEnabled = false;
  } else {
    themeToggleIcon.setAttribute("src", darkMode);
    lightThemeEnabled = true;
  }
});
