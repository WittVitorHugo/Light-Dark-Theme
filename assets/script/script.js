const body = document.body;
const btn = document.querySelector(".btn");
const text = document.querySelector("span strong");

function changeTheme() {
    body.classList.toggle('dark-mode');
    btn.classList.toggle('dark-mode');
    if (body.className == "dark-mode") {
        text.innerHTML = "Dark";
        btn.innerHTML = "Light Mode";
    } else {
        text.innerHTML = "Light";
        btn.innerHTML = "Dark Mode";
    }
}

btn.addEventListener('click', changeTheme);
