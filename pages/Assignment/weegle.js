"use strict";

const colorBtn = document.querySelector(".colorPick");

const goToNextPage = () => {
  location.href = "http://127.0.0.1:5501/pages/Assignment/colorCard.html";
};

colorBtn.addEventListener("click", goToNextPage);
