const input = document.getElementById("input");
const output = document.getElementById("output");

// PRINT FUNCTIONS

function print(cmd,text) {
  const p = document.createElement("p");
  const command = document.createElement("span");

  command.classList.add("cmd");
  p.classList.add("line");

  p.textContent = text;
  command.textContent = cmd;

  p.prepend(command);
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}

function printInfo(text) {
  const p = document.createElement("p");
  p.classList.add("line");
  p.classList.add("info");
  p.textContent = text;
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}


// HELP COMMAND

function help() {  
  print("", "Available commands:");
  print("projects","        → show projects");
  print("skills","          → show skills");
  print("portfolio","       → launch visual mode");
  print("about","           → developer info");
  print("clear","           → clear terminal");
}

// ABOUT COMMAND

function about() {
  printInfo("Hello, I'm Chris, a passionate full-stack developer who enjoys building clean, functional, and scalable systems. My experience spans frontend development and, especially, backend development, where I create APIs and the logic that powers modern applications. I love turning ideas into reliable software, crafting smooth user experiences, and writing efficient, maintainable code. I'm always exploring new technologies and looking for exciting challenges. Let's build something great together.");
}

// SKILLS COMMAND

function skills() {
  printInfo("Communication | Python | Django | PostgreSQL | JavaScript | Frontend Development | REST APIs | Git | Problem Solving | Bilingue (English/Spanish)");
}

// PROJECTS COMMAND

function projects() {
  print("","Loading projects module...");
  setTimeout(() => {
    printInfo("1. API Dashboard");
    printInfo("2. Task Manager");
    printInfo("3. E-Commerce UI");
  }, 400);
}

// CLEAR COMMAND

function clear() {
  output.innerHTML = "";
  print("projects","        → show projects");
  print("skills","          → show skills");
  print("portfolio","       → launch visual mode");
  print("about","           → developer info");
  print("clear","           → clear terminal");
}

// PORTFOLIO COMMAND

function openPortfolio() {
  print("","Switching to visual mode...");
  print("","Launching portfolio.html");

  setTimeout(() => {
    window.location.href = "portfolio.html";
  }, 1500);
}

// INPUT HANDLER

input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const value = input.value.trim().toLowerCase();
  print('',`visitor@chrisOS:~$ ${value}`);

  switch (value) {
    case "help":
      help();
      break;
    case "projects":
      projects();
      break;
    case "skills":
      skills();
      break;
    case "portfolio":
      openPortfolio();
      break;
    case "about":
      about();
      break;
    case "clear":
      clear();
      break;
    default:
      print("","command not found: " + value);
  }

  input.value = "";
});