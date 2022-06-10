function header_large() {
  var header_section_text = `
  <a href="index.html" class="headerLink" style="float: left">Home</a>
  <a href="about.html" class="headerLink">About</a>
  <a href="learn.html" class="headerLink">Projects</a>
  `;

  document.getElementById("header").innerHTML = header_section_text;
}
function header_small() {
  var header_section_text = `
  <a href="index.html" class="headerLink" style="float: left">Home</a>
  <a href="learn.html" class="headerLink">Projects</a>
  <a href="about.html" class="headerLink">About</a>
  `;

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
  `;

  document.getElementById("footer").innerHTML = footer_section_text;
}

function resize_check() {
  width = window.innerWidth;
  if (width <= 550) {
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
};

//width = window.innerWidth;
//if (width <= 550) {
//  header_small();
//} else {
//  header_large();
//}
