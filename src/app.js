import "./app.css";
document.querySelector("#app").innerHTML = `
  <div>
    
  </div>
`;
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function updateActiveLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (window.scrollY + window.innerHeight / 2 >= sectionTop) {
      current = sectionId;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);
const words = ["Frontend developer", "Book reader", "Philosophy diver"];
const typingEl = document.getElementById("typing");
let wordIndex = 0;
let charIndex = 0;

function typeWord() {
  const currentWord = words[wordIndex];
  typingEl.textContent = currentWord.slice(0, charIndex + 1);
  charIndex++;

  if (charIndex < currentWord.length) {
    setTimeout(typeWord, 120);
  } else {
    // Пауза после полного слова
    setTimeout(() => {
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      typeWord();
    }, 1000);
  }
}

typeWord();
