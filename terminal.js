const input = document.getElementById("input");
const output = document.getElementById("output");

function print(text) {
  const p = document.createElement("p");
  p.classList.add("line");
  p.textContent = text;
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}

function help() {
  print("Available commands:");
  print("about           → developer info");
  print("projects        → show projects");
  print("portfolio       → launch visual mode");
  print("clear           → clear terminal");
}

function about() {
  print("Frontend developer focused on interactive UI systems.");
  print("HTML • CSS • JS • APIs");
}

function projects() {
  print("Loading projects module...");
  setTimeout(() => {
    print("1. API Dashboard");
    print("2. Task Manager");
    print("3. E-Commerce UI");
  }, 400);
}

function clear() {
  output.innerHTML = "";
}

/* 🚀 KEY FEATURE */
function openPortfolio() {
  print("Switching to visual mode...");
  print("Launching portfolio.html");

  setTimeout(() => {
    window.location.href = "portfolio.html";
  }, 900);
}

input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const value = input.value.trim().toLowerCase();
  print(`visitor@chrisOS:~$ ${value}`);

  switch (value) {
    case "help":
      help();
      break;
    case "about":
      about();
      break;
    case "projects":
      projects();
      break;
    case "clear":
      clear();
      break;
    case "portfolio":
      openPortfolio();
      break;
    default:
      print(`command not found: ${value}`);
  }

  input.value = "";
});