"use strict";

const linkBtn = document.querySelector(".goToWeegle");

const goToPrevPage = () => {
  location.replace("http://127.0.0.1:5501/pages/Assignment/weegle.html");
};

linkBtn.addEventListener("click", goToPrevPage);
