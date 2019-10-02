window.onscroll = function() {
  windowScroll();
};

function windowScroll() {
  var element = document.getElementById("header");
  if (element.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    element.className = element.className.replace(/\bfixed\b/g, "sticky");
  } else {
    element.className = element.className.replace(/\bsticky\b/g, "fixed");
  }
}
