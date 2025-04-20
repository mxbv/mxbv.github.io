const articlesContainer = document.querySelector(".articles-container");

// API-key
const apiKey = "r8aupp5cj1jskv2w2ykexvrqr7qelwqfv1313wzg";

// RSS download function
async function loadRSS(rssUrl) {
  if (!articlesContainer) return; // Проверка на наличие контейнера

  try {
    // FOR DEPLOYMENT--------------------
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&api_key=${apiKey}`
    );
    // FOR LOCAL WORK--------------------
    // const response = await fetch(
    //   `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
    //     rssUrl
    //   )}`
    // );
    // --------------------
    if (!response.ok) throw new Error("Failed to fetch RSS feed.");

    const { items } = await response.json();

    articlesContainer.innerHTML = items?.length
      ? items
          .map(
            ({ title = "No title", link = "#" }) =>
              `<a href="${link}" target="_blank" class="article">${title}</a>
              <div class="divider"></div>`
          )
          .join("")
      : "<p>No articles found in this RSS feed.</p>";
  } catch (error) {
    console.error("Error loading RSS:", error); // Error Logging
    articlesContainer.innerHTML = "<p>Failed to load articles. Please try again later.</p>";
  }
}

// Connecting events to buttons
document.addEventListener("DOMContentLoaded", () => {
  const rssButtons = document.querySelectorAll(".buttons .rss-button");
  if (rssButtons.length) {
    rssButtons.forEach((button) =>
      button.addEventListener("click", () => {
        // Clearing old articles when loading new ones
        articlesContainer.innerHTML = "<p>Loading articles...</p>";
        loadRSS(button.getAttribute("data-rss"));
      })
    );
  }
});

// Menu and menu interaction
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const overlay = document.querySelector(".overlay");

// Opening the menu
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  overlay.style.display = menu.classList.contains("open") ? "block" : "none";
});

// Closing the menu when clicking on the background
overlay.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.style.display = "none";
});
