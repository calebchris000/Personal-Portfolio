const wrapper = document.querySelector(".imageWrapper");

const getImage = async () => {
  const request = await fetch(
    "https://avatars.githubusercontent.com/u/112436618?v=4"
  );
  const response = await request.blob();

  let img = document.createElement("img");
  img.classList.add("profile");
  img.src = URL.createObjectURL(response);
  wrapper.prepend(img);
};

getImage();

const addDescription = () => {
  let container = document.createElement("div");
  container.classList.add("subTextWrapper");

  const description = {
    user: "Name: Caleb Chigozie Nwaizu.",
    age: "Age: 22.",
    residence: "Residence: Lagos, Lagos State, Nigeria.",
    hobby: "Hobbies: Reading, Writing, Playing Basketball.",
  };
  let text = "";

  for (let item in description) {
    text += `<div class="info">${description[item]}</div>`;

    container.innerHTML = text;
  }
  wrapper.appendChild(container);
};

addDescription();
