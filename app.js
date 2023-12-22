const container = document.getElementById("container");
const registerationBtn = document.getElementById("registeration");
const loginBtn = document.getElementById("login");

registerationBtn.addEventListener("click", () => {
	container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
	container.classList.remove("active");
});