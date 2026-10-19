"use strict";
const users = [
  {
    email: "alex@example.com",
    password: "recipe123",
    name: "Alex"
  },
  {
    email: "maya@example.com",
    password: "meal456",
    name: "Maya"
  },
  {
    email: "sam@example.com",
    password: "food789",
    name: "Sam"
  }
];

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
const dashboard = document.getElementById("dashboard");
const welcomeMessage = document.getElementById("welcome-message");
const logoutButton = document.getElementById("logout-button");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  const matchedUser = users.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (matchedUser) {
    errorMessage.textContent = "";
    welcomeMessage.textContent = "Welcome, " + matchedUser.name + "!";

    loginForm.hidden = true;
    dashboard.hidden = false;
  } else {
    errorMessage.textContent =
      "Incorrect email or password. Please try again.";

    passwordInput.value = "";
    passwordInput.focus();
  }
});

logoutButton.addEventListener("click", function () {
  dashboard.hidden = true;
  loginForm.hidden = false;

  loginForm.reset();
  errorMessage.textContent = "";
  emailInput.focus();
});
