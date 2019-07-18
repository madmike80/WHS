let param = new URLSearchParams(window.location.search);
let userName = param.get("username");

const url = "https://api.github.com/users/";
let gitUrl = url + userName;

fetch(gitUrl)
  .then(result => result.json())
  .then(data => showUserInfo(data))
  .catch(err => console.log("Информация о пользователе не доступна"));

function showUserInfo(data) {
  if (data.message !== "Not Found") {
    let avatar = data.avatar_url;
    let name = data.name;
    let profileDescription = data.bio;
    let profileUrl = data.html_url;

    let avatarElem = document.createElement("img");
    avatarElem.setAttribute("src", avatar);
    document.body.appendChild(avatarElem);

    let nameElem = document.createElement("a");
    nameElem.setAttribute("href", profileUrl);
    nameElem.innerHTML = name;
    document.body.appendChild(nameElem);

    let descriptionElem = document.createElement("p");
    if (profileDescription != null) {
      descriptionElem.innerHTML = profileDescription;
    } else {
      descriptionElem.innerHTML = "Информация о пользователе не найдена";
    }
    document.body.appendChild(descriptionElem);
  } else {
    console.log("Информация о пользователе не доступна");
  }
}
