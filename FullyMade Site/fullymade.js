const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const menuItems = document.querySelectorAll(".menu-list-item");
const menuIcons = document.querySelectorAll(".left-menu-icon");

// Add a click event listener to each menu icon
menuIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // Remove "active" class from all menu icons
    menuIcons.forEach((el) => el.classList.remove("active"));

    // Add "active" class to the clicked icon
    icon.classList.add("active");
  });
});


// Add a click event listener to each menu item
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove "active" class from all menu items
    menuItems.forEach((el) => el.classList.remove("active"));

    // Add "active" class to the clicked item
    item.classList.add("active");
  });
});


arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});