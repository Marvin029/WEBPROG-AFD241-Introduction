// Typing Effect
let text = "Welcome to My Portfolio!";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("mainHeading").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Scroll reveal sections
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// Button functions
function updateGoal() {
  const input = document.getElementById("goalInput").value.trim();
  document.getElementById("goalText").textContent = input || "To graduate and work";
}

function showDateTime() {
  const now = new Date();
  document.getElementById("dateTime").innerHTML = now.toLocaleString();
}

function addHobby() {
  const newHobby = document.getElementById("newHobby").value.trim();
  if (newHobby) {
    const li = document.createElement("li");
    li.textContent = newHobby;
    document.getElementById("hobbyList").appendChild(li);
    document.getElementById("modalHobbyName").textContent = `You added: ${newHobby}`;
    openModal();
    document.getElementById("newHobby").value = "";
  }
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Modal popup functions
function openModal() {
  document.getElementById("hobbyModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("hobbyModal").classList.add("hidden");
}
