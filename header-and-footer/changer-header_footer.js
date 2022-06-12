welcome_text = "Welcome to my website!";

function header_large() {
  if (window.location.pathname == "/index.html") {
    var header_section_text =
      `
    <div style="overflow: hidden">
    <h1 id="first-title">` +
      welcome_text +
      `</h1>
    </div>
    <div id="navbar">
      <a href="index.html" class="headerLink" style="float: left">Home</a>
      <a href="about.html" class="headerLink">About</a>
      <a href="projects.html" class="headerLink">Projects</a>
    </div>`;
  } else {
    var header_section_text = `
    <div id="navbar">
      <a href="index.html" class="headerLink" style="float: left">Home</a>
      <a href="about.html" class="headerLink">About</a>
      <a href="projects.html" class="headerLink">Projects</a>
    </div>`;
  }

  document.getElementById("header").innerHTML = header_section_text;
}
function header_small() {
  if (window.location.pathname == "/index.html") {
    var header_section_text =
      `
    <div style="overflow: hidden">
    <h1 id="first-title">` +
      welcome_text +
      `</h1>
    </div>
    <div id="navbar">
      <a href="index.html" class="headerLink" style="float: left">Home</a>
      <a href="projects.html" class="headerLink">Projects</a>
      <a href="about.html" class="headerLink">About</a>
    </div>
  `;
  } else {
    var header_section_text = `
      <div id="navbar">
        <a href="index.html" class="headerLink" style="float: left">Home</a>
        <a href="projects.html" class="headerLink">Projects</a>
        <a href="about.html" class="headerLink">About</a>
      </div>
`;
  }

  document.getElementById("header").innerHTML = header_section_text;
}

function footer() {
  var footer_section_text = `
  This website, as you might have guessed from the url, is hosted using github
  pages. <br />
  It was also created in its entirety by me, blaziinq; you can see my socials below.
  <div>
    <a
      href="https://www.youtube.com/channel/UCW3HXaz5-JIYztVTASZ348A"
      style="color: red"
      target="_blank"
      >My Youtube Channel</a
    >
  </div>
  <div>
    <a
      href="https://twitter.com/blaziinqMC"
      style="color: lightblue"
      target="_blank"
      >My Twitter</a
    >
  </div>
  <br />
  <strong>The fonts that were used in this website are:</strong>
  <ul>
    <li><a href="https://fonts.google.com/specimen/Poppins" target="_blank" rel="noopener noreferrer" class="normal-link">Poppins</a></li>
    <li><a href="https://fonts.google.com/specimen/Ubuntu" target="_blank" rel="noopener noreferrer" class="normal-link">Ubuntu</a></li>
  </ul>
  `;

  document.getElementById("footer").innerHTML = footer_section_text;
}

function resize_check() {
  width = window.innerWidth;
  // the difference between the two of the below is simply the order in which the elemets come in.
  if (width <= 560) {
    header_small();
  } else {
    header_large();
  }
}
window.addEventListener("resize", function () {
  resize_check();
});

window.onload = function Start() {
  resize_check();
  footer();
  if (window.location.pathname == "" || window.location.pathname == "/") {
    document.location.href = "index.html";
  }
};
