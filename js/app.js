let engineNumber = 2;

const body = document.body;
const braveButton = document.getElementById('brave-button');
const googleButton = document.getElementById('google-button');
const ddgButton = document.getElementById('ddg-button');

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.classList.add(currentTheme);
}

function engine(value) {
    console.log(value);

    switch (value) {
        case 1:
            braveButton.classList.add('active');
            googleButton.classList.remove('active');
            ddgButton.classList.remove('active');
            break;
        case 2:
            braveButton.classList.remove('active');
            googleButton.classList.add('active');
            ddgButton.classList.remove('active');
            break;
        case 3:
            braveButton.classList.remove('active');
            googleButton.classList.remove('active');
            ddgButton.classList.add('active');
            break;
    }

    engineNumber = value;
}

var input = document.getElementById("search-input");

input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("search-button").click();
    }
});

function search() {
    value = document.getElementById('search-input').value;

    switch (engineNumber) {
        case 1:
            window.location = "https://search.brave.com/search?q=" + value + "&source=web";
            break;
        case 2:
            window.location = "https://www.google.com/search?q=" + value;
            break;
        case 3:
            window.location = "https://www.duckduckgo.com/?q=" + value;
            break;
    }
}

function themeChange() {
    if (body.classList.contains("dracula")) {
        body.classList.replace("dracula", "nord");
        localStorage.setItem('theme', "nord");
    } else if (body.classList.contains("nord")) {
        body.classList.replace("nord", "dracula");
        localStorage.setItem('theme', "dracula");
    }
}