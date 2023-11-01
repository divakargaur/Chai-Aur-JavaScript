// AJAX -> Asynchronous JavaScript and XML

const userCard = document.getElementById("userCard");
const requestURL = "https://api.github.com/users/divakargaur";
const xml = new XMLHttpRequest();

xml.onreadystatechange = function () {
    if (xml.readyState === 4) {
        const data = JSON.parse(this.responseText);
        // data is off type string
        // JSON.parse to convert string to object
        const userAvatar = data.avatar_url;
        const userID = data.login;
        const userName = data.name;
        createCard(userAvatar, userID, userName);
    };
};
xml.open("GET", requestURL);
xml.send();

function createCard(userAvatar, userID, userName) {
    const div = document.createElement("div");
    const card = `
    <img src="${userAvatar}" alt="userAvatar" />
    <h2>${userName}</h2>
    <h3>${userID}</h3>
    `
    div.innerHTML = card;
    userCard.appendChild(div);
}