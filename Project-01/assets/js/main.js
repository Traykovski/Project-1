/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};



/**
 * Preloader
 */
let preloader = select("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

/**
 * Animation on scroll
 */
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

// filters

document
  .querySelector("#filter-program")
  .addEventListener("change", filterProgram);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);

// filters-hide cards
function filterProgram() {
  hideAllCards();

  if (document.querySelector("#filter-program").checked) {
    let programCards = document.querySelectorAll(".program");
    programCards.forEach((programCard) => {
      programCard.style.display = "inline-block";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    let designCards = document.querySelectorAll(".design");
    designCards.forEach((designCard) => {
      designCard.style.display = "inline-block";
    });

    document.querySelector("#filter-program").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    let marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "inline-block";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-program").checked = false;
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "inline-block";
  });
}

// hide and show <i> element

function showHtmlDiv() {
  let htmlShow = document.getElementById("html-show");
  if (htmlShow.style.display === "none") {
    htmlShow.style.display = "inline-block";
  } else {
    htmlShow.style.display = "none";
  }
}

// A function that hides or shows a selected element
function hideOrShow() {
  // Select the element with id "theDIV"
  let x = document.getElementById("html-show");

  // If selected element is hidden
  if (x.style.display === "none") {
    // Show the hidden element
    x.style.display = "inline-block";

    // Else if the selected element is shown
  } else {
    // Hide the element
    x.style.display = "none";
  }
}

function showHtmlDiv1() {
  let htmlShow = document.getElementById("html-show1");
  if (htmlShow.style.display === "none") {
    htmlShow.style.display = "inline-block";
  } else {
    htmlShow.style.display = "none";
  }
}

// A function that hides or shows a selected element
function hideOrShow() {
  // Select the element with id "theDIV"
  let x = document.getElementById("html-show1");

  // If selected element is hidden
  if (x.style.display === "none") {
    // Show the hidden element
    x.style.display = "inline-block";

    // Else if the selected element is shown
  } else {
    // Hide the element
    x.style.display = "none";
  }
}

// full page hamburger menu

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hamburger").addEventListener("click", function () {
    this.classList.toggle("hamburger--active");
    document
      .querySelector(".nav-fullscreen")
      .classList.toggle("nav-fullscreen--open");
  });
});

// load more button

// const loadmore = document.querySelector("#loadmore");
// let currentItems = 3;

// loadmore.addEventListener("click", (e) => {
//   const elementList = [...document.querySelectorAll(".list .list-element")];

//   for (let i = currentItems; i < currentItems + 3; i++) {
//     if (elementList[i]) {
//       elementList[i].style.display = "block";
//     }
//   }
//   currentItems += 3;

//   // Load more button will be hidden after list fully loaded
//   if (currentItems >= elementList.length) {
//     event.target.style.display = "none";
//   }
// });
