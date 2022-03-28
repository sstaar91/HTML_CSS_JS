"use strict";

const input = document.getElementById("commentInput");
const submit = document.getElementById("submit");

function checkInput(e) {
  e.preventDefault();

  if (input.value.length === 0) {
    alert("댓글을 입력하세요!");
  } else {
    registerComment(input.value);
  }
}

function registerComment(value) {
  const commentLists = document.getElementById("commentLists");
  const newCommentList = document.createElement("li");
  const newComment = `<span class="name">mx_star</span><span>${value}</span><span class="delete">x</span>`;
  newCommentList.innerHTML = newComment;

  // 풀어서 사용하기
  // const newCommentAuthor = document.createElement("span");
  // const newCommentText = document.createElement("span");
  // const newCommentDelete = document.createElement("span");

  // newCommentAuthor.classList.add("userName");
  // newCommentDelete.classList.add("delete");

  // newCommentAuthor.innerText = "user";
  // newCommentText.innerText = value;
  // newCommentDelete.innerText = "x";

  // newCommentList.appendChild(newCommentAuthor);
  // newCommentList.appendChild(newCommentText);
  // newCommentList.appendChild(newCommentDelete);

    
  makeDeleteEvent(newCommentList);
  commentLists.appendChild(newCommentList);
  input.value = "";
}

function makeDeleteEvent(newCommentList) {
  const deleteBtn = newCommentList.querySelector(".delete");
  deleteBtn.addEventListener("click", () => deleteComment(newCommentList));
}

function deleteComment(newCommentList) {
  newCommentList.remove();
}

const init = () => {
  submit.addEventListener("click", checkInput);
};

init();
