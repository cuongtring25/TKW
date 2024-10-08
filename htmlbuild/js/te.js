//get all dropdowns from the document
const dropdowns = document.querySelectorAll(".dropdown");

//loop through all dropdown
dropdowns.forEach((dropdown) => {
  //get inner element from each dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelector(".menu li");
  const selected = dropdown.querySelector(".selected");
  //create multiple dropdown menu on the page work
  //add a click event to the select element
  select.addEventListener("click", () => {
    //add the clicked select styles to the select element
    select.classList.toggle("select-clicked");
    //add the rotate style
    caret.classList.toggle("caret-rotate");
    //add the open style
    menu.classList.toggle("menu-open");
  });
  //loop through all option
  options.forEach((option) => {
    //add click event
    option.addEventListener("click", () => {
      //change select inner text to click option
      selected.innerText = option.innerText;
      //add the click select style
      select.classList.remove("select-clicked");

      //add rotate style caret
      caret.classList.remove("caret-rotate");
      //add open stle
      menu.classList.remove("menu-open");
      //remove active class
      options.forEach((option) => {
        option.classList.remove("active");
      });
      //add active class to clicked
      option.classList.add("active");
    });
  });
});