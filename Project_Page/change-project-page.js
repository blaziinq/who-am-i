const desired_scroll_amount = window.innerWidth / 2 + 650;

function Start() {
  document.getElementById("scrollbar").scroll(desired_scroll_amount, 0);
}

// cross browser way to add an event listener
function addListener(event, obj, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(event, fn, false); // modern browsers
  } else {
    obj.attachEvent("on" + event, fn); // older versions of IE
  }
}

addListener("load", window, function () {
  Start(); // calls the start function when the page is loaded
});
