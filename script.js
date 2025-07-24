function toggle() {
  const toggleIcon = document.querySelector(".toggle-icon");
  if (toggleIcon.classList.contains("toggle-on")) {
    toggleIcon.classList.remove("fa-toggle-on");
    toggleIcon.classList.add("fa-toggle-off");
    toggleIcon.classList.remove("toggle-on");
    toggleIcon.classList.add("toggle-off");
  } else {
    toggleIcon.classList.remove("fa-toggle-off");
    toggleIcon.classList.add("fa-toggle-on");
    toggleIcon.classList.remove("toggle-off");
    toggleIcon.classList.add("toggle-on");
  }
  console.log("Toggle clicked");
}
