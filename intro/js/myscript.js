function myFunction() {
  document.getElementById("demo").innerHTML = "Text has been changed!";
  const p2 = document.getElementById("p2");
  p2.style.color = "blue";
  p2.style.fontFamily = "Arial";
  p2.style.fontSize = "larger";
}

function toggleIntro() {
  const intro = document.getElementById("intro");
  intro.style.display = (intro.style.display === "none") ? "block" : "none";
}

function updateGoal() {
  const input = document.getElementById("goalInput").value;
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
    li.innerHTML = `${newHobby} <span class="delete-btn" onclick="removeHobby(this)">❌</span>`;
    document.getElementById("hobbyList").appendChild(li);
    document.getElementById("newHobby").value = "";
  }
}

function removeHobby(element) {
  element.parentElement.remove();
}

// Scroll to top functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
