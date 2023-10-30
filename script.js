window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

let loginForm = document.getElementById("from-conatct");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let Name = document.getElementById("name");
  let email = document.getElementById("email");
  let FoundWhere = document.getElementById("message");

  if (Name.value == "" || email.value == "" || FoundWhere.value == "") {
    alert("Ensure you input a value in all fields!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a name of ${Name.value} and email of ${email.value}`
    );

    Name.value = "";
    email.value = "";
  }
});
