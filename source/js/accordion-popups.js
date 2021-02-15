/*-- Question form -- */
var questionButtons = document.querySelectorAll(".form__question-button");
var questionActive = document.querySelector(".form__question--active");

questionButtons.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    var questionContent = item.nextSibling.nextSibling;
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

/*-- popup--offer -- popup--callback -- popup--coonsultation -- */
var overlays = document.querySelectorAll(".overlay"); // находит все оверлеи
var buttons = document.querySelectorAll(".button"); // находит все кнопки вызывающие попапы, отправляющие форму
var htmlDoc = document.querySelector("html");

buttons.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (item.classList.contains("button--request")) {
      overlays.forEach(function (overlay) {
        if (overlay.querySelector(".popup--offer")) {
          overlay.classList.add("overlay--show");
          userName = document.forms[1].elements.user_name;
          userName.focus();
        };
      });
    } else if (item.classList.contains("button--callback")) {
        overlays.forEach(function (overlay) {
          if (overlay.querySelector(".popup--callback")) {
            overlay.classList.add("overlay--show");
            userName = document.forms[2].elements.user_name;
            userName.focus();
          };
        });
      } else {
        if (item.classList.contains("button--consultation")) {
          overlays.forEach(function (overlay) {
            if (overlay.querySelector(".popup--consultation")) {
              overlay.classList.add("overlay--show");
              objectSquare = document.forms[3].elements.object_square;
              objectSquare.focus();
            };
          });
        }
      }
    htmlDoc.classList.add("disable-scroll");
  })
})

buttons.forEach(function (sendFormButton) {
  sendFormButton.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (sendFormButton.classList.contains("order-calculation")) {
      overlays.forEach(function (overlay) {
        if (overlay.querySelector(".popup--offer")) {
          overlay.classList.remove("overlay--show");
        }
      });
    } else if (sendFormButton.classList.contains("order-callback")) {
        overlays.forEach(function (overlay) {
          if (overlay.querySelector(".popup--callback")) {
            overlay.classList.remove("overlay--show");
          }
        });
      } else if (sendFormButton.classList.contains("order-consultation")) {
          overlays.forEach(function (overlay) {
            if (overlay.querySelector(".popup--consultation")) {
              overlay.classList.remove("overlay--show");
            }
          });
        }
    htmlDoc.classList.toggle("disable-scroll");
  })
})

document.onclick = function (evt) {
  overlays.forEach(function (overlay) {
    if (evt.target.className.toString().includes("overlay")) {
      overlay.classList.remove("overlay--show");
      htmlDoc.classList.remove("disable-scroll");
    };
  })
}
