const button = document.getElementById("button");
const toasts = document.getElementById("toast");

const messages = ["message one ", "messages two ", "message three"];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const nofic = document.createElement("div");
  nofic.classList.add("toast");

  nofic.innerText = getRandommessage();

  toasts.appendChild(nofic);

  setTimeout(() => {
    nofic.remove();
  }, 3000);
}

function getRandommessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
