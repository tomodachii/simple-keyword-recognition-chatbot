import script from "./script.js";

// The form we receive user input from
let chatForm = document.querySelector("#chatform");
let chatList = document.querySelector(".chatlist");

// The sender should be "user" or "bot"
function displayChatBubble(message, sender) {
  let chatBubble = document.createElement("li");
  chatBubble.classList.add(sender === "user" ? "user__input" : "bot__output");
  chatBubble.innerHTML = message;
  chatList.appendChild(chatBubble);
  //Sets chatList scroll to the bottom
  chatList.scrollTop = chatList.scrollHeight;
}

function checkInput(input) {
  for (let keyword in script) {
    if (input.indexOf(keyword) >= 0) {
      return script[keyword].responses;
    }
  }
  return ["Xin lỗi tôi chưa hiểu ý bạn! Bạn có thể làm rõ hơn được không?"];
}

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function makeResponse(input) {
  let responseArr = checkInput(input);
  if (responseArr) return responseArr[random(0, responseArr.length)];
  return "";
}

function handleInput() {
  // The text area for user's input text
  let textInput = document.querySelector(".chatbox");
  let input = textInput.value.toLowerCase();
  //Check empty textarea
  if (input.length > 0) {
    displayChatBubble(input, "user");
    let response = makeResponse(input);
    if (response) displayChatBubble(response, "bot");
  }
  textInput.value = "";
}

window.onload = () => {
  // Handle Enter
  chatForm.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      handleInput();
    }
  });
  // Handle submit
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleInput();
  });
};
