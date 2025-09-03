/*
const leftArrows = document.querySelectorAll(".arrow-left");
const rightArrows = document.querySelectorAll(".arrow-right");
const movieLists = document.querySelectorAll(".movie-list");

const clickCounters = new Array(movieLists.length).fill(0);

rightArrows.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    clickCounters[i]++;
    movieLists[i].style.transform = `translateX(${-300 * clickCounters[i]}px)`;
  });
});

leftArrows.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    if (clickCounters[i] > 0) {
      clickCounters[i]--;
      movieLists[i].style.transform = `translateX(${
        -300 * clickCounters[i]
      }px)`;
    }
  });
}); */
/*
const leftArrows = document.querySelectorAll(".arrow-left");
const rightArrows = document.querySelectorAll(".arrow-right");
const movieLists = document.querySelectorAll(".movie-list");

rightArrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll(".movie-item").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const listWidth = movieLists[i].querySelector(".movie-item").offsetWidth;
    if (itemNumber - (4 + clickCounter) >= 0) {
      clickCounter++;
      movieLists[i].style.transform = `translateX(${
        -listWidth * clickCounter
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

leftArrows.forEach((arrow, i) => {
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const listWidth = movieLists[i].querySelector(".movie-item").offsetWidth;
    if (clickCounter > 0) {
      clickCounter--;
      movieLists[i].style.transform = `translateX(${
        -listWidth * clickCounter
      }px)`;
    }
  });
}); */
const leftArrows = document.querySelectorAll(".arrow-left");
const rightArrows = document.querySelectorAll(".arrow-right");
const movieLists = document.querySelectorAll(".movie-list");

// Her bir film listesi için bir sayaç tutmak üzere dizi oluştur
const clickCounters = new Array(movieLists.length).fill(0);

rightArrows.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    // Film öğesinin genişliğini ve aradaki boşluğu dikkate alalım
    const movieItemWidth = 270; // CSS'deki film genişliği
    const gap = 30; // CSS'deki column-gap
    const moveAmount = movieItemWidth + gap;

    const listLength = movieLists[i].querySelectorAll(".movie-item").length;
    const itemsVisible = 4; // Ekran boyutuna göre görünen film sayısı
    const maxClicks = listLength - itemsVisible;

    if (clickCounters[i] < maxClicks) {
      clickCounters[i]++;
      movieLists[i].style.transform = `translateX(${
        -moveAmount * clickCounters[i]
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      /*aşağıdaki kod sayacı sıfırlar*/
      clickCounters[i] = 0;
    }
  });
});

leftArrows.forEach((arrow, i) => {
  arrow.addEventListener("click", () => {
    const movieItemWidth = 270;
    const gap = 30;
    const moveAmount = movieItemWidth + gap;

    if (clickCounters[i] > 0) {
      clickCounters[i]--;
      /*aşağıdaki kod listeyigeriye doğru kaydırıp en baş hale döndürür*/
      movieLists[i].style.transform = `translateX(${
        -moveAmount * clickCounters[i]
      }px)`;
    }
  });
});
/* siyah od */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i, .toggle, .toggle-ball, .movie-list-filter select, .movie-list-title"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
