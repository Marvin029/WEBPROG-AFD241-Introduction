function myFunction() {
    const demo = document.getElementById("demo");
    const p2 = document.getElementById("p2");
  
    demo.innerHTML = "Paragraph changed.";
    p2.style.color = "blue";
    p2.style.fontFamily = "Arial";
    p2.style.fontSize = "larger";
  }
  
  function changeHeading() {
    document.getElementById("mainHeading").innerHTML = "Welcome to My Portfolio!";
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
      li.textContent = newHobby;
      document.getElementById("hobbyList").appendChild(li);
      document.getElementById("newHobby").value = "";
    }
  }
  