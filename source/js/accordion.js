/*-- Question form + popup order consultation -- */
var questionButtons = document.querySelectorAll(".form__question-button");
var questionActive = document.querySelector(".form__question--active");

questionButtons.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    var questionContent = item.nextSibling.nextSibling;
    console.log(item);
    if (item.classList.contains("form__question-button--active")) {
      item.classList.remove("form__question-button--active");
      item.querySelector(".form__question-svg").style.transform = "none";
      console.log(questionContent);
      questionContent.classList.remove("form__question-content--open");
    } else {
      item.classList.add("form__question-button--active");
      item.querySelector(".form__question-svg").style.transform = "rotate(45deg)";
      questionContent.classList.add("form__question-content--open");
    }
  })
});
