var email = document.getElementById("email").value;
let form = document.querySelector("#form");
let password = document.querySelector("#password").value;
let submit = document.querySelector("#button");

// var inputValue = email1.value;

// function validateEmail(email) {
//   const re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

// function validatePassword(password) {
//   // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.
//   const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
//   return re.test(password);
// }

// document.getElementById("submit").addEventListener("click", function (event) {
//   event.preventDefault(); // Prevents the default action of submitting the form

//   if (!validateEmail(email)) {
//     alert("Please enter a valid email address.");
//   } else if (!validatePassword(password)) {
//     alert(
//       "Please enter a valid password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
//     );
//   } else {
//     // Validation successful
//     // Do something here, like submit the form via AJAX or redirect to another page
//   }
// });

document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();

  // Get form field values
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var email = "jesseugboh@gmail.com";

  if (email === "") {
    alert("it does not work");
  }

  if (!emailPattern.test(email)) {
    console.log("Valid email address");
    alert("valid address");
  } else {
    console.log("Invalid email address");
    alert("invalid address");
  }
});
