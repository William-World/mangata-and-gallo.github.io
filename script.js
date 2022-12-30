const toggleButton = document.getElementsByClassName("toggle-button");
const navbarLinks = document.getElementsByClassName("navbar-links-2");

for (let i = 0; i < toggleButton.length; i++) {
  for (let j = 0; j < navbarLinks.length; j++) {
    toggleButton[i].addEventListener("click", () => {
      navbarLinks[j].classList.toggle("active");
    });
  }
}
