(() => {
  const socket = new WebSocket(`ws://${window.location.host}/ws`);
  const formEl = document.querySelector("#form");
  const inputEl = document.querySelector("#input");
  const chatsEl = document.querySelector("#chats");

  if (!formEl || !inputEl || !chatsEl) {
    throw new Error("Init failed!");
  }

  const chats = [];

  const adjectives = ["멋진", "훌륭한", "친절한", "새침한"];
  const animals = ["물범", "사자", "사슴", "돌고래", "독수리"];

  function pickRandom(array) {
    const randomIdx = Math.floor(Math.random() * array.length);
    const result = array[randomIdx];
    if (!result) {
      throw new Error("array length is 0");
    }
    return result;
  }

  const myNickname = `${pickRandom(adjectives)} ${pickRandom(animals)}`;

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    socket.send(
      JSON.stringify({
        nickname: myNickname,
        message: inputEl.value,
      })
    );
    inputEl.value = "";
  });

  socket.addEventListener("message", (event) => {
    chats.push(JSON.parse(event.data));
    chatsEl.innerHTML = "";
    chats.forEach(({ nickname, message }) => {
      const div = document.createElement("div");
      div.innerText = `${nickname}: ${message}`;
      chatsEl.appendChild(div);
    });
  });
})();
