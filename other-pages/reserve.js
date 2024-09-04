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


const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const phone = document.getElementById("phone");
const email = document.getElementById("mail");
const name = document.getElementById("name");
const people = document.getElementById("people");
const date = document.getElementById("date");
const time = document.getElementById("time");
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

function updateInputState() {
  if (r1.checked) {
    phone.disabled = false;
    email.disabled = true;
    email.value = "";
  } else if (r2.checked) {
    phone.disabled = true;
    phone.value = "";
    email.disabled = false;
  }
}

function validateAndShowAlert() {
  let valid = true;

  if (r1.checked) {
    if (!phone.value.trim()) {
      phone.style.cssText = "border: 2px solid red";
      valid = false;
    } else {
      phone.style.cssText = "border: none";
    }
  } else if (r2.checked) {
    if (!email.value.trim()) {
      email.style.cssText = "border: 2px solid red";
      valid = false;
    } else {
      email.style.cssText = "border: none";
    }
  }

  if (!name.value.trim()) {
    name.style.cssText = "border: 2px solid red";
    valid = false;
  } else {
    name.style.cssText = "border: none";
  }

  if (!people.value) {
    people.style.cssText = "border: 2px solid red";
    valid = false;
  } else {
    people.style.cssText = "border: none";
  }

  if (!date.value) {
    date.style.cssText = "border: 2px solid red";
    valid = false;
  } else {
    date.style.cssText = "border: none";
  }

  if (!time.value) {
    time.style.cssText = "border: 2px solid red";
    valid = false;
  } else {
    time.style.cssText = "border: none";
  }

  if (!msg.value.trim()) {
    msg.style.cssText = "border: 2px solid red";
    valid = false;
  } else {
    msg.style.cssText = "border: none";
  }

  if (valid) {
    document.getElementById("hide").style.visibility = "visible";
    document.getElementById("bname").innerHTML = "Name: " + name.value;
    document.getElementById("bpeople").innerHTML =
      "Number Of People: " + people.value;
    document.getElementById("bdate").innerHTML = "Date: " + date.value;
    document.getElementById("btime").innerHTML = "Time: " + time.value;
    document.getElementById("bmsg").innerHTML = "Special Request: " + msg.value;
    document.getElementById("bboth").innerHTML = r1.checked
      ? `Phone: ${phone.value}`
      : `Email: ${email.value}`;
  }
}

r1.addEventListener("change", updateInputState);
r2.addEventListener("change", updateInputState);

btn.addEventListener("click", validateAndShowAlert);
