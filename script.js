document.getElementById("btn").addEventListener("click", function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = document.getElementById("check");
  const email = document.getElementById("mail").value;
  if (email.match(emailRegex)) {
    check.style.display = "block";
    document.getElementById("error").style.cssText =
      "border: none; box-shadow: 0 0 0 black; border: 1px solid purple;";
  } else {
    check.style.display = "none";
    document.getElementById("error").style.cssText =
      "border: 3px solid red; box-shadow: 0 0 10px red";
  }
});
