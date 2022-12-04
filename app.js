var input = document.getElementById("search_bar");

input.addEventListener("keydown", function (event) {
	if (event.keyCode === 13) {
		document.getElementById("search_button").click();
	}
});

function search() {
	value = input.value;
	switch (value) {
		case ":color nord":
			themeChange('nord');
			break;
		case ":color dracula":
			themeChange('dracula');
			break;
		case ":go redd":
			window.location = "https://reddit.com";
			break;
		case ":go yt":
			window.location = "https://youtube.com";
			break;
		case ":go gh":
			window.location = "https://github.com/laximit";
			break;
		case ":go not":
			window.location = "https://notion.so";
			break;
		case ":go fig":
			window.location = "https://figma.com";
			break;
		default:
			window.location = "https://www.google.com/search?q=" + value;
	}
}

const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
	body.classList.add(currentTheme);
}

function themeChange(color) {
	body.classList = '';

	if (color == 'nord') {
		body.classList.add('nord');
		localStorage.setItem('theme', 'nord');
	} else if (color === 'dracula') {
		body.classList.add('dracula');
		localStorage.setItem('theme', 'dracula');
	}
}

function FocusOnInput() {input.focus();}
