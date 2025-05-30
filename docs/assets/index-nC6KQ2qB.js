(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
  <div>
    <nav>
      <ul>
        <li>
          <a href="#home"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10.25V20C3 20.5523 3.44772 21 4 21H8.5C9.05228 21 9.5 20.5523 9.5 20V15.5C9.5 14.1193 10.6193 13 12 13C13.3807 13 14.5 14.1193 14.5 15.5V20C14.5 20.5523 14.9477 21 15.5 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#projects"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14.3607 9.26543H22L15.8197 13.7557L18.1803 21.0211L12 16.5309L5.81966 21.0211L8.18034 13.7557L2 9.26543H9.63932L12 2Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="#contacts"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    <section id="home">
      <div class="container">
        <h1>
          Hi, I'm <span>Max Baranov</span> <br />
          A <span>frontend developer</span> from Ukraine. <br />
        </h1>
        <h2>I design simple tools for a complex world.</h2>
        <p class="about-me">
          <span>A little about me</span>
          I like staying active, reading, and exploring philosophy. Coding is
          where I dive deep — always learning, always building. I believe in
          keeping balance: physical, mental, and creative. <br /><br />
          Want to know more?
          <a href="./Max_Baranov_CV_2025.pdf"
            >Download my CV
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V17M12 17L6 11M12 17L18 11M3 21H21"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </p>
      </div>
    </section>
    <section id="projects">
      <div class="container">
        <h4>Selected projects</h4>
        <div class="projects">
          <div class="projects-container">
            <div class="project">
              <img src="../projects-img/simpl.webp" alt="Simpl" loading="lazy" />
              <h5>Simpl</h5>
              <p>
                A lightweight notes app focused on minimalism and speed. All
                data stays local — no cloud, no clutter.
              </p>
              <div class="skill">
                <span>Vue.js</span> / <span>IndexedDB</span>
              </div>
              <div class="project-links">
                <a href="/simpl/" class="live">Live</a
                ><a href="https://github.com/mxbv/Simpl-web" class="code">Code</a>
              </div>
            </div>
            <div class="project" style="margin-top: 10px">
              <img src="../projects-img/stream.webp" alt="Stream" loading="lazy" />
              <h5>Stream</h5>
              <p>
                A personal feed of news and articles I check from time to time.
                Clean interface. Simple layout. Just links that matter.
              </p>
              <div class="skill">
                <span>JavaScript</span> / <span>API</span>
              </div>
              <div class="project-links">
                <a href="/stream/" class="live">Live</a
                ><a href="https://github.com/mxbv/Stream" class="code">Code</a>
              </div>
            </div>
          </div>
          <div class="projects-container">
            <div class="project offset">
              <img src="../projects-img/moviex.webp" alt="MovieX" loading="lazy" />
              <h5>MovieX</h5>
              <p>
                Discover trending movies with a clean, focused UI. Powered by a
                movie API and built with Vue.
              </p>
              <div class="skill"><span>Vue.js</span> / <span>API</span></div>
              <div class="project-links">
                <a href="/moviex/" class="live">Live</a
                ><a href="https://github.com/mxbv/MovieX" class="code">Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contacts">
      <div class="container">
        <div class="contacts">
          Let’s stay in touch
          <div class="contacts-links">
            <a href="https://github.com/mxbv/">Github</a>
            or
            <a href="mailto:bv.maks@icloud.com">Email me</a>
          </div>
        </div>
      </div>
    </section>
  </div>
`;const l=document.querySelectorAll("section"),c=document.querySelectorAll("nav a");function r(){let o="";l.forEach(t=>{const a=t.offsetTop;t.offsetHeight;const s=t.getAttribute("id");window.scrollY+window.innerHeight/2>=a&&(o=s)}),c.forEach(t=>{t.classList.remove("active"),t.getAttribute("href").includes(o)&&t.classList.add("active")})}window.addEventListener("scroll",r);window.addEventListener("load",r);
