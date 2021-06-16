const set_username = () => {
  let username = prompt("Enter your Username");
  if (username.trim() == "") {
    username = prompt("Enter your Username");
  } else {
    localStorage.setItem("pictionary_username", username);
    return username;
  }
};

const get_username = () => {
  return localStorage.getItem("pictionary_username");
};
const append_chat = ({ username, message }) => {
  const ul = document.querySelector("#chat-message-list");
  const li = document.createElement("li");
  li.classList.add("item");
  if (username == "Room Bot") li.classList.add("bot_message");
  li.innerHTML = `
        <h5 class="username"> ${username} </h5>
        <p class="message-text">
            ${message}
        </p>
    `;
  ul.appendChild(li);
  ul.scrollTop = ul.clientHeight;
};
export { append_chat, set_username, get_username };
