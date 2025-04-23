function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  document.getElementById("p2").style.color = "blue";
  document.getElementById("p2").style.fontFamily = "Arial";
  document.getElementById("p2").style.fontSize = "larger";
}

function changeHeading() {
  document.getElementById("mainHeading").innerHTML = "Welcome to My Profile!";
}

function toggleIntro() {
  const intro = document.getElementById("intro");
  intro.style.display = (intro.style.display === "none") ? "block" : "none";
}

function updateGoal() {
  const newGoal = document.getElementById("goalInput").value;
  if (newGoal) {
    document.getElementById("goalText").innerText = newGoal;
    document.getElementById("goalInput").value = '';
  }
}

function showDateTime() {
  const now = new Date();
  document.getElementById("dateTime").innerText = now.toString();
}

function addHobby() {
  const hobbyInput = document.getElementById("newHobby");
  const hobby = hobbyInput.value;
  if (hobby) {
    const list = document.getElementById("hobbyList");
    const li = document.createElement("li");
    li.textContent = hobby;
    list.appendChild(li);
    hobbyInput.value = '';
  }
}
