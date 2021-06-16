const append_chat = ({ username, message }) => {
  const ul = document.querySelector("#chat-message-list");
  const li = document.createElement("li");
  li.classList.add("item");
  li.innerHTML = `
        <h5 class="username"> ${username} </h5>
        <p class="message-text">
            ${message}
        </p>
    `;
  ul.appendChild(li);
  ul.scrollTop = ul.clientHeight;
};
export { append_chat };
