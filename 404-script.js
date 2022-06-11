time = 4;

window.setInterval(function () {
  document.getElementById("counter").innerHTML =
    "You will be redirected to the homepage in " + time + " seconds.";
  if (time > 0) {
    time -= 1;
  } else {
    document.location.href = "index.html";
  }
}, 1000);
