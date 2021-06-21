const random_play_button = document.querySelector("#random-play-button");
const custom_play_button = document.querySelector("#custom-play-button");

const form_area = document.querySelectorAll(".form-content");
const random_form_area = document.querySelector("#random-room");
const custom_form_area = document.querySelector("#custom-room");

custom_play_button.addEventListener("click", () => {
  custom_form_area.classList.remove("dissappear");
  if (!random_form_area.classList.contains("dissappear"))
    random_form_area.classList.add("dissappear");
  if (!custom_play_button.classList.contains("btn-active"))
    custom_play_button.classList.add("btn-active");
  random_play_button.classList.remove("btn-active");
  form_area.forEach((area) => {
    if (!area.classList.contains("custom-visible")) {
      area.classList.add("custom-form-visible");
    }
  });
});

random_play_button.addEventListener("click", () => {
  random_form_area.classList.remove("dissappear");
  if (!custom_form_area.classList.contains("dissappear"))
    custom_form_area.classList.add("dissappear");
  if (!random_play_button.classList.contains("btn-active"))
    random_play_button.classList.add("btn-active");
  custom_play_button.classList.remove("btn-active");
  form_area.forEach((area) => {
    area.classList.remove("custom-form-visible");
  });
});

const generate_random_room_id_textbox = document.querySelector(
  "#generate-random-room-id"
);

const generate_random_room_id_copy_button = document.querySelector(
  "#generate-random-room-id-copy-button"
);

generate_random_room_id_copy_button.addEventListener("click", () => {
  const text = generate_random_room_id_textbox.value;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const copy_message_element = document.querySelector(".copy-message");
      if (!copy_message_element.classList.contains(".copy-message-visible"))
        copy_message_element.classList.add("copy-message-visible");
      setTimeout(() => {
        copy_message_element.classList.remove("copy-message-visible");
      }, 1500);
    })
    .catch((err) => {
      console.error(error);
    });
});
