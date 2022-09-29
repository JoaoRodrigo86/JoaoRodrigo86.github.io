const HEADER = document.getElementById('navbar-header');
const OPEN_BUTTON = document.getElementById("header-down-arrow");
const CLOSE_BUTTON = document.getElementById("header-up-arrow");

function openHeader() {
    HEADER.classList.add('open');
    OPEN_BUTTON.classList.add('hidden');
    CLOSE_BUTTON.classList.remove('hidden');
}
function closeHeader() {
    HEADER.classList.remove('open');
    OPEN_BUTTON.classList.remove('hidden');
    CLOSE_BUTTON.classList.add('hidden');
}